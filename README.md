# The Movie Database:The ReactJS Singe Page Web Application

## Table of Contents
1. [Introduction](#introduction)
2. [Environment Setup Guide](#environment-setup-guide)


### Introduction
A front-end interface using ReactJS that consumes an API. 

Here is a video demo for a [sample application](https://youtu.be/DmDZuAr7QJE).

The single-page React app that lets users interact with the data from TMDB API. 
  - TMDB (https://www.themoviedb.org/documentation/api)

Features:
  - **A list view**:  where users can input a search query and the app returns a list of results that match the query (i.e. searching movies or albums). There is also a way to sort the search results based on different properties of the results (srating and propularity) and of specifying an ordering (ascending and descending). Also, the search bar could filter as users type. Users can sort and filter in the client side.
  - **A gallery view**: that displays a gallery of movie posters from the chosen API. The gallery view has some a filtering attribute of 9 different genres where users can select one or many attributes and filter the gallery by them.
  -  **A detail view**: When an item in the search view or the gallery view is clicked, the app displays the different attributes of the selected item. Also, this view has previous and next buttons that lets the user cycle through the list of objects.
  
 Other tools:
  - <code>react-router-dom</code> for routing.
  - <code>Axios</code> for API calls.
  - <code>SemanticUI</code> for frontend design
  - <code>PropTypes</code> for relevant components. https://facebook.github.io/react/docs/typechecking-with-proptypes.html


### Environment Setup Guide
1. Clone the repository:
`git clone https://github.com/uiuc-web-programming/mp2_starter_17.git mp2`, then `cd mp2`
2. Install dependencies:
`npm install`
3. Run the dev server:
`npm run dev`
4. Open a browser and go to `http://localhost:8080/` to view your page. You should see "Welcome to MP2!".
5. Open up `source/index.js` and `source/html/index.html` and read the comments in those files to get an idea of how to start. *We will not answer questions that are already answered by the comments there.*

