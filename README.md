# Burger-2-The-Sequel

## Live Link

https://eat-da-burger-sandesh.herokuapp.com/

## Description

This application is a full-stack application utilizing HTML/CSS/Bootstrap/Handlebars for the front-end. It follows a MVC design pattern with the use of Node, Express and it uses MySQL as the database.

* The user has the option to add a burger in the form section on the left side of the page.
* It will then get added to the burger list in the middle of the page.
    * This burger will have the option of "Eat Me!" next to it. Which clicked on will move it to the eaten burgers section on the right side of the page.
* The app stores all the burgers in the database whether they have been eaten or not.


## Overview

<img alt="EatDaBurgerDemoPicture" src="public/assets/img/DemoPicture.png" width="" height="" />

## Local Setup

**Step 1 - Clone my repo using the command line below.**
```
git clone https://github.com/SandeshCharka/Eat-Da-Burger.git
```
**Step 2 - Change directory to the cloned repo folder.**
```
cd Eat-Da-Burger
```
**Step 3 - Install all required NPM packages.**
```
npm install
```
**Step 4 - Set up mySQL database.**
```
Eat-Da-Burger
│
├── config
│   └── connection.js
│        
│       -Edit the connection.js file to fit your database setup.
│ 
└── db
    └── schema.sql

        -Run the Schema file in mySQL.
```
**Step 4 - Start the application server using the command line below**
```
node server.js
```

## Technologies Used

* Node JS
* Javascript
* Heroku
* Bootstrap
* Handlebars
* NPM Packages:
    - express
    - express-handlebars
    - mysql

## Role in development

Sole developer of application.
