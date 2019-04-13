# Recipes App

This app was created to help people keep track of all of their favorite recipes in one convenient online resource. Most people have recipes all over the place. Some are handwritten family recipes, recipes from websites, pinterest, instagram, or from your latest food shipment. With Recipes it’s simple to store all of your favorite recipes and access them whenever you want.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

Node version >8.11 required, to get the latest version of node using nvm or homebrew from the command line you can use:

```
nvm install node

Or

brew install node
```

### Installing

The first step is to clone this repo to your machine. Then to get a development environment up and running, you have to start the backend server and then the client server. To do that follow the 2 steps outlined below. From the command line in the root directory of the project [ /recipeApp ] execute:

Start the backend server

```
npm install
npm run server
```

Start the client-side server, from a different command line window cd down into the recipe-app-client directory [ /recipeApp/recipe-client-app ], execute:

```
npm install
npm start
```

A browser window should open up on localhost:3000 with the Recipes App running, as shown below:

![app screen shot](https://github.com/Eric-Powell/recipeApp/blob/master/db/Recipes.png)

## Running the tests

From the recipe-app-client directory execute:

```
npm test
```

## Deployment

This app is hosted on heroku here:
https://infinite-ridge-41467.herokuapp.com/

## Built With

This is a full stack web application built using the MERN stack. The backend is built with Node.js and Express for the app server connected to MongoDB, and the frontend is using React for client side UI rendering and Axios to make http requests. 

* I decided to use create-react-app to quickly setup my frontend and used their boilerplate scaffolding to get started - [create-react-app](https://github.com/facebook/create-react-app)
* I selected MongoDB and the ORM Mongoose since it is a quick and efficient way to store data in an easy to visualize document/schema setup that offers control and flexibility - [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)
* I decided to use Express with Node.js to create the server for the web application since it’s a fast, unopinionated, and minimalist framework with robust features - [express](https://expressjs.com/)

Plans for this project in the future include:
* add additional test coverage 
* add feature to edit recipes
* add search feature 
* remove create-react-app scaffolding and boilerplate (unnecessary)

![stack](https://cdn-images-1.medium.com/max/1600/1*FVtCyRdJ6KOr4YswTtwMeA.jpeg)

## Contact Me

* [My Projects](https://github.com/Eric-Powell?tab=repositories) - you can find more projects on my github repo
* [LinkedIn](https://www.linkedin.com/in/eric-powell/) - connect with me on LinkedIn