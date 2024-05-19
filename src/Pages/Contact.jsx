import React, { useState } from 'react';
import { IoChevronForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }
    if (!formData.message) formErrors.message = 'Message is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="relative z-20 w-full h-[100vh] xl:mt-[150px] bg-primary-hover items-center flex">
      <div className="container mx-auto w-[35%] bg-accent-secondary rounded-[20px]">
        <div className="max-w-md mx-auto p-4">
          {isSubmitted ? (
            <div className="text-green-500">Thank you for your message!</div>
          ) : (
            <form onSubmit={handleSubmit} method="post">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[16px]"
                />
                {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[16px]"
                />
                {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 text-[16px]" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="4"
                />
                {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="btn h-[20px] bg-accent hover:bg-accent-hover"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
