import json
import boto3

def lambda_handler(event, context):
    # Extract form data from the event payload
    try:
        form_data = json.loads(event['body'])
        name = form_data['name']
        email = form_data['email']
        message = form_data['message']
    except KeyError:
        return {
            'statusCode': 400,
            'body': json.dumps('Invalid form data')
        }

    # Send email using AWS SES
    try:
        ses_client = boto3.client('ses', region_name='us-east-1')  # Replace 'us-east-1' with your desired SES region
        from_email = 'your_verified_email@example.com'  # Replace with your verified SES email address
        subject = f'New Contact Form Submission from {name}'
        body = f'Name: {name}\nEmail: {email}\nMessage: {message}'
        
        response = ses_client.send_email(
            Source=from_email,
            Destination={
                'ToAddresses': [from_email]
            },
            Message={
                'Subject': {
                    'Data': subject
                },
                'Body': {
                    'Text': {
                        'Data': body
                    }
                }
            }
        )
        
        # Email sent successfully
        return {
            'statusCode': 200,
            'body': json.dumps('Email sent successfully')
        }
    except Exception as e:
        # Handle errors if email sending fails
        return {
            'statusCode': 500,
            'body': json.dumps('Failed to send email')
        }
