import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleErrorInput({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    setLoading(true);
    if (!success) {
      return;
    }
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      // console.log(data);
      // Local-Storage
      localStorage.setItem("chat-user", JSON.stringify(data));
      //context (to see if we are logged in or not)
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;

const handleErrorInput = ({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) => {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill all the fields");
    return false;
  }
  if (password != confirmPassword) {
    toast.error("Password doesn't matches confirm-password");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be atleast 6 characters");
    return false;
  }
  if (password.length > 15) {
    toast.error("Password must be less than 15 characters");
    return false;
  }
  return true;
};
