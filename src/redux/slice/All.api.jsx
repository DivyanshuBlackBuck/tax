import { collection, addDoc, serverTimestamp, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const gstBlogsAddApi = async (payload) => {
    try {
        await addDoc(collection(db, "gstblogs"), {
            title: payload.title,
            description: payload.description,
            image: payload.image,
            timestamp: serverTimestamp() // Firebase timestamp
        });
        return ("Document successfully added!");
    } catch (error) {
        return ("Error adding document: ", error);
    }
};

export const getGstBlogsApi = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "gstblogs"));
        const blogsList = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return (blogsList);
    } catch (error) {
        console.error("Error fetching blogs:", error);
    }
};
