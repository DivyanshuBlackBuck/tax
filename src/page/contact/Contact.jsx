import React, { useEffect, useRef, useState } from 'react'
import ContactAnimation from '../../component/Animation/ContactAnimation'
import './Contact.css';
import AOS from 'aos';
import { Stack } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

import ContactImg from '../../Images/Contact4.jpg'
import { db } from '../../firebase';

const Contact = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [city, setCity] = useState("")
  const [state, setState] = useState("");
  const [message, setMessage] = useState("");

  console.log(firstname)

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 3000,
      easing: "ease-in-out-cubic",
    });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_zojlzo8',
      'template_95yw7pm',
      form.current, {
      publicKey: 'MYkX4wUDf_GoHKvjW',
    })
  };

  const putData = async () => {
    console.log("Hii")
    if (firstname === "" || lastname === "" || email === "" || mobileno === "") {
      return toast.error("All fields are required")
    }


    try {
      const contact = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        mobileno: mobileno,
        city: city,
        state: state,
        message: message,
        time: Timestamp.now()
      }
      console.log("Contact", contact);
      const contactRef = collection(db, "contact")
      console.log("CR", contactRef)
      await addDoc(contactRef, contact);
      toast.success("Thanks For Contact Us")
      setFirstname("");
      setLastname("");
      setEmail("");
      setMobileno("");
      setCity("");
      setState("");
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='Contact_Container'>

      <div className="Contact_head"  >
        <h1>Contact Page</h1>
        <h2>Home / Contact Page</h2>
      </div>


      <div className='Contact_Main'>
        <div className='Contact_Main2'>
          <section className="bg-transparent" style={{ paddingBottom: '5rem' }} >
            <div className="container px-6 py-12 mx-auto" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div className="mb-10 text-center">
                <h1 className=" text-4xl font-semibold text-gray-800 md:text-3xl dark:text-white ">Get in touch</h1>
                <p className="mt-3 text-white dark:text-white">Our friendly team is always here to chat.</p>
              </div>

              <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center justify-center text-center">
                  <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>

                  <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Email</h2>
                  <p className="mt-2 text-white dark:text-white">Our friendly team is here to help.</p>
                  <p className="mt-2 text-blue-500 dark:text-blue-400">dreamsakar@gmail.com</p>
                </div>

                <div className="flex flex-col items-center justify-center text-center">
                  <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </span>

                  <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Our Shop</h2>
                  <p className="mt-2 text-white dark:text-white">Come say hello at our Shop </p>
                  <p className="mt-2 text-blue-500 dark:text-blue-400">Neharu Road, Jhabua ( M.P. )</p>
                </div>

                <div className="flex flex-col items-center justify-center text-center">
                  <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>

                  <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Phone</h2>
                  <p className="mt-2 text-white dark:text-white">Mon - Fri from 8 am to 5 pm.</p>
                  <p className="mt-2 text-blue-500 dark:text-blue-400">+91 - 9754957303</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="Contact_Overlay">
        <div className="Contact_Overlay">
          <div className="form_container">
            <div className="form_left">
              <p>Make a free consultation with our expert team to solve your prolems.</p>
              <img src={ContactImg} alt="" />
            </div>

            <div className="form_right">
              <form ref={form} onSubmit={sendEmail}>
                <div className='form_main'>
                  <h1>First Name</h1>
                  <input type="text"
                    name="firstname"
                    placeholder=' Enter Firstname'
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                  />
                </div>

                {/* <div className='form_main'>
                  <h1>Last Name</h1>
                  <input type="text"
                    name="lastname"
                    placeholder="Enter Last Name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                  />
                </div> */}

                <div className='form_main'>
                  <h1>Email</h1>
                  <input type="text"
                    placeholder=' Enter Email'
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className='form_main'>
                  <h1>Number</h1>
                  <input type="number"
                    name="mobileno"
                    placeholder="Enter Mobile Number"
                    value={mobileno}
                    onChange={(e) => setMobileno(e.target.value)}
                    required
                  />
                </div>
                <div className='form_main'>
                  <h1>Message</h1>
                  <textarea type="text" placeholder='Enter Message' cols={10} rows={2}
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <div className='form_main'>
                  <button type="submit" onClick={putData} >Send</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

    </div >
  )
}

export default Contact