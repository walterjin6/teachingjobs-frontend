import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'
import SearchResults from './SearchResults'
import careerAdvice from "../utils/careerAdvice";

const Careeradvice2 = () => {
  return (


    <div className="">
      <Helmet>
        <title>Academic hub and Career Advice</title>
        <meta name="description" content="Are you looking for hub in academia? Read our blog posts to discover the secrets of well-being, work-life balance, and career satisfaction for academics.  " />
        <meta name="keywords" content="academic hub, AcademicJobs hub" />
      </Helmet>
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-2xl md:text-3xl py-4 px-7 bg-[#f4ac10] text-white rounded-full shadow-xl"> Academic Hub & Top Career Advice Today</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>


        <div className="py-4 px-7  text-black rounded-2xl ">

          <p >Are you looking for an academic hub, career advice, tips, and insights from academics and researchers? Check out these academic jobs blogs and learn from the experts in your field. Whether you are a PhD student, a postdoc, or a professor, you will find valuable information and inspiration to advance your academic career. Read these blogs now and discover the best opportunities and practices for academic hub.</p>
        </div>


        <div className="bg-white flex flex-col  ">
       

        <ul className=" mb-8 text-left grid grid-cols-1 md:grid-cols-3 gap-4 py-10 px-1 h-auto w-full ">

        <li className="text-1xl py-1 px-7  max-h-50 overflow-y text-[#f4ac10] border border-[#f4ac10] p-4 mb-4 rounded-3xl shadow-lg   "><Link to="/academic-hub/happiness-and-academics/">  <img className="scale-[90%]"
        src="https://academicjobs.s3.amazonaws.com/img/_misc/how-to-be-a-happy-academic.jpg"
        alt="How to Land Your Dream College Job: A Step-by-Step Guide"
        
      /> hub and Academics: Scott Galloway's Algebra of hub</Link> <a className=" text-gray-400" >16 Oct, 2023</a></li>
     
     
     <li className="text-1xl py-1 px-7  max-h-50 overflow-y text-[#f4ac10] border border-[#f4ac10] p-4 mb-4 rounded-3xl shadow-lg   "><Link to="/academic-hub/top-academic-jobs-australia/">  <img
        src="https://academicjobs.s3.amazonaws.com/img/_misc/top-academic-jobs-australia.jpg"
        alt="How to Land Your Dream College Job: A Step-by-Step Guide"
        className=""
      /> Top Academic Jobs Australia </Link><a className=" text-gray-400" > 10 Aug, 2023</a></li>
            
            <li className="text-1xl py-1 px-7  max-h-50 overflow-y text-[#f4ac10] border border-[#f4ac10] p-4 mb-4 rounded-3xl shadow-lg   "><Link to="/academic-hub/how-to-land-your-dream-college-job-a-step-by-step-guide/">  <img
        src="https://academicjobs.s3.amazonaws.com/img/_misc/Dream_Job_2.png"
        alt="How to Land Your Dream College Job: A Step-by-Step Guide"
        className=""
      /> How to Land Your Dream College Job: A Step-by-Step Guide </Link><a className=" text-gray-400" > 06 Jul, 2023</a></li>

<li className="text-1xl py-1 px-7  max-h-50 overflow-y text-[#f4ac10] border border-[#f4ac10] p-4 mb-4 rounded-3xl shadow-lg  "><Link to="/academic-hub/exploring-the-benefits-of-academic-jobs-online-why-virtual-hiring-is-on-the-rise/">  <img
        src="https://academicjobs.s3.amazonaws.com/img/_misc/Virtual_Hiring.png"
        alt="Exploring the Benefits of Academic Jobs Online: Why Virtual Hiring is on the Rise"
        className=""
      /> Exploring the Benefits of Academic Jobs Online: Why Virtual Hiring is on the Rise</Link><a className=" text-gray-400" > 20 Jun, 2023</a></li>


<li className="text-1xl py-1 px-7  max-h-50 overflow-y text-[#f4ac10] border border-[#f4ac10] p-4 mb-4 rounded-3xl shadow-lg  " ><Link to="/academic-hub/exploring-the-global-landscape-of-academic-jobs-opportunities-and-challenges/">  <img
        src="https://academicjobs.s3.amazonaws.com/img/_misc/Global_Opportunities_2.png"
        alt="Exploring the Global Landscape of Academic Jobs: Opportunities and Challenges"
        className=""
      /> Exploring the Global Landscape of Academic Jobs: Opportunities and Challenges</Link><a className=" text-gray-400" > 7 Jun, 2023</a></li>




      
      <li className="text-1xl py-1 px-7  max-h-50 overflow-y text-[#f4ac10] border border-[#f4ac10] p-4 mb-4 rounded-3xl shadow-lg   "><Link to="/academic-hub/the-evolution-of-university-recruitment/">  <img
        src="https://academicjobs.s3.amazonaws.com/img/_misc/Recruitment_Evolution_2.png "
        alt="How to Land Your Dream College Job: A Step-by-Step Guide"
        className=""
      /> The Evolution of University Recruitment: Embracing Digital Platforms </Link><a className=" text-gray-400" > 15 May, 2023</a></li>


              </ul>
             

              </div>
            
    
      </div>
      <h1 className=" font-bold text-xl md:text-xl px-7 text-[#f4ac10] "> All Academic Hub Posts</h1>
      <hr className="w-ful  mx-auto  bg-[#f4ac10] border-8 rounded-full md:my-2 md:mb-4  border-[#f4a10c] shadow-xl"></hr>
      <div className="mt-[-3.3rem]"><SearchResults  q={{ l: "Academic Hub" }} /></div> 

    </div>

  );
};

export default Careeradvice2;