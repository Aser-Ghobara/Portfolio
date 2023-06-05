terraform {
  required_providers {
    aws = {
      version = ">= 4.0.0"
      source  = "hashicorp/aws"
    }
  }
}

provider "aws" {
  region = "ca-central-1"
}

locals {
  function_name = "delete-30158681"
  handler_name  = "main.lambda_handler"
  artifact_name = "..\\functions\\delete-note\\artifact-delete.zip"

  function_name2 = "get-30158681"
  handler_name2  = "main.lambda_handler"
  artifact_name2 = "..\\functions\\get-notes\\artifact-get.zip"

  function_name3 = "save-30158681"
  handler_name3  = "main.lambda_handler"
  artifact_name3 = "..\\functions\\save-note\\artifact-save.zip"

}
resource "aws_iam_policy" "logs" {
  name        = "lambda-logging-policy"
  description = "IAM policy for logging from a lambda"
  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents",
        "dynamodb:PutItem",
        "dynamodb:DeleteItem",
        "dynamodb:GetItem",
        "dynamodb:Scan",
        "dynamodb:UpdateItem",
        "dynamodb:Query"
      ],
      "Resource": ["arn:aws:logs:*:*:*", "*", "${aws_dynamodb_table.notes.arn}"],
      "Effect": "Allow"
    }
  ]
}
EOF
}
resource "aws_dynamodb_table" "notes" {
  name         = "30158681"
  billing_mode = "PROVISIONED"

  read_capacity = 1
  write_capacity = 1

  hash_key = "email"
  range_key = "id"

  attribute {
    name = "email"
    type = "S"
  }
  attribute {
    name = "id"
    type = "S"
  }
}


// get
resource "aws_iam_role" "lambda2" {
  name               = "iam-for-lambda-${local.function_name2}"
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

data "archive_file" "lambda2" {
  type = "zip"
  source_file = "..\\functions\\get-notes\\main.py"
  output_path = "..\\functions\\get-notes\\artifact-get.zip"
}

resource "aws_lambda_function" "lambda2" {
  role             = aws_iam_role.lambda.arn
  function_name    = local.function_name2
  handler          = local.handler_name2
  filename         = local.artifact_name2
  source_code_hash = data.archive_file.lambda.output_base64sha256

  runtime = "python3.9"
}

resource "aws_lambda_function_url" "url2" {
  function_name      = aws_lambda_function.lambda2.function_name
  authorization_type = "NONE"

  cors {
    allow_credentials = true
    allow_origins     = ["*"]
    allow_methods     = ["GET"]
    allow_headers     = ["*"]
    expose_headers    = ["keep-alive", "date"]
  }
}

output "lambda_url_get" {
  value = aws_lambda_function_url.url2.function_url
}

resource "aws_iam_role_policy_attachment" "lambda_logs2" {
  role       = aws_iam_role.lambda2.name
  policy_arn = aws_iam_policy.logs.arn
}

// delete 
resource "aws_iam_role" "lambda" {
  name               = "iam-for-lambda-${local.function_name}"
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}


data "archive_file" "lambda" {
  type = "zip"
  source_file = "..\\functions\\delete-note\\main.py"
  output_path = "..\\functions\\delete-note\\artifact-delete.zip"
}

resource "aws_lambda_function" "lambda" {
  role             = aws_iam_role.lambda.arn
  function_name    = local.function_name
  handler          = local.handler_name
  filename         = local.artifact_name
  source_code_hash = data.archive_file.lambda.output_base64sha256

  runtime = "python3.9"
}
resource "aws_lambda_function_url" "url" {
  function_name      = aws_lambda_function.lambda.function_name
  authorization_type = "NONE"

  cors {
    allow_credentials = true
    allow_origins     = ["*"]
    allow_methods     = ["DELETE"]
    allow_headers     = ["*"]
    expose_headers    = ["keep-alive", "date"]
  }
}

output "lambda_url_delete" {
  value = aws_lambda_function_url.url.function_url
}

resource "aws_iam_role_policy_attachment" "lambda_logs" {
  role       = aws_iam_role.lambda.name
  policy_arn = aws_iam_policy.logs.arn
}

// save
resource "aws_iam_role" "lambda3" {
  name               = "iam-for-lambda-${local.function_name3}"
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

data "archive_file" "lambda3" {
  type = "zip"
  source_file = "..\\functions\\save-note\\main.py"
  output_path = "..\\functions\\save-note\\artifact-save.zip"
}


resource "aws_lambda_function" "lambda3" {
  role             = aws_iam_role.lambda.arn
  function_name    = local.function_name3
  handler          = local.handler_name3
  filename         = local.artifact_name3
  source_code_hash = data.archive_file.lambda.output_base64sha256

  runtime = "python3.9"
}

resource "aws_lambda_function_url" "url3" {
  function_name      = aws_lambda_function.lambda3.function_name
  authorization_type = "NONE"

  cors {
    allow_credentials = true
    allow_origins     = ["*"]
    allow_methods     = ["POST"]
    allow_headers     = ["*"]
    expose_headers    = ["keep-alive", "date"]
  }
}

output "lambda_url_save" {
  value = aws_lambda_function_url.url3.function_url
}

resource "aws_iam_role_policy_attachment" "lambda_logs3" {
  role       = aws_iam_role.lambda3.name
  policy_arn = aws_iam_policy.logs.arn
}

