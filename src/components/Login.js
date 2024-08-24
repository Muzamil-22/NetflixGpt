import { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [signinform, setsigninform] = useState(true);
  const [Message, setMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const togglesignin = () => {
    setsigninform(!signinform);
  };

  const handleSubmitButton = () => {
    const validatedMessage = validate(
      email.current.value,
      password.current.value
    );
    setMessage(validatedMessage);

    if (validatedMessage) return;

    //sign in
    if (!signinform) {
      debugger;
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          //const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + errorMessage);
        });
    }
  };

  return (
    <div className="background">
      <Header />
      <div className="formdiv">
        <form onSubmit={(e) => e.preventDefault()} className="signInForm">
          <div>
            <h1 className="signinHeader">
              {signinform ? "Sign In" : "Sign up"}
            </h1>
          </div>
          {!signinform && (
            <input
              ref={name}
              className="form_fields feildStlying"
              type="text"
              placeholder="Full Name"
            ></input>
          )}
          <input
            ref={email}
            className="form_fields feildStlying"
            type="text"
            placeholder="Email Address"
          ></input>
          <input
            ref={password}
            className="form_fields feildStlying"
            type="password"
            placeholder="password"
          ></input>
          <p className="errorMsg">{Message}</p>
          <button
            className="form_fields loginButton"
            onClick={handleSubmitButton}
          >
            {signinform ? "Sign In" : "Sign up"}
          </button>
          <div className="signinCaption" onClick={togglesignin}>
            {signinform
              ? "New to Netflix? please Sign up"
              : "Already existing user? Sign In"}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
