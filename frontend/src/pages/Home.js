import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";

function Home() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [Secretmessage, setSecretmessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");

    setLoggedInUser("");
    handleSuccess("Logged out successfully");
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  const fetchSecret = async () => {
    try {
      const url = "http://localhost:8080/secretpage";
      const headers = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
      const response = await fetch(url, headers);
      const result = await response.json();
      console.log(result);
      setSecretmessage(result);
    } catch (err) {
      handleError(err);
    }
  };

  useEffect(() => {
    fetchSecret();
  }, []);

  return (
    <div>
      <h1>Hi {loggedInUser}</h1>
      <button onClick={handleLogout}>Logout</button>
      <h1>{Secretmessage.message}</h1>
      <ToastContainer />
    </div>
  );
}

export default Home;
