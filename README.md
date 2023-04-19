# CLOUD APPLICATION DEVELOPMENT PROJECT

This project includes delivering a cloud based web application which will run with minimum downtime, supporting multiple users to access the application simultaneously
in a secure manner. Further, the project aims to deliver a shopping website wherein users can purchase clothing items and accessories. 

AWS services Integrated:
- AWS Cognito (Authentication system)
- AWS EC2 (For application deployment)
- AWS EC2 Auto Scaling groups
- AWS Elastic Load Balancer

## DEMO OF THE PROJECT

https://user-images.githubusercontent.com/107244393/232896898-902e7215-8e81-4674-9303-40d3d18aa307.mp4


## Design of the Project

![image](https://user-images.githubusercontent.com/107244393/232892817-da582923-2eef-43cc-a82d-9ce4e606132c.png)


![image](https://user-images.githubusercontent.com/107244393/232892745-4c21adcf-b738-40ed-b323-53b913fdfcca.png)


## Features of the project:
-	Authentication System
-	Browsing products on the website
-	Viewing Product details
-	Adding products to cart
-	Getting the total amount for the products selected in cart
-	Successfully placing order of the selected items in the cart


## How to run the project?
> python server.py

## Multi-Threaded HTTP Web-Server Implementation

A multithreaded HTTP web server which will run multiple and individual threads for the server and client side, will start a new thread each time a client accesses the website. After starting the HTTP web server, HTML,CSS and JS files are rendered defined in requestHandler.py
The server is stopped when a critical error occurs.
 
## Testing Multi-threading feature
> python multithreading.py n

Here, n is the number of worker threads you want to spawn for conformance and stress tests on GET,PUT and DELETE HTTP requests.

## AWS Cognito Integration 

1. Change the URL mentioned in the index.html
"https://homestyle.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=5icc2b3ks47a43hopdmbdoeqer&redirect_uri=http://localhost:8000/home.html"

2. Configure homestyle-cognito.yaml
Here,change the parameters: UserPoolName,CallBackURLs,UserPoolId,Domain

AWS cognito api is fetched which presents the the sign up page to the user. 
![image](https://user-images.githubusercontent.com/107244393/232894061-1a292cb5-946c-434f-bdc1-cc350a358089.png)
![image](https://user-images.githubusercontent.com/107244393/232894110-f2139fa8-bbf6-49ad-9dcd-710aa5ddb515.png)


## AWS Deployment
The application is deployed on AWS EC2 instance using Ubuntu canonical AMI. The instance is created inside a VPC, which will provide security and isolation to the application. Security rules like TCP connection on port 8000, SSH were defined. 
We’ll connect to the instance using Putty and copy the files from our local desktop to the remote instance by establishing a remote connection using WinSCP SMTP protocol. Once the files are transferred, install requirements.txt on the instance terminal and launch the application using: python server.py.
![image](https://user-images.githubusercontent.com/107244393/232894617-7d34ddd5-3512-415e-85fe-26df8391e29e.png)
![image](https://user-images.githubusercontent.com/107244393/232976163-5423c1c0-5353-436a-835f-16a96d5c1670.png)


Now copy the public IPv4 address from the instance details and add port 8000 at the end of the address and run it on browser. You can see that the application is now successfully running on the AWS Cloud.
![image](https://user-images.githubusercontent.com/107244393/232894690-00689c27-9928-4ff9-8db9-b6840ced32d4.png)

Once the user is successfully authenticated using AWS Cognito, they will be navigated to the main page of the website.
![image](https://user-images.githubusercontent.com/107244393/232894795-958c697f-a9d8-4c0d-b147-810a323ad7a6.png)

Further Elastic Load Balancer and EC2 Auto Scaling groups are linked to the the EC2 instance providing scalability and reliability.
- Elastic Load Balancer:
![image](https://user-images.githubusercontent.com/107244393/232976887-5fa44948-9c23-446a-a251-95b59eb7fe9e.png)
![image](https://user-images.githubusercontent.com/107244393/232976914-5ff24969-5e96-41dd-a37d-1047d07c4519.png)

- EC2 Auto-Scaling Group
Create a launch template for the auto scaling group and configure 6 availability zones wherein the instances of the auto-scaling group will be deployed.Now once the auto scaling group is created, we can browse to its activity history and see that as the desired capacity is set to 2, two new instances are launched in different availability zones of the same configuration as that of the originally created instance. This can be checked by navigating to the Instance dashboard of EC2 , wherein we can see that three instances are now up and running. 
![image](https://user-images.githubusercontent.com/107244393/232977372-4cb0df53-e03e-4bc3-b5c0-0f056ad4327d.png)
![image](https://user-images.githubusercontent.com/107244393/232977416-9576a53c-e8c4-4f3c-b2b6-d3b8ea646bf2.png)


## Big-data-analytics of Amazon Review Dataset based on Digital Music Purchase ( hadoop folder )
We are analysing Amazon review data using Pyspark which can provide a scalable, flexible, and fast way to gain valuable insights into customer behaviour and sentiment. These insights can help inform marketing and product development strategies, ultimately leading to improved business performance and customer satisfaction.

Steps performed for incorporating Big Data Analytics in this project are:
1.	I chose dataset of Digital Music purchase reviews of Amazon. 
![image](https://user-images.githubusercontent.com/107244393/232896192-12fc3023-d8a9-4798-a347-d52a1282815f.png)

2.	Then Extract the Amazon review data of digital music purchase from the URL of object uploaded in AWS S3 bucket.
![image](https://user-images.githubusercontent.com/107244393/232896257-21601416-8f64-4c81-ab3f-47d7941898c9.png)

 
3.	Transform the extracted the data type of several columns in the "digital_music_reviews_df" dataframe to the specified data types. Transform Data was then transformed(cleaned) before tables were created using our PgAdmin SQL schema for reference.
 ![image](https://user-images.githubusercontent.com/107244393/232896301-a3f1d341-152c-4e08-9476-9a6680074776.png)

4.	Load the data frames to RDS database. Each table that was created above was then loaded onto the PgAdmin using AWS's RDS connection I created.
![image](https://user-images.githubusercontent.com/107244393/232896349-4568309a-9f93-4d81-b4e2-cac86d818d56.png)


## Map-reduce implementation on .txt file ( map-reduce folder )
We first transfer the python files for mapper.py and reducer.py from our local machine to the remote host. Also download an ebook .txt file to test out the functionality of the python files written. 
Now set the python path in each of the python files at the top. If you are not sure of the python path type in the command: which python3 (this will give the path).
> cat /home/ubuntu/Beam-Private-George-O---Geor-[ebooksread.com].txt | /home/ubuntu/mapper.py

![image](https://user-images.githubusercontent.com/107244393/232896624-845fdf3d-2bcf-4964-b881-ab144481e31a.png)



## Docker Deployment
> docker build -t <image_name> .

![image](https://user-images.githubusercontent.com/107244393/232976520-2c3a728b-580d-4198-93de-ac7cec2138db.png)

> docker run -it <image_id>

![image](https://user-images.githubusercontent.com/107244393/232976576-68ae25f9-40ad-4173-a191-ba198a0ead6c.png)

