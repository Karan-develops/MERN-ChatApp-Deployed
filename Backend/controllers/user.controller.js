import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    // ne means find users in database which is not equal to loggedin user.
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");
    return res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUserForSidebar controller ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
