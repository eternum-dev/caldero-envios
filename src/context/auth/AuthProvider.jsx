import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthContext";
import { auth } from "../../firebase/firebase";
import {
  createUser,
  signIn,
  signInWithGoogle,
  signOut,
} from "../../firebase/auth";

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    loading,
    user,
    setUser,

    createUser,
    signIn,
    signInWithGoogle,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};
