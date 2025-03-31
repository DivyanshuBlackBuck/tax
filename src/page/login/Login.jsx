import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { auth, db } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth"; // Import Firebase auth functions
import img from '../../Images/Tax.webp';
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(""); // State to handle errors

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        try {
            // Step 1: Sign in user
            const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;
            // Step 2: Get user document from Firestore
            const userRef = doc(db, "users", user.uid);
            const userSnap = await getDoc(userRef); // Add 'await' here

            if (userSnap.exists() && userSnap.data().role === "admin") {
                const role = userSnap.data().role
                localStorage.setItem("isAdmin", role === "admin" ? "true" : "false")
                alert("Login successful!");
                navigate("/admin"); // Redirect to admin panel
            } else {
                setError("You are not authorized to access admin panel.");
            }
        } catch (error) {
            console.error("Login Error:", error.message);
            setError("Invalid email or password. Please try again.");
        }
    };

    return (
        <div
            className="flex justify-center items-center min-h-screen bg-cover bg-center p-8"
            style={{ backgroundImage: `url(${img})` }}
        >
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-12 rounded-2xl shadow-xl max-w-xl w-full text-center bg-white bg-opacity-30 backdrop-blur-md"
            >
                <h2 className="text-4xl font-bold text-gray-700 mb-10">Login</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-5 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <div className="relative w-full">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-5 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                        <span
                            className="absolute inset-y-0 right-5 flex items-center cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <AiOutlineEye size={30} /> : <AiOutlineEyeInvisible size={30} />}
                        </span>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-blue-500 text-white p-5 rounded-lg font-bold text-xl"
                    >
                        Login
                    </motion.button>
                    <p className="text-lg text-gray-600 mt-4">
                        Don't have an account? <a href="/signup" className="text-blue-500 font-bold">Sign Up</a>
                    </p>
                </form>
            </motion.div>
        </div>
    );
}
