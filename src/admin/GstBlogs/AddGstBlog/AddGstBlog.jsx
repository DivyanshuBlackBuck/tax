import React, { useEffect, useState } from 'react';
import './AddGstBlog.css';
import { db } from '../../../firebase';
import { collection, addDoc, loadBundle } from 'firebase/firestore';
import { useBlogsRedux } from '../../../redux/reduxHooks';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddGstBlog = () => {
  const { addGstBlogs, gstBlogResponse, gstBlogError, gstBlogLoading } = useBlogsRedux()
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result); // Store Base64 string
      };
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const data = {
      title,
      description,
      image,
      timestamp: new Date(),
    }
    addGstBlogs(data)
  };
  console.log("gstBlogResponse", gstBlogResponse);
  console.log("gstBlogError", gstBlogError);

  useEffect(() => {
    if (gstBlogResponse && loading) {
      toast.success('Blog saved successfully!');
      setTitle('');
      setDescription('');
      setImage(null);
    }
    if (gstBlogError && loading) {
      toast.error('Blog Not saved')
    }
  }, [gstBlogResponse, gstBlogError])

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-12 rounded-2xl shadow-xl max-w-xl w-full text-center">
        <h2 className="text-4xl font-bold text-gray-700 mb-10">GST Blog</h2>
        <form className="animated-form" onSubmit={handleSubmit}>
          <div className="form-field">
            {/* <label htmlFor="title">Title</label> */}
            <input
              type="text"
              id="title"
              name="title"
              placeholder='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className={title ? 'filled' : ''}
            />
          </div>
          <div className="form-field">
            {/* <label htmlFor="description">Description</label> */}
            <textarea
              id="description"
              placeholder='Description'
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className={description ? 'filled' : ''}
            />
          </div>
          <div className="form-field">
            {/* <label htmlFor="image">Image</label> */}
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Selected Preview" />
              </div>
            )}
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};




export default AddGstBlog