import { useEffect, useState } from "react"
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import initializeApplication from '../firebase/firebase.init'

initializeApplication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user?.email) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])
    const handlePasswordChange = e => {
        const changedPassword = e.target.value;
        setPassword(changedPassword)
    }
    const handleEmailChange = e => {
        const changedEmail = e.target.value;
        setEmail(changedEmail)
    }
    const handleSubmit = e => {
        e.preventDefault()
    }
    const SigningInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }
    const userLogin = () => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    const userRegister = () => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        })
    }
    return {
        user,
        setUser,
        password,
        setPassword,
        SigningInWithGoogle,
        userLogin,
        userRegister,
        logOut,
        handleEmailChange,
        handlePasswordChange,
        error,
        setError,
        handleSubmit,
        setIsLoading,
        isLoading
    }

}
export default useFirebase;