import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase"; // Adjust path to your Firebase config

const Test: React.FC = () => {
    const [userEmail, setUserEmail] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserEmail(user.email); // Get the user's email
            } else {
                setUserEmail(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <>
            <h1>About Page</h1>
            {userEmail ? <p>Welcome, {userEmail}!</p> : <p>No user logged in.</p>}
        </>
    );
};

export default Test;