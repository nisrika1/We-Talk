# We-Talk
A Distributed Social Media Application using Kafka
## Description
This directory contains the source code of the front-end, backend and the Kafka backend code.

## Setup Info

Pre-requisites
React.js
Node.js
VS code
Kafka
MongoDB
AWS S3

## MongoDB Setup

Create 3 collections named users, posts and comments using the below steps. 

To create a table (collection) in MongoDB Atlas, which is a cloud-based MongoDB service, you can follow these step-by-step instructions:
Sign in to MongoDB Atlas: Go to the MongoDB Atlas website (https://www.mongodb.com/cloud/atlas) and sign in using your MongoDB Atlas account credentials. If you don't have an account, you can create one for free.
Set up a new MongoDB Atlas cluster: If you haven't already set up a MongoDB Atlas cluster, you'll need to create one. Follow the instructions provided by MongoDB Atlas to create and configure your cluster. This involves selecting a cloud provider, region, cluster tier, and other configuration options.
Access your MongoDB Atlas cluster: Once your cluster is set up and running, go to the MongoDB Atlas dashboard and click on your cluster name to access its details.
Create a database: In the cluster details page, click on the "Collections" tab, then click on the "Create Database" button. Enter a name for your database and choose any desired additional settings. Click "Create" to create the database.
Create a collection (table): In the "Collections" tab, click on the "Add My Own Data" button. Provide the following details to create a collection:
Database: Select the database you created in the previous step.
Collection Name: Enter a name for your collection.
Configure Additional Options: You can configure additional options like schema validation, indexing, and more if desired.
Click "Create" to create the collection.
Verify the collection creation: Once the collection is created, you can verify its existence by going to the "Collections" tab in your MongoDB Atlas cluster details page. You should see the newly created collection listed there.
That's it! You have successfully created a collection (table) in MongoDB Atlas.

Follow the below steps to access the MongoDB from your local.
Access your MongoDB Atlas cluster: In the MongoDB Atlas dashboard, click on your cluster name to access its details.
Go to "Database Access": In the cluster details page, click on the "Database Access" tab in the left sidebar.
Create a database user: Click on the "Add New Database User" button to create a new user. Provide a username and password for the user and set the appropriate database user privileges. Remember these credentials as you will need them to authenticate your connection.
Configure IP Whitelist: In the left sidebar, click on "Network Access." By default, MongoDB Atlas allows access only from specific IP addresses. To connect from your local machine, you need to add your IP address to the IP Whitelist. Click on the "Add IP Address" button and either add your current IP address or specify a range of IP addresses.
Obtain the connection string: In the left sidebar, click on "Clusters" and then click the "Connect" button for your cluster. Select "Connect your application" from the connection methods.
Choose your driver and version: Select your preferred driver and version from the available options. MongoDB Atlas will generate the connection string based on your selection.
Copy the connection string: MongoDB Atlas will provide you with the connection string or URL. Click on the "Copy" button next to the connection string to copy it to the clipboard.
Now you have the connection string to access your MongoDB Atlas database from your local code. Assign this string to a variable called MongoDB in index.js file in Kafka-server code. Now your code will be able to access the collections(Tables).

The below is the image of the mongo DB cluster.
 


## C. AWS S3 Setup

Follow the below steps to create an S3 bucket to upload images.

Log in to the AWS Management Console.
Navigate to the S3 service by searching for "S3" in the search bar or locating it under the "Storage" category.
Click on the "Create bucket" button to start the bucket creation process.
Provide a unique bucket name. Bucket names must be globally unique across all existing bucket names in AWS, as they are part of the bucket's URL. Choose a name that reflects the purpose or content of the bucket.
Select the AWS region where you want the bucket to be created. Consider choosing a region closer to your intended users to minimize latency.
Choose the appropriate settings for block public access. This ensures that the bucket and its contents are not publicly accessible unless explicitly configured.
Configure the bucket permissions. You can set access control settings to specify who can access the bucket and its contents. You can choose between AWS Identity and Access Management (IAM) roles, bucket policies, and Access Control Lists (ACLs) depending on your requirements.
Configure the bucket encryption options. You can choose to enable server-side encryption using AWS Key Management Service (KMS) keys for enhanced data security.
Set up versioning if desired. Versioning allows you to keep multiple versions of an object within the bucket, providing additional protection against accidental deletions or overwrites.
Choose the appropriate logging options. You can enable server access logging to track requests made to the bucket and store the logs in another bucket for analysis.
Enable object-level logging if needed. This allows you to track the individual actions performed on objects within the bucket, such as PUT, GET, DELETE, etc.
Configure lifecycle rules if required. Lifecycle rules automate the transition or expiration of objects in the bucket based on predefined criteria, helping you optimize storage costs.
Review the configuration settings and click on the "Create bucket" button to create the S3 bucket.
Once the bucket is created, you can upload files, manage permissions, configure additional settings, and interact with the bucket programmatically or via AWS CLI/SDKs.
Following these steps should help you create an S3 bucket in AWS successfully. After that add the values of the AWS_BUCKET_NAME, AWS_BUCKET_REGION ,AWS_ACCESS_KEY, AWS_SECRET_KEY in the .env file in the we-talk-server folder.



The above image shows the AWS bucket used for this application.

## D. Apache Kafka Setup

Assuming Apache Kafka is already installed in your local system. Follow the below steps to run the application in your local.

Change the path variable in  the zookeeper.properties and server.properties according to your system path.
Run .\bin\windows\zookeeper-server-start.bat .\config\zookeeper.properties in command prompt.

Run .\bin\windows\kafka-server-start.bat .\config\server.properties in different window of command prompt.



Create topics that are in index.js file in kafka broker using the .\bin\windows\kafka-topics.bat --create --bootstrap-server localhost:9092 --topic <topic>



## V. Developer Getting started

Step 1: Clone the project from git into your system. Use the below command to clone it.

git clone https://github.com/nisrika1/We-Talk.git

Step 2: Open the project in VS code

Step 3: Do all the steps in Setup info

Step 4: Open the terminal and go to the we-talk-server(backend-end) folder. Use the below command to start the back-end of the application.

yarn start

Step 5: Open a new terminal and go to the Kafka-server folder that contains the kafka code that interacts with the db. Use the below command to start the frontend of the application.

yarn start

Step 6: Open a new terminal and go to the we-talk(front-end) folder. Use the below command to start the front-end of the application.

yarn start

Step 7: After step 6 the application will run in localhost and the login page of the application will be opened. Click on the “Create a New Account”  button to create an account.



Step 8: Enter the details like username, email id, password, location, from and relationship and click on submit. If all the details you have entered  pass the validation, you will be registered and redirected to the login page. If the validation fails the issue will be displayed.



Step9: To login to the application. Once you are registered, you can go to the login page. Enter the username and password, and click the login button. 
