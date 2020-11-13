# Big-Burger restaurant

<<<<<<< HEAD
> Front-end: landing page and CRUD booking form (HTML/SASS/vanilla JS) <br> Back-end: Node.js/Express/MongoDB REST API for booking and to serve parcel bundled client
=======
> Front-end landing page and CRUD booking form with HTML/SASS/vanilla JS bundled with parcel. <br> NodeJS/express back-end to serve client and booking REST API with MongoDB/mongoose.
>>>>>>> dates

Three responsive pages to site:
- Index - includes menu, reviews and location sliders and map modal
- Book - validated booking form to make a booking for the restaurant
<<<<<<< HEAD
- Booking - view booking from form/query string booking id which can be updated/deleted 
=======
- Booking - view booking from form/query string booking id which can be edited/deleted 

## To do
- GET future booking only
- PUT changed booking only
- GMT+1 issue 
- Validation issue 
- Testing
- Restaurant site to view and analyse bookings - routes and pug template started although need auth and filtering...
- Email to confirm booking
>>>>>>> dates

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

#Server runs on http://localhost:3000 and client on http://localhost:1234
#Environment variables - MongoURI and TotalBookingSize
```
