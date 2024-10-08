import jwt from "jsonwebtoken";

const generateTokenAndSetCookies = (userId, res) => {
  // jwt.sign -> (payload, signature to sign, options)
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // In MS
    httpOnly: true, // prevents XXS attacks
    sameSite: "strict", //CSRF attacks
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookies;
