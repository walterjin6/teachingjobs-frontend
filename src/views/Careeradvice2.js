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
        <h2 className=" font-bold text-xl md:text-xl px-7 text-[#f4ac10] border-2 border-[#f4ac10] rounded-3xl mt-12 py-2"> Top Career Hub Posts</h2>
        {/* <div className="bg-white flex flex-col  ">
          <ul className=" mb-8 text-left items-stretch grid grid-cols-1 md:grid-cols-3 gap-4 py-10 px-1  w-full ">
           
    
              <Link to="/career-hub/school-career-advice/">
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"> A Guide to Teacher Well-Being and Mental Health </h2>   
                  <a className=" text-gray-400" > 10 Aug, 2023</a>
                </div>
                <figure><img src="https://academicjobs.s3.amazonaws.com/img/_misc/Teacher_mental_health.png" alt="A Guide to Teacher Well-Being and Mental Health" /></figure>
              </div></Link>
              
              <Link to="/career-hub/school-career-advice/">
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"> A Guide to Teacher Well-Being and Mental Health </h2>   
                  <a className=" text-gray-400" > 10 Aug, 2023</a>
                </div>
                <figure><img src="https://academicjobs.s3.amazonaws.com/img/_misc/Teacher_mental_health.png" alt="A Guide to Teacher Well-Being and Mental Health" /></figure>
              </div></Link>
              
              <Link to="/career-hub/school-career-advice/">
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"> A Guide to Teacher Well-Being and Mental Health </h2>   
                  <a className=" text-gray-400" > 10 Aug, 2023</a>
                </div>
                <figure><img src="https://academicjobs.s3.amazonaws.com/img/_misc/Teacher_mental_health.png" alt="A Guide to Teacher Well-Being and Mental Health" /></figure>
              </div></Link>

              <Link to="/career-hub/school-career-advice/">
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"> A Guide to Teacher Well-Being and Mental Health </h2>   
                  <a className=" text-gray-400" > 10 Aug, 2023</a>
                </div>
                <figure><img src="https://academicjobs.s3.amazonaws.com/img/_misc/Teacher_mental_health.png" alt="A Guide to Teacher Well-Being and Mental Health" /></figure>
              </div></Link>

              <Link to="/career-hub/school-career-advice/">
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"> A Guide to Teacher Well-Being and Mental Health </h2>   
                  <a className=" text-gray-400" > 10 Aug, 2023</a>
                </div>
                <figure><img src="https://academicjobs.s3.amazonaws.com/img/_misc/Teacher_mental_health.png" alt="A Guide to Teacher Well-Being and Mental Health" /></figure>
              </div></Link>

              <Link to="/career-hub/school-career-advice/">
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"> A Guide to Teacher Well-Being and Mental Health </h2>   
                  <a className=" text-gray-400" > 10 Aug, 2023</a>
                </div>
                <figure><img src="https://academicjobs.s3.amazonaws.com/img/_misc/Teacher_mental_health.png" alt="A Guide to Teacher Well-Being and Mental Health" /></figure>
              </div></Link>
              
              
              
              </ul>
              </div> */}

      </div>
      <h1 className=" font-bold text-xl md:text-xl px-7 text-[#f4ac10] "> Career Advices11</h1>
      <hr className="w-ful  mx-auto  bg-[#f4ac10] border-8 rounded-full md:my-2 md:mb-4  border-[#f4a10c] shadow-xl "></hr>
     <div className="mt-[-3.3rem] "><SearchResults q={{ l: "Career_Hub" }} /></div> 
    </div>
  );
};
export default Careeradvice2;