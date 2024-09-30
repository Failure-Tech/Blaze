import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase.ts"; // Firebase initialization

const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/mainpage");
        } catch (error) {
            setError("Sign up failed. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center" data-theme="dark">
            <div className="bg-base-200 p-8 rounded-lg shadow-md text-center w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-white">Sign up for Blaze</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}

                <form onSubmit={handleSignUp} className="flex flex-col">
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
                        Sign Up
                    </button>
                </form>

                <p className="mt-4 text-gray-300">
                    Already have an account?{" "}
                    <button className="text-primary underline" onClick={() => navigate("/login")}>
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
