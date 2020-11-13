# Big-Burger restaurant

> Front-end landing page and CRUD booking form with HTML/SASS/vanilla JS bundled with parcel. <br> NodeJS/express back-end to serve client and booking REST API with MongoDB/mongoose.

Three responsive pages to site:
- Index - includes menu, reviews and location sliders and map modal
- Book - validated booking form to make a booking for the restaurant
- Booking - view booking from form/query string booking id which can be updated/deleted 

## Installation
``` bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server concurrently 
npm run dev

# Run the Express server only
npm start

# Run the client only
npm run client

#Server runs on http://localhost:5000 and client on http://localhost:3000
#Environment variables - MongoURI and TotalBookingSize
```
