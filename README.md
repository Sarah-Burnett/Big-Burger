# Big-Burger restaurant

> Front-end: landing page and CRUD booking form (HTML/SASS/vanilla JS) <br> Back-end: Node.js/Express/MongoDB REST API for booking and to serve parcel bundled client

Three responsive pages to site:
- Index - includes menu, reviews and location sliders and map modal
- Book - validated booking form to make a booking for the restaurant based on availability
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

#Server runs on http://localhost:3020 and client on http://localhost:1234
#Environment variables - MongoURI and TotalBookingSize
```
