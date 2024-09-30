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
            navigate("/mainpage");
        } catch (error) {
            console.error("Google Sign-In error:", error);
        }
    };

    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/mainpage");
        } catch (error) {
            setError("Login failed. Please check your credentials or sign up.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center" data-theme="dark">
            <div className="bg-base-200 p-8 rounded-lg shadow-md text-center w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-white">Login to Blaze</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}

                {/* Google Sign-In */}
                <button
                    className="btn btn-primary w-full mb-4"
                    onClick={handleGoogleSignIn}
                >
                    Sign in with Google
                </button>

                <p className="my-4 text-gray-300">or</p>

                {/* Email/Password Login */}
                <form onSubmit={handleEmailLogin} className="flex flex-col">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input input-bordered w-full mb-3"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input input-bordered w-full mb-4"
                    />
                    <button
                        type="submit"
                        className="btn btn-primary w-full"
                    >
                        Login
                    </button>
                </form>

                {/* Navigate to sign-up page */}
                <p className="mt-4 text-gray-300">
                    Don't have an account?{" "}
                    <button className="text-primary underline" onClick={() => navigate("/signup")}>
                        Sign up
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;
