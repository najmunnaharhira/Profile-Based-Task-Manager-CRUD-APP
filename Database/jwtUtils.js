import jwt from "jsonwebtoken";

// Secret key for JWT
export const JWT_SECRET = "hira_jwt_token"; // Export JWT_SECRET

// Function to generate JWT token
export function generateToken(user) {
  const payload = {
    userId: user.id,
    username: user.username,
    // Add any other user information you want to include in the token payload
  };

  const options = {
    expiresIn: "1h", // Token expiration time
  };

  return jwt.sign(payload, JWT_SECRET, options);
}

// Middleware function to verify JWT token
export function verifyToken(req, res, next) {
  // Get token from request headers
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  // Check if token is present
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  // Verify token
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Failed to authenticate token" });
    }

    // If token is valid, save decoded token in request object and proceed
    req.decoded = decoded;
    next();
  });
}
