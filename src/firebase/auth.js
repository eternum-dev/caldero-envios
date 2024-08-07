import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth"
import { auth } from "./firebase"


export const createUser = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

export const signIn = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}


export const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
}

export const signOut = () => {
    return auth.signOut();
}
