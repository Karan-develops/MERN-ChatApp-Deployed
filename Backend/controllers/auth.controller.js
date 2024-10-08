import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookies from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    // console.log(req.body);

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(401).json({ error: "User already exists!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      username,
      fullName,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateTokenAndSetCookies(newUser._id, res);

      await newUser.save();
      return res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        fullName: newUser.fullName,
        profilePic: newUser.profilePic,
      });
    } else {
      return res.status(400).json({ error: "Invalid User data" });
    }
  } catch (error) {
    console.log("Error in signup controller:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      username,
    });
    if (!user) {
      return res
        .status(401)
        .json({ error: "User don't exists, Please Signup!" });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password || ""
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Password incorrect" });
    }
    generateTokenAndSetCookies(user._id, res);
    res.status(200).json({
      _id: user._id,
      username: user.username,
      fullName: user.fullName,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
