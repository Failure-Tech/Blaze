import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase.ts"; // Firebase initialization

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            navigate("/test");
        } catch (error) {
            console.error("Google Sign-In error:", error);
        }
    };

    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/test");
        } catch (error) {
            setError("Login failed. Please check your credentials or sign up.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-bold mb-6">Login to Blaze</h2>
                {error && <p className="text-red-500">{error}</p>}
                
                {/* Google Sign-In */}
                <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors mb-4"
                    onClick={handleGoogleSignIn}
                >
                    Sign in with Google
                </button>

                <p className="my-4">or</p>

                {/* Email/Password Login */}
                <form onSubmit={handleEmailLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mb-3 p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mb-3 p-2 border border-gray-300 rounded"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Login
                    </button>
                </form>

                {/* Navigate to sign-up page */}
                <p className="mt-4">
                    Don't have an account?{" "}
                    <button className="text-blue-600 underline" onClick={() => navigate("/signup")}>
                        Sign up
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;