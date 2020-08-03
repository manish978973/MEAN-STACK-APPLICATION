# MEAN-STACK-APPLICATION ( DEPLOYMENT IN AWS/AZURE)
A web application based on NodeJS, Angular, Mongo and Express frameworks

<p> A posts web application based on above listed tech languages was designed. It was deployed in AWS based on different modes. We tried deploying the application using AWS native IaaS service Amazon EC2. We also deployed the same application using Amazons PaaS service Amazon Bean stalk. This project was deployed as a part of different cloud services exploration. 

As a latest enhancement the same application was also deployed to Microsoft Azure via Azure DevOps and hosted as Azure Web Service. The backend was deployed to Azure Web service as docker image liniking Azure rgistry.

Thr front end was deployed to another Angular web service in Azure with help of Azure DevOps building pipeline ( only Development and Release(Production)stages).

Both frontend and backend build and relese in Azure was automated with hooks in MS Azure. Pushing a new backend docker image to the respective Azure repository or making changes in the frontend code in this git repository will autotrigger the build and release pipeline, deploying the concerned change.
</p>

### IMPLEMENTATION 1

<Image src="images/Impl1.PNG" class="center" style="width:50%">
  
 Click to navigate to the portal [Posts](http://3.15.176.124/)
  
  

### IMPLEMENTATION 2

<Image src="images/Impl2.JPG" class="center" style="width:50%">
  
Click to navigate to the portal [Posts](http://mean-angular-node-manish.s3-website.us-east-2.amazonaws.com/)

### IMPLEMENTATION 3

<Image src="images/AppServices_Frontend_Backend.JPG" class="center" style="width:50%">
<Image src="images/angular_frontend_appservice.JPG" class="center" style="width:50%">
<Image src="images/docker_backend_appservice.JPG" class="center" style="width:50%">
<Image src="images/Custom_Docker_Repository.JPG" class="center" style="width:50%">
<Image src="images/AngularWebapp_build.JPG" class="center" style="width:50%">
<Image src="images/Angular_Webapp_build_stages.JPG" class="center" style="width:50%">
<Image src="images/Azure_Webapp_Release_stages.JPG" class="center" style="width:50%">
<Image src="images/Azure_Angular_Release.JPG" class="center" style="width:50%">

The Swagger API feature has been added to second branch ( Master 2 ) of this repository.


