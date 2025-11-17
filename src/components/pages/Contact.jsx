import React, { useState } from 'react'
import Header from '../Header'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const addError = {};
    if (!form.name) {
      addError.nameError = 'Name is required';
    }
    if (!form.email) {
      addError.emailError = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) {
      addError.emailError = 'Invalid email address';
    }
    if (!form.message) {
      addError.messageError = 'Message is required';
    }
    return addError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const check = validate();
    if (Object.keys(check).length > 0) {
      setErrors(check);
    } else {
      setIsSubmitting(true);
      const subject = 'Message from Portfolio Website';
      const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0AMessage: ${form.message}`;
      const mailtoUrl = `mailto:omodeletemitope12@gmail.com?subject=${subject}&body=${body}`;

      window.open(mailtoUrl, '_self');

      setForm({
        name: '',
        email: '',
        message: ''
      });
      setErrors({});
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <Header/>
      <section className="mx-[30px] md:mx-[100px] my-auto">
          <div className=' border border-teal-400 p-5 rounded-lg  shadow-md transition-shadow hover:shadow-teal-200 text-gray-400' data-aos="zoom-in">
            <h2 className="text-3xl font-bold text-center mb-8 text-teal-400">Get In Touch</h2>
            <p className="text-center mb-12">Feel free to reach out to me for any questions or opportunities.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="contact-info" data-aos="fade-right" data-aos-delay="200">
                <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                <p>Email: <a href="mailto:omodeletemitope12@gmail.com" className="text-[#0A0F37] hover:text-teal-400">omodeletemitope12@gmail.com</a></p>
                <p>Phone: <a href="tel:+2348144331503" className="text-[#0A0F37] hover:text-teal-400">+234 8144331503</a></p>
                <p>Location: Oyostate, Nigeria</p>
                <div className="social-media mt-4 flex gap-4">
                  <a href="#" className="text-[#0A0F37] hover:text-teal-400">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="#" className="text-[#0A0F37] hover:text-teal-400">
                    <FaGithub size={24} />
                  </a>
                  <a href="#" className="text-[#0A0F37] hover:text-teal-400">
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full p-3 mb-4 border border-teal-400 rounded-md focus:outline-none focus:shadow-sm focus:shadow-teal-200 text-black bg-blue-900" required />
                <span className="text-red-500">{errors.nameError}</span>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full p-3 mb-4 border border-teal-400 rounded-md focus:outline-none focus:shadow-sm focus:shadow-teal-200 text-black bg-blue-900" required />
                <span className="text-red-500">{errors.emailError}</span>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="w-full p-3 mb-4 border border-teal-400 rounded-md focus:outline-none focus:shadow-sm focus:shadow-teal-200 text-black bg-blue-900" required></textarea>
                <span className="text-red-500">{errors.messageError}</span><br />
                <button className="border border-teal-400 hover:bg-teal-400 hover:text-blue-900 text-teal-400 font-bold py-2 px-4 rounded-md" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </section>
    </>
  )
}

export default Contact