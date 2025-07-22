# Nivasa - A Booking Website

___

## Project Description

This is a fullstack Accomodation booking application that is majorly built using the MERN stack namely MongoDB, Express.js, React, and Node.js. This is a fully functional appliaction that allows users to register, log in to a personal account, list places for rent, book accommodations and revisit their rental history. It supports image uploads (by link or file), user dashboards, and secure authentication.
It covers everything from backend API development and database integration to frontend design and state management.
___
## Screen Shots
![screenshot-Nivasa](https://github.com/user-attachments/assets/0af2a15b-d3d9-4aee-b637-6e613b232e38)
**Home Page**
___
![screenshot-N2](https://github.com/user-attachments/assets/da93d8ef-ed52-4c19-80b5-3c269a364c97)
**Booking Page**
____
![Screenshot 2025-06-03 115003](https://github.com/user-attachments/assets/3bf000fc-5b46-4998-96e7-a9063789cc58)
**Login Page**
___
![screenshot-NAccomodation](https://github.com/user-attachments/assets/0b87de12-b4e6-4e71-b6ce-fc787aae3a19)
**Accomodations Page**



## Features:
- User Authentication (Register / Login)
- View Hotel Listings
- Book Rooms with Check-in & Check-out Dates
- View Booking History
- Responsive UI using Tailwind CSS
- Upload Pictures

___

## Technologies

**Frontend**        React(Vite)

**Styling**         Tailwind CSS

**Backend**         Express.js

**Runtime**         Node.js

**Database**        MongoDB

___

#### Logic

**User Authentication**
- Register & Login functionality is built using JWT (JSON Web Tokens).
- Passwords are hashed using bcrypt before saving to MongoDB.
- On successful login, a token is sent to the client and used to access protected routes (e.g., bookings).

**Hotel Listing**
- When the user visits the home page, the frontend makes a GET request to api.
- The backend fetches all hotels from MongoDB and sends them as JSON to the client.
- Hotels are displayed dynamically using React.

 **Booking Logic**
- Users select checkin and checkout dates, which are validated on the client.
- On submission, a POST request is sent to api of bookings.
- The backend verifies user via token.
- Checks room availability.
- Creates a booking document with user ID, hotel ID, and dates.
- Booking confirmation is sent back to the client.

 **Booking History**
- When the user navigates to their profile/dashboard, a GET request is sent to /api/bookings/:userId.
- The backend fetches all bookings associated with that user.
- Results are shown in a simple history table or card view.
 ___
 
**Thankyou**


