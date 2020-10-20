# Big-Burger restaurant

> First dev project inspired by my new lack of ability to use the web without the desire to recreate something... <br> Front-end landing page and CRUD booking form with HTML/SASS/vanilla JS bundled with parcel. <br> NodeJS/express back-end to serve client and booking REST API with MongoDB/mongoose.

Three responsive pages to site:
- Index - images, menu,  reviews slider, locations sliders and map modal
- Book - validated booking form to make a booking for the restaurant
- Booking - view booking from form/query string booking id which can be edited/deleted 

## To do
- GET future booking only
- PUT changed booking only
- GMT+1 issue 
- Validation issue 
- Testing
- Restaurant site to view and analyse bookings - routes and pug template started although need auth and filtering...
- Email to confirm booking

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
