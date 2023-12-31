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
          Principal of the year 2023!
        </h1>
        <h3 className="text-lg mt-4 pb-8">Nominate your Principal NOW!</h3>

        <h4 className="text-lg text-[#f4a10c]">
          To nominate an outstanding principal for the auspicious{" "}
          <span className="poty">"PRINCIPAL OF THE YEAR 2023 AWARD"</span>{" "}
          simply complete the form below:{" "}
        </h4>

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
          <h4 className="text-[#f4a10c] text-3xl mt-8 mb-4 font-semibold">
            Nominee
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nominee First Name */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabindex="1"
                  type="text"
                  id="nominee-first-name"
                  name="01_nominee-first-name"
                  className="w-full px-4 py-3  rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="Nominee First Name"
                  onChange={handleChange}
                  required
                />
                <i className="required">*</i>
              </div>
            </div>

            {/* Nominee Last Name */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabindex="2"
                  type="text"
                  id="nominee-family-name"
                  name="02_nominee-family-name"
                  className="w-full px-4 py-3  rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="Nominee Last Name"
                  onChange={handleChange}
                  required
                />
                <i className="required">*</i>
              </div>
            </div>

            {/* Principal Nominee Email */}
            <div className="col-span-2">
              <div className="relative">
                <input
                  tabindex="3"
                  type="email"
                  id="name-email"
                  name="03_nominee-email"
                  className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="Principal Email"
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

            {/* Nominee school */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabindex="5"
                  type="text"
                  id="nominee-school"
                  name="05_nominee-school"
                  className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="School Name"
                  onChange={handleChange}
                  required
                />
                <i className="required">*</i>
              </div>
            </div>

            {/* Nominee suburb */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabindex="6"
                  type="text"
                  id="nominee-school-suburb"
                  name="06_nominee-school-suburb"
                  className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="School Suburb (Town)"
                  onChange={handleChange}
                  required
                />
                <i className="required">*</i>
              </div>
            </div>

            {/* Nominee school type */}
            <div className="col-span-1">
              <div className="relative">
                <select
                  className="select w-full "
                  tabindex="7"
                  id="nominee-school-type"
                  name="07_nominee-school-type"
                  onChange={handleChange}
                  required
                >
                  <option disabled selected>
                    School type…
                  </option>
                  <option value="Public School">Public School</option>
                  <option value="Private School">Private School</option>
                  <option value="Catholic School">Catholic School</option>
                  <option value="Special Education School">
                    Specialist School
                  </option>
                  <option value="Independent School">Independent School</option>
                  {/* <option value="Montessori School">Montessori School</option>
                  <option value="Steiner School">
                    Steiner (Waldorf) School
                  </option>
                  <option value="International School">
                    International School
                  </option>
                  <option value="Selective School">Selective School</option> */}
                </select>
                <i className="required">*</i>
              </div>
            </div>

            {/* Nominee region-type */}
            <div className="col-span-1">
              <div className="relative">
                <select
                  tabindex="8"
                  className="select w-full "
                  id="nominee-school-region-type"
                  name="08_nominee-school-region-type"
                  onChange={handleChange}
                  required
                >
                  <option disabled selected>
                    School region…
                  </option>
                  <option value="City">City</option>
                  <option value="Rural">Rural</option>
                </select>
                <i className="required">*</i>
              </div>
            </div>

            {/* Nominee state */}
            <div className="col-span-1">
              <div className="relative">
                <select
                  tabindex="9"
                  className="select w-full "
                  id="nominee-school-state-territory"
                  name="09_nominee-school-state-territory"
                  onChange={handleChange}
                  required
                >
                  <option disabled selected>
                    School's state or territory…
                  </option>
                  <option value="ACT">Australian Capital Territory</option>
                  <option value="NSW">New South Wales</option>
                  <option value="NT">Northern Territory</option>
                  <option value="QLD">Queensland</option>
                  <option value="SA">South Australia</option>
                  <option value="TAS">Tasmania</option>
                  <option value="VIC">Victoria</option>
                  <option value="WA">Western Australia</option>
                </select>
                <i className="required">*</i>
              </div>
            </div>

            {/* Nomination reason */}
            <div className="col-span-2">
              <div className="relative">
                <textarea
                  tabindex="10"
                  id="nomination-reason"
                  name="10_nomination-reason"
                  className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="Please write a brief description as to why your principal deserves our award (maximum 200 words)"
                  onChange={handleChange}
                  required
                />
                <i className="required">*</i>
                <label
                  htmlFor="nomination-reason"
                  className="absolute left-4 top-2 text-gray-600 transition-all"
                ></label>
              </div>
            </div>

            {/* Nominator section */}
            <div className="col-span-2">
              <h4 className="text-[#f4a10c] text-3xl mt-8 mb-2 font-semibold">
                About You
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

            {/* Nominator role position */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabindex="13"
                  type="text"
                  id="role-position-input"
                  name="13_Nominator-Role-Position"
                  className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="Role or Position (student, parent, teacher, etc.)"
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

      <section className="px-7 py-8 container mx-auto py-16 bg-slate-100 p-4 pt-4 rounded-3xl mt-8 mb-8">
        <h2>
          Recognising and presenting the most auspicious award for Exceptional
          Leadership in Australian Schools
        </h2>
        <p>Have you witnessed remarkable leadership?</p>
        <h4 className="text-lg mt-4 pb-8">
          Is your school led by or do you know a principal who truly makes a
          difference? Someone who inspires, motivates, and fosters excellence
          not only in students but also in fellow teachers? Here's your chance
          to shine a spotlight on their exceptional work!
        </h4>

        <h3>Categories for Every School</h3>
        <p>
          This year, we're honouring principals from all corners of the
          education sector:
        </p>
        <ul>
          <li>
            <span className="font-bold">Public Schools:</span> Celebrating the
            leaders of our public education system.
          </li>
          <li>
            <span className="font-bold">Private Schools:</span> Acknowledging
            the unique contributions in private education.
          </li>
          <li>
            <span className="font-bold">Catholic Schools:</span> Recognising the
            values-driven leadership in our Catholic schools.
          </li>
          <li>
            <span className="font-bold">Specialist Schools:</span> Recognising
            the dedicated focus on special educational needs.
          </li>
          <li>
            <span className="font-bold">Independent Schools:</span> Celebrating
            the freedom and innovation in education.
          </li>
        </ul>

        <h2>Awards at Every Level</h2>
        <p>We're going local and national:</p>
        <ul>
          <li>
            <span className="font-bold">City Level:</span> Honouring local
            heroes in education.
          </li>
          <li>
            <span className="font-bold">Regional Level:</span> Recognising the
            leaders making a difference in their regions.
          </li>
          <li>
            <span className="font-bold">State Level:</span> Celebrating the top
            leadership across each state.
          </li>
        </ul>

        <h3>What Makes a Principal Great?</h3>
        <p>
          Is it their innovative approach to education? Their tireless
          commitment to student welfare? Or the way they lead and uplift their
          teaching team? Tell us what makes your principal stand out!
        </p>

        <h3>An Auspicious and Prestigious Honour</h3>
        <p>
          Being nominated for the Principal of the Year is a significant
          accolade, symbolising dedication, leadership, and a profound impact on
          the educational community. The winners will not only hold the title of
          The Teaching Jobs Principal of the Year but will also be recognised as
          pinnacles of educational excellence.
        </p>

        <h3>How to Nominate</h3>
        <p>
          <span className="font-bold">Share Your Story:</span> Tell us about
          your principal's achievements, leadership qualities, and impact.
        </p>
        <p>
          <span className="font-bold">Gather Support:</span> Encourage fellow
          teachers, students, and parents to join in and share their
          experiences.
        </p>
        <p>
          <span className="font-bold">Submit Your Nomination:</span> Complete
          the nomination form below with all the details by 20 December 2023.
        </p>

        <h3>Spread the Word</h3>
        <p>
          Each nomination increases support and can make a world of difference.
          Join us in celebrating the extraordinary leaders who shape the future
          of education in Australia.
        </p>
        <p>Nominate your Principal Today!</p>

        <p>
          View{" "}
          <Link className="link link-warning" to="/nominee-promotion-ideas">
            helpful information and promotion resources
          </Link>{" "}
          for the Australian 'Principal of the Year' 2023
        </p>

        <p>Winners will be announced on 22 December 2023.</p>
      </section>

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
