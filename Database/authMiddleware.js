// // authMiddleware.js

// const jwt = require("jsonwebtoken");

// function authenticate(req, res, next) {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.status(401).json({ error: "Unauthorized" });
//   }

//   jwt.verify(token, "your_secret_key", (err, decodedToken) => {
//     if (err) {
//       return res.status(401).json({ error: "Invalid token" });
//     }
//     req.user = decodedToken;
//     next();
//   });
// }

// module.exports = { authenticate };

import jwt from "jsonwebtoken";

export function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, "your_secret_key", (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }
    req.user = decodedToken;
    next();
  });
}
