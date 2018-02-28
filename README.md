# Waller Reviews

## Overview

### Access 

You can view this website by clicking on the following link " https://lukewaller.github.io/s1project "

### What is this app for?
 
This is a review website for my stream one project. It helps users find out more about brands that they are interested in by displaying easily accessible reviews to registered users.

### What does it do?
 
This reviews app will allow users to register and login. Once the users have done that, they will have acccess to the reviews page and will be automatically directed to the reviews page.
 
### How does it work
 
This app uses JSON Web Tokens to authenticate users and keep them logged in. Some of the data is consumed from an API hosted on Heroku using AngularJS. Bootstrap was used for the styling of the website.
 
### Testing
I tested the routes using jasmine. The authentiation was tested manualy.I also tested accross different browsers and screen sizes 

## Features
 
### User Based Features
    - Registration
    - Login
    - Logout

### Review Based Features
    - Viewing reviews once logged in
 
## Tech Used

### Some of the tech used includes:
- [AngularJS](https://angularjs.org/)
    - We use **AngularJS** to handle page routing, we also use it to make calls to the REST API and build custom directives
- [Bootstrap](http://getbootstrap.com/)
    - We use **Bootstrap** to give our project a simple, responsive layout
- [npm](https://www.npmjs.com/)
    - We use **npm** to help manage some of the dependencies in our application
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of our libraries and frameworks
 
## Contributing
  -w3schools has been a good refrence site to refresh different codes and methods.
  
  
 
### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request