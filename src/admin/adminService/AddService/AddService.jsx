import React, { useEffect, useState } from 'react';
import './AddService.css';
import { Button, Grid, Stack } from '@mui/material';
import TextInput from '../../../component/TextInput';
import CancelIcon from '@mui/icons-material/Cancel';
import { useBlogsRedux } from '../../../redux/reduxHooks';
import { toast, ToastContainer } from 'react-toastify';

const AddService = () => {
  const { addService, addServiceError, addServiceLoading, addServiceResponse } = useBlogsRedux()
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [titleDescription, setTitleDescription] = useState('');
  const [mainDescription, setMainDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [faq, setfaq] = useState([{ title: "", description: "" }]); // Dynamic faq with titles
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

  useEffect(() => {

  }, [addServiceResponse, addServiceError])



  useEffect(() => {
    if (addServiceResponse && loading) {
      toast.success('Service saved successfully!');
      setName('');
      setTitle('');
      setImage(null);
      setTitleDescription('');
      setMainDescription('');
      setfaq([{ title: "", description: "" }])
    }
    if (addServiceError && loading) {
      toast.error('Service Not saved')
    }
  }, [addServiceResponse, addServiceError])


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    const data = {
      name,
      title,
      titleDescription,
      mainDescription,
      image,
      faq
    }
    addService(data)
  };

  const addPoint = () => {
    setfaq([...faq, { title: "", description: "" }]); // Add empty point field with title
  };

  const removePoint = (index) => {
    setfaq(faq.filter((_, i) => i !== index)); // Remove the point at the specified index
  };

  const handlePointChange = (index, field, value) => {
    const updatedfaq = faq.map((point, i) =>
      i === index ? { ...point, [field]: value } : point
    );
    setfaq(updatedfaq);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-12 rounded-2xl shadow-xl max-w-xl w-full text-center">
        <h2 className="text-4xl font-bold text-gray-700 mb-10">Add Service</h2>
        <form className="animated-form" onSubmit={handleSubmit}>
          <div className="form-field">
            {/* <label htmlFor="title">Service Name</label> */}
            <input
              type="text"
              id="name"
              placeholder='Service Name'
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={name ? 'filled' : ''}
            />
          </div>

          <div className="form-field">
            {/* <label htmlFor="title">Title</label> */}
            <input
              type="text"
              id="title"
              placeholder='Title'
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className={title ? 'filled' : ''}
            />
          </div>

          <div className="form-field">
            {/* <label htmlFor="titleDescription">Title Description</label> */}
            <textarea
              id="titleDescription"
              name="titleDescription"
              placeholder='Title Description'
              value={titleDescription}
              onChange={(e) => setTitleDescription(e.target.value)}
              required
              className={titleDescription ? 'filled' : ''}
            />
          </div>
          <div className="form-field">
            {/* <label htmlFor="mainDescription">Main Description</label> */}
            <textarea
              id="mainDescription"
              name="mainDescription"
              placeholder='Main Description'
              value={mainDescription}
              onChange={(e) => setMainDescription(e.target.value)}
              required
              className={mainDescription ? 'filled' : ''}
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
          <div className="form-field">

            {/* {faq.map((point, index) => (
              <div key={index} className="point-field relative flex items-center gap-2  p-2 rounded-md">
                <input
                  type="text"
                  value={point}
                  onChange={(e) => handlePointChange(e, index)}
                  required
                  placeholder={`${index + 1}. Service Point`}
                  className="flex-1 p-2 border rounded-md"
                />
                <CancelIcon
                  key={`cancel-icon-${index}`}
                  color="error"
                  onClick={() => removePoint(index)}
                  style={{
                    cursor: "pointer",
                  }}
                />
              </div>
            ))} */}
            {/* <h3>Dynamic faq</h3> */}
            {faq.map((point, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder="Point Title"
                  value={point.title}
                  onChange={(e) => handlePointChange(index, "title", e.target.value)}
                />
                <textarea
                  type="text"
                  placeholder="Point Description"
                  value={point.description}
                  onChange={(e) => handlePointChange(index, "description", e.target.value)}
                  style={{ marginTop: '10px' }}
                />
                {/* <button type="button" onClick={() => removePoint(index)}>Remove</button> */}
                <CancelIcon
                  key={`cancel-icon-${index}`}
                  color="error"
                  onClick={() => removePoint(index)}
                  style={{
                    cursor: "pointer",
                  }}
                />
              </div>

            ))}

            {/* <button type="button" onClick={addPoint}>Add Point</button> */}
            <button
              type="button"
              className="add-point-btn"
              onClick={addPoint}
            >
              Add Point
            </button>
          </div>


          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};





export default AddService