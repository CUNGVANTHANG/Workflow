import { useNavigate } from "react-router-dom";
import firebase, { auth } from "./firebase/config";
import { useEffect, useState } from "react";

const fbProvider = new firebase.auth.FacebookAuthProvider();

function Login() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const handleFacebookLogin = async () => {
    auth.signInWithPopup(fbProvider);
  };

  useEffect(() => {
    const unsubscibed = auth.onAuthStateChanged((user) => {
      console.log({ user });
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });
        navigate("/home");
      }

      navigate("/");
    });

    // clean function
    return () => {
      unsubscibed();
    };
  }, [navigate]);

  console.log({ user });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button
        onClick={handleFacebookLogin}
        style={{ width: "100px", height: "100px", fontSize: "18px" }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
