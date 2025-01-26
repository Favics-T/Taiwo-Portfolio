import React, { useState } from 'react';
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    details: '',
  });
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.details) {
      setMessage('Please fill in all required fields.');
      return;
    }
    setMessage('Message Received. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      details: '',
    });
  };

  return (
    <div className="w-full mt-20 mb-40 font-bodyFont">
      <div className="flex">
        <div className="w-[650px] h-96 ml-44 text-white">
          <h1 className="text-orange-600 font-bold text-[40px]">Contact Me</h1>
          <p className="text-[16px] mt-2 font-bodyFont">
            You can get in touch, we will send a reply back as soon as possible
          </p>

          <div>
            <div className="my-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-black w-[320px] rounded-md mr-2 p-1 border border-pink-100"
              />
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-black w-[320px] rounded-md p-1 border border-pink-100"
              />
            </div>

            <div className="my-4">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-black w-[320px] rounded-md mr-2 p-1 border border-pink-100"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                className="bg-black w-[320px] p-1 border border-pink-100"
              />
            </div>

            <div className="block">
              <textarea
                name="details"
                placeholder="Detailed Description of Your Details"
                value={formData.details}
                onChange={handleInputChange}
                className="bg-black p-1 h-40 w-96 border border-pink-100 block"
              />
            </div>
            <button
              className="w-full bg-orange-600  my-4 rounded-xl p-2"
              onClick={handleSubmit}
              aria-label="Send Message"
            >
              Send
            </button>
          </div>
          {message && <p className="mt-4 text-white">{message}</p>}
        </div>

        <div className="  ml-20 mt-12 h-96">

          <div className='flex gap-4 text-white'>
          <FaPhone className='bg-orange-600 w-10 h-10 px-3' />
         
         <div >
         <p className='block'> Phone </p>
         <p className='block'>+234 906 3288 467</p>
         </div>
          
          </div>
          
          <div className='flex gap-4 text-white my-4'>
                <MdEmail  className='bg-orange-600 w-10 h-10 px-3'/>
                
                <div>
                    <p>Email</p>
                    <p>taiwopersonal24@gmail.com</p>
                </div>
                
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Contact;
