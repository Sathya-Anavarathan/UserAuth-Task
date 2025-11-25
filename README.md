# User Authentication API

A Node.js REST API for user authentication with JWT tokens and protected routes.

## Features

- User registration and login
- JWT-based authentication
- Protected routes with middleware
- MongoDB integration
- Password hashing with bcrypt
- Error handling middleware

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **Environment Variables**: dotenv

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=3000
DB_USER=your_mongodb_username
DB_PASSWORD=your_mongodb_password
DB_NAME=your_database_name
JWT_AUTH_SECRET_KEY=your_jwt_secret_key
```

4. Start the server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication Routes

#### Register User
- **POST** `/auth/register`
- **Body**:
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

#### Login User
- **POST** `/auth/login`
- **Body**:
```json
{
  "email": "string",
  "password": "string"
}
```

### Protected Routes

#### Get Protected Info
- **GET** `/info`
- **Headers**: `Authorization: Bearer <jwt_token>`
- **Response**:
```json
{
  "status": "success",
  "message": "Info accessed successfully",
  "data": {
    "info": "This is some protected information"
  },
  "requestedBy": "user_id"
}
```

## Project Structure

```
src/
├── config/
│   └── db.js              # Database connection
├── controllers/
│   ├── authController.js  # Authentication logic
│   └── infoController.js  # Protected route logic
├── middlewares/
│   ├── authMiddleware.js  # JWT verification
│   └── errorHandler.js    # Error handling
├── models/
│   └── userModel.js       # User schema
├── routes/
│   ├── authRoutes.js      # Authentication routes
│   └── infoRoutes.js      # Protected routes
└── services/              # Business logic services
```

## Usage

1. Register a new user using `/auth/register`
2. Login with credentials using `/auth/login` to get JWT token
3. Use the JWT token in Authorization header to access protected routes
4. Access protected information via `/info` endpoint

## Environment Variables

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 3000) |
| `DB_USER` | MongoDB username |
| `DB_PASSWORD` | MongoDB password |
| `DB_NAME` | MongoDB database name |
| `JWT_AUTH_SECRET_KEY` | Secret key for JWT signing |

## License

ISC
