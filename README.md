# Big-Burger restaurant

> Landing page and basic full-stack booking system for restaurant. Front-end built with HTML/SASS and vanilla JS. Back-end with express and MongoDB.

There are currently three pages to the site:
- Index - images, menu,  reviews slider, locations sliders and map modal

- Book - booking form to make a booking for the restaurant

- Booking - view booking which you can edit and delete 

## Dev Notes

Front-end in 'client' folder from 'index.html' 
- JS files in js
- SASS files in 'styles'. One file for index with partials and then just one file for the book and booking page. Variables partial imported into both.
- Bundled into 'dist' with Parcel from 'index/html'

Back-end express server from 'server.js' 
- Serves client 'dist' folder
- Serves pug templates in 'views' (start of restaurant manager site)
- Booking REST API

## Configuration

**Environment variables** 
``` bash
DB-CONNECTION = #add your MongoDB URI
TOTALBOOKINGSIZE = # suggestion 20
```


## Installation
``` bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server concurrently 
npm run dev - 

# Run the Express server only
npm start

# Run the client only
npm run client

#Server runs on http://localhost:5000 and client on http://localhost:3000

```

## Credits
Designed and built by Sarah Burnett