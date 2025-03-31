import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc,collection,where,query, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;
            await setDoc(doc(db, "users", user.uid), {
                name: formData.name,
                email: formData.email,
                password:formData.password,
                role: "user",
            })
            alert("Sign-up successful!");
            navigate("/login");
        } catch (err) {
            console.error("Error Code:", err.code);
            console.error("Error Message:", err.message);
            setError(err.message);
        }        
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setError(null);

    //     try {
    //         const usersRef = collection(db, "users");
    //         const q = query(usersRef, where("email", "==", formData.email));
    //         const querySnapshot = await getDocs(q);

    //         if (!querySnapshot.empty) {
    //             setError("Email already registered!");
    //             return;
    //         }

    //         const userId = Date.now().toString();

    //         // Save user data in Firestore
    //         await setDoc(doc(db, "users", userId), {
    //             name: formData.name,
    //             email: formData.email,
    //             password: formData.password, 
    //             role: "user",
    //         });

    //         alert("Sign-up successful!");
    //         navigate("/login");

    //     } catch (err) {
    //         console.error("Firestore Error:", err);
    //         setError(err.message);
    //     }
    // };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-12 rounded-2xl shadow-xl max-w-xl w-full text-center"
            >
                <h2 className="text-4xl font-bold text-gray-700 mb-10">Sign Up</h2>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-5 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    {/* <input
                        type="text"
                        name="role"
                        placeholder="Role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full p-5 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    /> */}
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
                        Sign Up
                    </motion.button>
                    <p className="text-lg text-gray-600 mt-4">
                        Already have an account? <a href="/login" className="text-blue-500 font-bold">Login</a>
                    </p>
                </form>
            </motion.div>
        </div>
    );
}
