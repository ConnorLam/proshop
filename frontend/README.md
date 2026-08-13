# ProShop

ProShop is a full-stack e-commerce application built with the MERN stack. It allows users to browse and search products, manage a shopping cart, place orders, review products, and manage their accounts.

The application also includes an admin dashboard for managing products, users, and orders.

## Features

### Shopping

* Browse products
* View individual product details
* Search for products
* Live product search with debouncing
* Product pagination
* Top-rated product carousel
* Add products to cart
* Update product quantities
* Remove products from cart
* Shipping and payment checkout flow
* PayPal integration
* View order details and order history

### Reviews

* Authenticated users can leave product reviews
* Product rating calculation
* Edit reviews
* Delete reviews

### Authentication

* User registration
* User login and logout
* JWT authentication
* Protected routes
* User profile management
* Persistent authentication with local storage

### Admin

Administrators can:

* View users
* Edit users
* Delete users
* View products
* Create products
* Edit products
* Delete products
* Upload product images
* View orders
* Update order status

## Tech Stack

### Frontend

* React
* Vite
* React Router
* Redux Toolkit
* RTK Query
* React Bootstrap
* React Icons
* React Toastify
* React Helmet Async

### Backend

* Node.js
* Express
* MongoDB
* Mongoose
* JWT authentication
* Multer
* Cookie Parser

### Payments

* PayPal

### Deployment

* Render

## Project Structure

```text
proshop/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── data/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── seeder.js
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── screens/
│   │   ├── slices/
│   │   ├── App.jsx
│   │   ├── constants.js
│   │   ├── main.jsx
│   │   └── store.js
│   ├── utils/
│   └── package.json
│
├── uploads/
├── package.json
└── README.md
```

## Environment Variables

Create a `.env` file in the root of the project.

```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_APP_SECRET=your_paypal_app_secret
PAYPAL_API_URL=https://api-m.sandbox.paypal.com
PAGINATION_LIMIT=your_pagination_limit
```

Do not commit your `.env` file or production secrets to Git.

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
cd proshop
```

Install backend dependencies:

```bash
npm install
```

Install frontend dependencies:

```bash
npm install --prefix frontend
```

## Running Locally

Run the backend and frontend development servers:

```bash
npm run dev
```

The frontend runs through Vite while the Express server handles the API.

## Production Build

Build the frontend for production:

```bash
npm run build
```

The root build script installs the required dependencies and creates the Vite production build.

```json
"build": "npm ci && npm ci --prefix frontend && npm run build --prefix frontend"
```

Vite outputs the production frontend to:

```text
frontend/dist
```

Express serves the production frontend from this directory when `NODE_ENV` is set to `production`.

## API

The application contains API routes for:

```text
/api/products
/api/users
/api/orders
/api/upload
/api/config/paypal
```

Product images uploaded locally are currently served from:

```text
/uploads
```

## Image Uploads

Product image uploads currently use Multer and the server's local filesystem.

This works during local development, but local server storage is not ideal for production deployments where the filesystem may be ephemeral.

### Planned S3 Migration

A future version of ProShop will migrate product image storage to **Amazon S3**.

The planned flow is:

```text
Admin selects image
        ↓
Frontend sends image
        ↓
Express upload endpoint
        ↓
Amazon S3
        ↓
S3 image URL returned
        ↓
URL stored in MongoDB
        ↓
Product displays image from S3
```

This will provide persistent image storage independent of the application server.

## Error Handling

The frontend uses React Router's `errorElement` functionality to provide a custom error screen for unexpected route errors.

The backend includes centralized Express middleware for:

* 404 errors
* Server errors
* API error responses

## Responsive Design

The application uses React Bootstrap and custom CSS to provide responsive layouts for desktop and mobile devices.

The navigation includes:

* Responsive hamburger menu
* Product search
* Live search results
* Shopping cart
* User profile controls
* Admin navigation
<!-- 
## Future Improvements

* [ ] Move product image storage to Amazon S3
* [ ] Improve production image upload handling
* [ ] Add image optimization
* [ ] Improve search functionality
* [ ] Add product categories and filtering
* [ ] Add sorting by price, rating, and popularity
* [ ] Improve mobile responsiveness
* [ ] Add automated testing
* [ ] Add additional API validation
* [ ] Improve production logging and monitoring
* [ ] Add CI/CD workflow -->

## What I Learned

This project demonstrates practical experience building and deploying a full-stack application, including:

* Designing REST APIs with Express
* Working with MongoDB and Mongoose
* Authentication and authorization
* React component architecture
* Global state management with Redux Toolkit
* Data fetching and caching with RTK Query
* Protected and admin-only routes
* File uploads with Multer
* Search and pagination
* Payment integration
* Error handling
* Responsive UI development
* Production builds and deployment

## License

This project is for educational and portfolio purposes.
