import React, { useState } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        desc: '',
    });

    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const endpoint = 'https://x0p2y2mno7.execute-api.us-east-1.amazonaws.com/default/sendMail2PostJob';

        axios
            .post(endpoint, formData)
            .then((response) => {
                setSubmitStatus('success');
            })
            .catch((error) => {
                setSubmitStatus('error');
            });
    };

    return (
        <div className="">
<Helmet>
        <title>Contact Teaching Jobs</title>
        <meta name="description" content="Contact our knowledgeable team today for assistance and information on our number 1 Teaching job board site in higher education and academia. " />
        <meta name="keywords" content="Contact Teachingjobs, Contact Teaching Jobs, Teachingjobs Contact " />
      </Helmet>

            <div className="px-7 py-8 container mx-auto py-16">
                <h1 className="text-5xl font-semibold  text-[#f4a10c] ">LET’S GET TOGETHER!</h1>
                <h4 className=" text-gray-700 text-lg mt-4">Tell us what you need, and we will be straight back to you.
We make it easy for you at Teaching Jobs!</h4>
                <h4 className=" text-[#f4a10c] text-lg mt-4"> </h4>
                <h4 className=" text-[#f4a10c] text-lg mt-4"> <span className="font-semibold">Fun Fact: </span> Did you know that TeachingJobs.com is the fastest growing job board by audience.
and job numbers than any other higher education job board?  Yep, our mothers are super proud of us!  </h4>



    <div className="p-4 bg-gray-100 mt-[3rem] hidden">
      <p className="mb-4 text-lg font-semibold text-[#f4a10c]">Drop us an email:</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <span className="font-semibold">University and College Advertisers:</span> BestResults (AT) Teachingjobs.com
        </li>
        <li>
          <span className="font-semibold">Teachings and Higher Ed Staff:</span> TheBestJobs (AT) TeachingJobs.com
        </li>
        <li>
          <span className="font-semibold">Student Jobs on Campus:</span> StudentWork (AT) TeachingJobs.com
        </li>
        <li>
          <span className="font-semibold">Teaching Talent Pool:</span> TalentPool (AT) AcadmeicJobs.com
        </li>
      </ul>
      <p className="mt-4">Or call us:</p>
    </div>



<Link to="https://iloveTeachingjobs.com/contact/"><img
          src="https://Teachingjobs.s3.amazonaws.com/img/_misc/contact-us.jpeg"
          alt="contact us"
          className="  mt-[4rem] hidden  "
          
        /></Link>

<form className="mt-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name-input"
                                    name="name"
                                    className="w-full px-4 py-3 bg-gray-200 rounded-lg text-black focus:outline-none focus:border-orange-500"
                                    placeholder="Name"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="email-input"
                                    name="email"
                                    className="w-full px-4 py-3 bg-gray-200 rounded-lg text-black focus:outline-none focus:border-orange-500"
                                    placeholder="Email"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="phone-input"
                                    name="phone"
                                    className="w-full px-4 py-3 bg-gray-200 rounded-lg text-black focus:outline-none focus:border-orange-500"
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="relative">
                                <textarea
                                    id="description-input"
                                    name="desc"
                                    className="w-full px-4 py-3 bg-gray-200 rounded-lg text-black focus:outline-none focus:border-orange-500"
                                    placeholder="Message"
                                    onChange={handleChange}
                                />
                                <label htmlFor="description-input" className="absolute left-4 top-2 text-gray-600 transition-all">
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="text-right mt-6">
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-full bg-transparent border-2 border-orange-500 text-orange-500 font-semibold hover:bg-[#f4a10c] hover:text-black transition duration-300 ease-in-out"
                        >
                            Send
                        </button>
                    </div>
                    {submitStatus === 'success' && (
                        <p className="mt-4 text-center text-2xl font-bold text-green-500">Thank you for your message/feedback, our team will get back to you soon!</p>
                    )}
                    {submitStatus === 'error' && (
                        <p className="mt-4 text-center text-2xl font-bold text-red-500">An unknown error occurred.</p>
                    )}
                </form>
            </div>
            <div className="mainContent px-7 pb-4 hidden">
                <div className="container1b bg-white text-[#f4a10c] font-openSans font-bold py-4" >
                    GLOBAL OFFICE PHONE NUMBERS
                </div>
                <div className="container1b bg-white text-black font-openSans grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ul>
                        <li>
                            <a className="footer-nav__link" href="tel:+852-3730021">
                                Asia: +852-3730021(Hong Kong)
                            </a>
                        </li>
                        <li>
                            <a className="footer-nav__link" href="tel:+61-452070156">
                                Australia: +61-452070156 (Melbourne)
                            </a>
                        </li>
                        <li>
                            <a className="footer-nav__link" href="tel:778 819 1866">
                                Canada: 778 819 1866(Vancouver)
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a className="footer-nav__link" href="tel:+49-4158730021">
                                Europe: +49-4158730021(Berlin)
                            </a>
                        </li>
                        <li>
                            <a className="footer-nav__link" href="tel:+61-452070156">
                                New Zealand: +61-452070156 (Wellington)
                            </a>
                        </li>
                        <li>
                            <a className="footer-nav__link" href="tel:+91-2250972736">
                                India: +91-2250972736 (Mumbai)
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a className="footer-nav__link" href="tel:+44-2045876329">
                                United Kingdom: +44-2045876329(London)
                            </a>
                        </li>
                        <li>
                            <a className="footer-nav__link" href="tel:+415 819 0021">
                                United States: 415 819 0021 (San Francisco )
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default ContactUs;