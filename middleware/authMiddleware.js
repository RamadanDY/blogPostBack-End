import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startWith("Bearer")) {
    token = authHeader.split(" ")(1);
  }
};

module.export = verifyToken;
// this is a middleware that will make the routed protected by authentivcating the used based on the token that we receive after
//it will intercept the token and check if the
// Middleware in authentication is used to protect routes and
// enforce access control in your application. In a Node.js
// (especially Express.js) environment, middleware acts as a
//  function that runs before the final route handler, allowing
//  you to check whether the incoming request is authenticated (
// or authorized) before letting it proceed.
// Verify tokens (e.g., JWT)
// Check if the request includes a valid token (usually in headers like Authorization).
// If valid, allow access. If not, return an error like 401 Unauthorized.
