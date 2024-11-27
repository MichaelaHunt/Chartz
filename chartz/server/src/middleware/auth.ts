import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

// Define the interface for the JWT payload
interface JwtPayload {
  username: string;
}

// Middleware function to authenticate JWT token
export function auth(req: Request, res: Response, next: NextFunction) {

  // Get the authorization header from the request
  const authenticationHeader = req.headers.authorization;

// Check if the authorization header is present
    if (authenticationHeader) {

  // Extract the token from the authorization header
  const token = authenticationHeader.split(' ')[1];

     // Get the secret key from the environment variables
     const getSecretKey = process.env.JWT_SECRET_KEY || '';

    // Verify the JWT token
 jwt.verify(token, getSecretKey, (error, user) => {
     // Send forbidden status if the token is invalid
    if (error) {
        return res.sendStatus(403);
    }
          // Attach the user information to the request object
          req.user = user as JwtPayload;
          return next();
    });
} else {
    res.sendStatus(401);     
}
};
