# add your get-notes function here
import boto3
from boto3.dynamodb.conditions import Key
import json

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table("30158681")

def lambda_handler(event, context):
    email = event["queryStringParameters"]["email"]

    try:
        res = table.query(KeyConditionExpression=Key("email").eq(email))
        return {
            "statusCode": 200,
            "body": json.dumps(res["Items"])
        }
    
    except Exception as exp:
        print(f"{exp}")
        return {
            "statusCode": 500,
            "body": json.dumps({
                "message": str(exp)
            })
        }