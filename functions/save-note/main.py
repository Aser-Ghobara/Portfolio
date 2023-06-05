# add your save-note function here
import json
import boto3

dynamodb_resource = boto3.resource("dynamodb")
table = dynamodb_resource.Table("30158681")

def lambda_handler(event, context):
    body = json.loads(event["body"])
    try:
        table.put_item(Item=body)
        return {
        "statusCode":200,
             "body":json.dumps({
                "message": "Note has been saved"
             })
        }
    
    except Exception as exp:
        print(f"exception: {exp}")
        return {
        "statusCode":500,
             "body":json.dumps({
                "message": str(exp)
    })
    }