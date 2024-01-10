const errorHandlers = async (err, req, res, next) => {
  switch (err.name) {
    case "invalidPassword":
      res.status(400).json({ message: "password cant empty" });
      break;
    case "invalidEmail":
      res.status(400).json({ message: "email cant empty" });
      break;
    case "invalidUsername":
      res.status(400).json({ message: "username cant empty" });
      break;
    case "SequelizeUniqueConstraintError":
    case "SequelizeValidationError":
      res.status(400).json({ message: err.errors[0].message });
      break;
    case "Unauthenticated":
      res.status(400).json({ message: "email/password invalid" });
      break;
    case "invalidToken":
    case "JsonWebTokenError":
      res.status(401).json({ message: "invalid token" });
      break;
    case "invalidUser":
      res.status(404).json({ message: "user not found" });
      break;

    default:
      res.status(500).json({ message: "Internal Server Error" });
      break;
  }
};

module.exports = errorHandlers;
