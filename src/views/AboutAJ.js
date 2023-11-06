import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
const AboutAJ = () => {
    return (
        <div className=" px-7 py-4 text-left  mb-0">
            <Helmet>
                <title>About Teaching Jobs</title>
                <meta name="description" content="Join our community of passionate teachers and make a difference in the lives of students. Visit teaching job board today and discover the opportunities waiting for you.  " />
                <meta name="keywords" content="About Teaching Jobs, About Teaching Jobs, Teaching Jobs About  " />
            </Helmet>
            <img
                src="https://Teaching Jobs.s3.amazonaws.com/img/banner/teaching-jobs-About-AJ.png"
                alt="contact us"
                className=" rounded-3xl  hidden"></img>
            <p className="block text-4xl font-bold font-roboto text-[#f4a10c]  pt-12 p-8">About Us</p>
            <p className="underline text-[#f4a10c]  pt-4 "> <Link to="/about/term-of-use/" className="underline text-[#f4a10c] mb-8 pt-4 p-8">Terms & Conditions</Link> </p>
            <p className="underline text-[#f4a10c]  pt-4 "> <Link to="/about/diversity-statement/" className="underline text-[#f4a10c] mb-8 pt-4 p-8">Diversity Statement</Link>  </p>
          
            <div className=" border-[#f4a10c] border-4 rounded-3xl p-8 mt-8">
                <p className="block text-3xl font-bold font-open-sans  mb-8 mt-12">
                    ALL THE BEST SCHOOL JOBS
                </p>
                <p className="block text-xl  font-open-sans bg-white text-gray-700 mb-8 font-bold">
                Discover the top teaching jobs available in your location, city or state.
                </p>
                <p className="block text-xl   font-open-sans bg-white text-gray-700 mb-8 font-bold">
                We list of school staff, support, teaching and principal positions. Use teachingjobs.com.au to search for teaching opportunities, careers, and employment online.
                </p>
                <p className=" block text-xl   font-roboto text-black mb-8 ">
                Greetings from Teaching Jobs, the premier online job search and application portal for teaching jobs and school recruitment. We offer the ideal opportunity for you, whether you're searching for a teaching, principal, or tutoring career.
                </p>
                <p className=" block text-xl   font-roboto text-black mb-8 ">
                A group of teaching experts who were dissatisfied with the lack of efficiency and openness in the teaching employment market formed Teaching Jobs. Simply put, they continued to use antiquated technology and believed that the job boards for teaching employment that were previously available did not serve their clients' needs. As a result, they have developed the greatest teaching employment platform available today, which makes it simpler for applicants to look for positions, evaluate offers, and get in touch with employers. Additionally, they have given schools an easy-to-use and affordable option to manage their applications, reach a large talent pool, and publicise their job openings.
                </p>
               
                <p className=" block text-xl   font-roboto text-black mb-8 ">
                Our goal is to assist you in hiring the most qualified teachers or in locating your ideal teaching position. We are dedicated to giving you the most sophisticated and user-friendly tools, the most thorough and current information, and the most expert and individualised service. In addition, we have a strong commitment to advancing inclusion, equity, and diversity in the teaching profession.
                </p>
                <p className="block text-xl   font-roboto  mb-8">
                It is our desire that you find Teaching Jobs enjoyable and helpful for your teaching career or hiring requirements. We hope to hear from you soon!
                </p>
            </div>
        </div>
    );
}
export default AboutAJ;