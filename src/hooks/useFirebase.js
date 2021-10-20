import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import initializeApplication from '../firebase/firebase.init';


initializeApplication();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('');
    const auth = getAuth();

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }


    const handleRegistration = () => {
        if (password.length < 6) {
            setError('Password must be at least 6 characters long')
            return
        }
        else {
            return createUserWithEmailAndPassword(auth, email, password)
                .then(() => setUserName())
        }
    }
    const handleLogin = () => {
        return signInWithEmailAndPassword(auth, email, password)
            .then(() => setUserName())
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch((error) => {
                setError(error.message)
            });
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setError('');
            })
            .catch(error => {
                setError('')
            })
            .finally(() => {
                setIsLoading(false);
                setText('Login Successful')
            })


    }
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

    const removeError = () => {
        setError('')
        setText('')
    }

    return {
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        error,
        handleLogin,
        logOut,
        isLoading,
        user,
        handleNameChange,
        setUserName,
        handleGoogleSignIn,
        setIsLoading,
        setError,
        removeError,
        setText,
        text
    }
}

export default useFirebase;