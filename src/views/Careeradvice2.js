import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'
import SearchResults from './SearchResults'
import careerAdvice from "../utils/careerAdvice";
const Careeradvice2 = () => {
  return (
    <div className="min-h-0">
      <Helmet>
        <title>The Best Career Blogs For Teachers </title>
        <meta name="description" content="Explore Australia's most in-demand roles with salary, job trends and career pathways. Our blog articles showcase the knowledge and experiences of real teachers. " />
        <meta name="keywords" content="Career Advice, Resume, Interview, Career Growth, Teaching" />
      </Helmet>
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-2xl md:text-3xl py-4 px-7 bg-[#e39e39] text-white rounded-full shadow-xl"> The Best Career Blogs For Teachers</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="py-4 px-7  text-black rounded-2xl ">
          <p >Our career advice page is designed to help you find the best school teaching jobs in your area, as well as provide you with useful tips and resources on how to prepare for your application, interview, and classroom. Whether you are a new graduate, a career changer, or an experienced teacher looking for a new challenge, we have something for you.</p>
        </div>
        <div className="bg-white flex flex-col  ">
          <ul className="  text-left grid grid-cols-1  gap-12 pt-4 px-1 h-auto w-[80vh]">
            <li className="text-1xl py-1 px-7  max-h-50 overflow-y text-[#f4ac10] border border-[#f4ac10] p-4 mb-4 rounded-3xl shadow-lg   "><Link to="/school-career-advice/build-students-resilience/">  <img className="scale-[90%]"
              src="https://myteachingjobs.com.au/files/pictures/a3175s2331-crop.jpeg"
              alt="5 Ways to Build Resilience in Students"
            /> 5 Ways to Build Resilience in Students</Link> <a className=" text-gray-400" >06 Jul, 2023</a></li>
            <li className="text-1xl py-1 px-7  max-h-50 overflow-y text-[#f4ac10] border border-[#f4ac10] p-4 mb-4 rounded-3xl shadow-lg   "><Link to="/school-career-advice/perma-pillars-for-teachers/">  <img
              src="https://myteachingjobs.com.au/files/pictures/image_2_1.jpeg"
              alt="How to Land Your Dream College Job: A Step-by-Step Guide"
              className=""
            /> Using PERMA pillars to support teachers </Link><a className=" text-gray-400" > 10 Aug, 2023</a></li>
          </ul>
        </div>
      </div>
      <h1 className=" font-bold text-xl md:text-xl px-7 text-[#f4ac10] "> Career Advices</h1>
      <hr className="w-ful  mx-auto  bg-[#f4ac10] border-8 rounded-full md:my-2 md:mb-4  border-[#f4a10c] shadow-xl "></hr>
      <div className="mt-[-3.3rem] "><SearchResults q={{ l: "Career_Hub" }} /></div>
    </div>
  );
};
export default Careeradvice2;