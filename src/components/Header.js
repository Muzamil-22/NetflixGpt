import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { LOGO, preferredLanguage } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configlanguage";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGpt = useSelector((store) => store.gptSearch.toggleSearch);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleToggleGpt = () => {
    dispatch(toggleGptSearch());
  };

  const handlelanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/Browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <div className="AppHeader">
        <div>
          <img className="signInLogo" src={LOGO} alt="logo"></img>
        </div>
        {user && (
          <div className="GptandProfile">
            <div>
              {showGpt && (
                <div className="lang_dropdown">
                  <select onChange={handlelanguage}>
                    {preferredLanguage.map((lang) => (
                      <option key={lang.identifier} value={lang.identifier}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <button className="gpt-bt" onClick={handleToggleGpt}>
                {showGpt ? "Home Page" : "Gpt search"}
              </button>
            </div>
            <div className="Profile">
              <div>
                <img
                  className="userPhoto"
                  src={user?.photoURL}
                  alt="Image dint load"
                ></img>
              </div>
              <div className="profileData">
                <div>{user?.displayName}</div>
                <button className="signoutButton" onClick={handleSignout}>
                  sign out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
