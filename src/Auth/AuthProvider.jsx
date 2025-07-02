import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase.init';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loader, setloader] = useState(true)


    const signIn = (email, password) => {
        setloader(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setloader(false)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setloader(false)
            setUser(currentUser)
        })
        return () => {
            unSubscribe
        }
    })

    const userInfo = {
        user,
        loader,
        signIn,
        logout
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;