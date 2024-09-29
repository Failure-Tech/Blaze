import { ReactNode, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase"; // Adjust path to your Firebase config
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        });

        return () => unsubscribe();
    }, []);

    // If the auth state is still being checked, display loading state
    if (isAuthenticated === null) {
        return <p>Loading...</p>;
    }

    // If the user is not authenticated, redirect to the login page
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    // If the user is authenticated, render the children components
    return <>{children}</>;
};

export default PrivateRoute;