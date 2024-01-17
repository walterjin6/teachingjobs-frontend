import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useSendEmail1Mutation } from "../store/apiSlice";
const Nominate = () => {
  const [
    sendEmail,
    { isSuccess: isSendSuccess, isError: isSendError, error: senderror },
  ] = useSendEmail1Mutation();
  const [formData, setFormData] = useState({});
  const [submitStatus, setSubmitStatus] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await sendEmail(formData);
    //try {
    console.log(response);
    // Check the response for success or failure
    if (response) {
      console.log("Mutation was successful");
      setSubmitStatus("success");
    } else {
      console.error("Mutation failed:", response.error);
      setSubmitStatus("error");
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (submitStatus === "success") {
      navigate("/nomination-successful");
    }
  }, [submitStatus, navigate]);

  return (
    <div className="">
      <Helmet>
        <title>Nominate Teaching Jobs</title>
        <meta
          name="description"
          content="Nominate our knowledgeable team today for assistance and information on our number 1 Teaching job board site in higher education and academia. "
        />
        <meta
          name="keywords"
          content="Nominate Teachingjobs, Nominate Teaching Jobs, Teachingjobs Nominate "
        />
      </Helmet>

      <div className="px-7 py-8 container mx-auto py-16 bg-orange-100 p-4 pt-4 rounded-3xl mt-8 mb-56">
        <h1 className="text-5xl font-semibold  text-[#f4a10c] ">
          Join Our Relief Teaching Talent Pool Today!
        </h1>
        {/* <h3 className="text-lg mt-4 pb-8">Nominate your Principal NOW!</h3>

        <h4 className="text-lg text-[#f4a10c]">
          To nominate an outstanding principal for the auspicious{" "}
          <span className="poty">"PRINCIPAL OF THE YEAR 2023 AWARD"</span>{" "}
          simply complete the form below:{" "}
        </h4> */}

        <div className="p-4 bg-gray-100 mt-[3rem] hidden">
          <p className="mb-4 text-lg font-semibold text-[#f4a10c]">
            Drop us an email:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <span className="font-semibold">
                University and College Advertisers:
              </span>{" "}
              BestResults (AT) Teachingjobs.com
            </li>
            <li>
              <span className="font-semibold">
                Teachings and Higher Ed Staff:
              </span>{" "}
              TheBestJobs (AT) TeachingJobs.com
            </li>
            <li>
              <span className="font-semibold">Student Jobs on Campus:</span>{" "}
              StudentWork (AT) TeachingJobs.com
            </li>
            <li>
              <span className="font-semibold">Teaching Talent Pool:</span>{" "}
              TalentPool (AT) AcadmeicJobs.com
            </li>
          </ul>
          <p className="mt-4">Or call us:</p>
        </div>

        <Link to="https://iloveTeachingjobs.com/Nominate/">
          <img
            src="https://Teachingjobs.s3.amazonaws.com/img/_misc/Nominate-us.jpeg"
            alt="Nominate us"
            className="mt-[4rem] hidden"
          />
        </Link>

        <form className="mt-8" onSubmit={handleSubmit}>
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          

         

            {/* Nominator section */}
            <div className="col-span-2">
              <h4 className="text-[#f4a10c] text-3xl mt-8 mb-2 font-semibold">
                Your details
              </h4>
            </div>

            {/* Nominator first name */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabindex="11"
                  type="text"
                  id="first-name-input"
                  name="11_Nominator-First-Name"
                  className="w-full px-4 py-3  rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder=" First Name"
                  autocomplete="given-name"
                  onChange={handleChange}
                  required
                />
                <i className="required">*</i>
              </div>
            </div>

            {/* Nominator last name */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabindex="12"
                  type="text"
                  id="last-name-input"
                  name="12_Nominator-Last-Name"
                  className="w-full px-4 py-3  rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder=" Last Name"
                  autocomplete="family-name"
                  onChange={handleChange}
                  required
                />
                <i className="required">*</i>
              </div>
            </div>

              {/* Nominee phone */}
              <div className="col-span-1">
              <div className="relative">
                <input
                  tabindex="4"
                  type="text"
                  id="nominee-phone"
                  name="04_nominee-phone"
                  className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="Phone Number"
                  onChange={handleChange}
                />
                <i className="required">*</i>
              </div>
            </div>

            {/* Nominator email */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabindex="14"
                  type="email"
                  id="email-input"
                  name="14_Nominator-Email"
                  className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="Email"
                  autocomplete="email"
                  onChange={handleChange}
                  required
                />
                <i className="required">*</i>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="relative">
              <p required>
                Any field with an asterisk (<span className="asterisk">*</span>)
                is a required field!
              </p>
            </div>
          </div>

          <div className="text-right mt-6">
            <button
              tabindex="15"
              type="submit"
              className="px-6 py-2 rounded-full bg-transparent border-2 border-orange-500 text-orange-500 font-semibold hover:bg-[#f4a10c] hover:text-black transition duration-300 ease-in-out"
            >
              Send
            </button>
          </div>
          {/* 
          This is now redirecting to a new page
          {submitStatus === "success" && (
            <p className="mt-6 text-center text-2xl font-bold text-green-500">
              Thank you for nominating a principal, your nomination has been
              received!
            </p>
          )} */}
          {submitStatus === "error" && (
            <p className="mt-6 text-center text-2xl font-bold text-red-500">
              Sorry! We encountered an error, please try again.
            </p>
          )}
        </form>
      </div>

     

      {/* contact details */}
      <div className="mainContent px-7 pb-4 hidden">
        <div className="container1b bg-white text-[#f4a10c] font-openSans font-bold py-4">
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

export default Nominate;
