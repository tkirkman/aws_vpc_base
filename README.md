# AWS VPC Base for NodeJS App
The below serverless framework script creates an S3 bucket named nodejs-backup and a Lambda function. The Lambda function will trigger after each backup file upload to the nodejs-backup S3 bucket and log the event to CloudWatch/Logs.

The below ansible playbook will create a VPC with associated subnets and EC2 instances for a NodeJS app.

## Prerequisites:

1.) Install Serverless for Nodejs on your local machine or server
(npm install -g serverless)
2.) Install Ansible on your local machine or server
http://docs.ansible.com/ansible/latest/intro_installation.html
3.) Add AWS Variables to your ENV
export AWS_ACCESS_KEY_ID=XXXXXXXXXXXXX
export AWS_SECRET_ACCESS_KEY=XXXXXXXXXXXX
4.) Create an AWS_USER_NAME and configure in IAM 
  (ie USER_NAME ansible)
5.) Add Neccessary Permissions to IAM user
  AWSCloudFormationReadOnlyAccess
  AmazonS3FullAccess
  AmazonEC2FullAccess
  AWSLambdaFullAccess
  IAMReadOnlyAccess
  In-line Policies:
    cloudformation: *
    iam:CreateRole
    iam:PutRolePolicy
    iam:DeleteRolePolicy
6.) Add EC2 key-pair to IAM
7.) Update key_name variable in group_vars/all.yml with your new EC2 key-pair details

## Steps:

1.) Clone the repo and cd into it.
  ```
  git clone 
  cd dir_name

  ```
2.) Run the below command to create the S3 bucket and Lambda function.
  ```
  serverless deploy

  ```
3.) Run the below command to create the VPC network and EC2 instances.
  ```
  ansible-playbook build_vpc.yml -u AWS_USER_NAME (ie ansible)

  ```
