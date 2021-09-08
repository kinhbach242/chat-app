import React from "react";
import firebase, { auth } from "../../firebase/Config";
import { addDocument, generateKeywords } from "../../firebase/services";
import "./Login.css";
const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export default function Login() {
  const handleLogin = async (provider) => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

    if (additionalUserInfo?.isNewUser) {
      addDocument("users", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName?.toLowerCase()),
      });
    }
  };
  return (
    <>
      <div className="login">
        <div className="login-logo">
          <img src="img/logo/logo.png" alt="logo" />
        </div>
        <div className="login-action">
          <button
            className="login-action-btn google"
            onClick={() => handleLogin(googleProvider)}
          >
            <span>Đăng nhập với Google</span>
          </button>
          <button
            className="login-action-btn facebook"
            onClick={() => handleLogin(fbProvider)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <path
                fill="#3b5998"
                d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.61v-6.97h-2.34V11.3h2.34v-2c0-2.33 1.42-3.6 3.5-3.6 1 0 1.84.08 2.1.12v2.43h-1.44c-1.13 0-1.35.53-1.35 1.32v1.73h2.69l-.35 2.72h-2.34V21h4.59a1 1 0 0 0 .99-1V4a1 1 0 0 0-1-1z"
              ></path>
            </svg>
            <span>Đăng nhập với Facebook</span>
          </button>
        </div>
      </div>
    </>
  );
}
