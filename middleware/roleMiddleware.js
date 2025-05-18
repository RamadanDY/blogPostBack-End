const authorizeRole = (...allowedRoles) => {
  return (req, res, next) => {
    // const userRole = req.user.role; // Assuming req.user is populated by your auth middleware

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Access denied. You do not have the required role.",
      });
    }

    next();
  };
};

export default authorizeRole;
