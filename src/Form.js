import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        //   .then((result) => {
        //     console.log(result.text);
        //     alert('Message sent successfully!');
        //   }, (error) => {
        //     console.error(error.text);
        //     alert('Failed to send message. Please try again later.');
        //   });
    
        // Clear form data after submission
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          subject: '',
          message: '',
        });
      };
    
  return (
    <div className='bg-[#FBFBFB] pt-10 px-5 md:px-20 h-screen'>
      <h3 className='text-center text-[25px] pb-6 text-black font-[600]'>Join our waitlist</h3>
      <form onSubmit={handleSubmit}>
        <div className='grid md:grid-cols-2 pb-6 md:pb-7 gap-4 md:gap-10'>
       

        <div className="md:mb-6 w-full">
                  <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                 Name
                  </label>
                  <input
                    type="text"
                    className=" border border-[#D9D9D9] text-[#333333] text-sm rounded-lg block w-full p-3"
                    placeholder="Enter your name"
                    name="name"
                    onChange={handleChange}
                    required
                  />
                </div>   
                <div className="md:mb-6 w-full">
                  <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className=" border border-[#D9D9D9] text-[#333333] text-sm rounded-lg block w-full p-3"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                </div> 
      </div>
      <div className='grid md:grid-cols-2 pb-7 gap-4 md:gap-10'>
      <div className="md:mb-6 w-full">
                  <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                  Phone Number
                  </label>
                  <input
                    type="tel"
                    className=" border border-[#D9D9D9] text-[#333333] text-sm rounded-lg block w-full p-3"
                    placeholder="Enter Phone Number"
                    name="phoneNumber"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="md:mb-6 w-full">
                  <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                 Subject
                  </label>
                  <input
                    type="text"
                    className=" border border-[#D9D9D9] text-[#333333] text-sm rounded-lg block w-full p-3"
                    placeholder="Enter Subject"
                    name="subject"
                    onChange={handleChange}
                    required
                  />
                </div>
  
  
      </div>
      <div className="mb-6 w-full">
                  <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
               Message
                  </label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        rows={3}
        className=" border border-[#D9D9D9] text-[#333333] text-sm rounded-lg block w-full p-3"

        required
      ></textarea>
      </div>
      <div className='text-center flex justify-center'>
      <button className='bg-[#f60] text-white text-sm py-3 px-5 rounded-md' type="submit">Submit</button>
      </div>
    </form>
    </div>
  )
}

export default Form
