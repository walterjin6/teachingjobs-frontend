import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import JobDetail from './JobDetail'
import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import category from "../utils/category.json";
import position from "../utils/position.json";
import hr from "../utils/hr.json";
import research from "../utils/research.json";
import lecturer from "../utils/lecturer.json";
import professor from "../utils/professor.json";
import industry from "../utils/industry.json";
import executive from "../utils/executive.json";
import student from "../utils/student.json";
import admin from "../utils/admin.json";
import cities from "../utils/cities.json";
import careerAdvice from "../utils/careerAdvice";
import { Helmet } from "react-helmet";
import DispatchLink from '../components/DispatchLink'
const Home = () => {
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  const region = useSelector((state) => state.posts.region)
  console.log(region)
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const a = {}
    if (keyWordRef.current.value.trim()) a.q = keyWordRef.current.value.trim()
    //navigate("/jobs/", { state: { q: keyWordRef.current.value.trim(), l: countryMappings1[region].searchLocation } });
    navigate("/jobs/", { state: { q: keyWordRef.current.value.trim() } });
  }
  return (
    <div className='px-7 '>
      <div className="bg-white  flex flex-col items-center  justify-center ">
        <div className='h-[25vh] flex flex-col items-end justify-end'>
          <Helmet>
            <title>Academic Jobs: Academic, research and science positions locally and globally.</title>
            <meta name="description" content="Discover academic jobs at all universities today! Explore your next academic positions through visiting our higher ed jobs, with new academic jobs added daily." />
            <meta name="keywords" content="Academic Jobs. Higher Ed Jobs, Academic positions, University Jobs, College Jobs" />
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Academic Jobs",
                    "url": "/",
                    "description": "Find online and remote university jobs at AcademicJobs.  Browse the largest number of academic jobs online in your country and worldwide."
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Find Academic Jobs",
                    "url": "/jobs/",
                    "description": "Browse thousands of faculty, lecturer, research, and science positions in various disciplines and locations. Apply online and get hired today."
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Academic Jobs Online",
                    "url": "/online/",
                    "description": "Academic jobs online allow students, graduates, or professionals with the opportunity to earn income, gain valuable work experience, develop employability skills."
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "HR Jobs",
                    "url": "/hr/",
                    "description": "The largest number of university HR jobs online.Find your next HR role at a top university"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Research Jobs",
                    "url": "/research/",
                    "description": "Seek and find all academic research opportunities today. Search for jobs by salary, location, and more on Academic Jobs"
                  },
                  {
                    "@type": "ListItem",
                    "position": 6,
                    "name": "Executive Jobs",
                    "url": "/executive/",
                    "description": "Find President, Dean, Chancellor, Dept Head and Provost jobs"
                  },
                  {
                    "@type": "ListItem",
                    "position": 7,
                    "name": "Lecturing Jobs",
                    "url": "/lecturer/",
                    "description": "Lecture anywhere in the world in your academic specialty"
                  }
                  ,
                  {
                    "@type": "ListItem",
                    "position": 8,
                    "name": "Student Jobs on Campus",
                    "url": "/student/",
                    "description": "Find student jobs here.  Sign up for job alerts today"
                  },
                  {
                    "@type": "ListItem",
                    "position": 9,
                    "name": "Academic Happiness and university life hacks",
                    "url": "/academic-happiness/",
                    "description": "Find the secret to academic happiness.  Subscribe and get tips on navigating university life, learning and career."
                  }
                  ,
                  {
                    "@type": "ListItem",
                    "position": 10,
                    "name": "Post A Job",
                    "url": "/post-job/",
                    "description": "Easily post a job on Academic Jobs – attract top academic talent locally and globally."
                  },
                  {
                    "@type": "ListItem",
                    "position": 11,
                    "name": "Jobs in Australia",
                    "url": "/Australia/",
                    "description": "Australia’s number one university job website.  All the jobs of all the universities in Australia"
                  },
                  {
                    "@type": "ListItem",
                    "position": 12,
                    "name": "Jobs in the United States",
                    "url": "/USA/",
                    "description": "Harvard, MIT, UCLA, Yale and Stanford university jobs.University & Academic Jobs in the USA.Browse; Search; Apply"
                  },
                  {
                    "@type": "ListItem",
                    "position": 13,
                    "name": "Jobs in the UK",
                    "url": "/UK/",
                    "description": "Oxford, Cambridge, UCL, LSE and Imperial, Leeds university jobs."
                  },
                  {
                    "@type": "ListItem",
                    "position": 14,
                    "name": "Join the Global Academic Talent Pool",
                    "url": "/talent-pool/",
                    "description": "Get headhunted by top ranked universities.  Collaborated with award winning academics globally. Get academic job alerts"
                  }
                ]
              })}
            </script>
          </Helmet>
          <img
            // src="https://academicjobs.s3.amazonaws.com/img/_misc/academic-jobs-logo.png"
            src="academicJobsLogo.png"
            alt="AcademicJobs Logo"
            className="pl-4 w-[20rem] mb-[1rem] "
          />
        </div>
        <div className='w-full md:w-3/5  flex flex-col items-top '>
          <form className=' flex flex-col gap-1 items-center md:items-end w-full' onSubmit={handleFormSubmit}>
            <div className="flex flex-col  gap-2 md:flex-row md:gap-0 mx-18 w-full  mt-5 md:border rounded-full p-2 md:shadow-md ">
              <input
                type="text"
                className="flex-grow px-4 py-2 focus:outline-none border rounded-full shadow-md md:border-none md:shadow-none"
                placeholder="Type Keywords"
                ref={keyWordRef}
              />
              <button className="px-4 py-2 bg-[#e39e39] text-white rounded-full shadow-md hover:bg-[#334680] font-bold"
                type="submit"
              >
                Search
              </button>
            </div>
          </form >
          <div className=" mt-[3rem] " >
            <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-[#334680] ">
              <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
               <li className='mb-2 '><Link to="/early-childhood/" >	Kindergarten</Link></li>
               <li className='mb-2 '><Link to="/primary/" >	Primary </Link></li>
               <li className='mb-2 '><Link to="/secondary/" >	Secondary</Link></li>
              </ul>
             
           
             <li className='mb-2 '><Link to="/administrative/" >Admin</Link></li>
             <li className='mb-2 '><Link to="/tutor/" >	Tutor</Link></li>
          
            </ul>
          </div>
          <div className=" mt-4 pb-8" >
            <ul className="faculty-container flex  gap-4 items-center justify-center text-[#e39e39] ">
             <li className='mb-2 '><Link to="/jobs/online/" >	Online </Link></li>
             <li className='mb-2 '><Link to="/jobs/remote/" >	Remote</Link></li>
             <li className='mb-2 '><Link to="/jobs/full-time/" >Full-Time</Link></li>
             <li className='mb-2 '><Link to="/jobs/part-time/" >	Part-Time</Link></li>
             <li className='mb-2 '><Link to="/jobs/casual/" >	Casual</Link></li>
            </ul>
          </div>
          <div className="text-[#e39e39]  flex flex-col items-center justify-center  text-2xl pt-8  animate-bounce h-6" >
            <a >▼</a></div>
        </div>
      </div>
      <div className=" pt-12">
        <div className="blurb text-left pt-12 ">
          <h1 className=" font-bold text-lg md:text-3xl py-4 px-6 bg-[#e39e39] text-white rounded-full mt-[18rem] shadow-xl border-4"># 1 TEACHING JOBS SITE</h1>
          <div className="newLine mb-4">
            <p className="font-semibold"></p>
            <p className="font-semibold"></p>
          </div>
          <div className="newLine">
            <p className=" px-7 text-[#e39e39] text-2xl font-bold">Find all Australian Teaching Career opportunities here

</p>
            <p className=" px-7 text-[#334680]  text-xl pt-4">Kindergarten Jobs | Primary School Jobs | Secondary School Jobs</p>
            <p className=" px-7"></p>
          </div>
        </div>

        <div className="bg-white flex flex-col  ">
            <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#f4a10c] text-[#f4a10c] rounded-3xl shadow-md  mt-20 ">Choose Teaching Job Types</h2>
            <ul className=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 pl-8 h-auto w-full text-transform: capitalize">
              {position.map(({ Title, Name, break1, isBold }, key) => (
                <li className={`pb-2 flex ${break1 ? 'md:break' : ''} ${isBold ? 'pt-4 font-bold text-[#f4a10c]' : ''}`} key={key}>
                  <Link to={`/${Name?.replace(/\s+/g, '-')}/`}>{Name}</Link>
                </li>
              ))}
            </ul>
            <div className="newLine"></div>
          </div>

          <div className="bg-white flex flex-col  ">
            <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#f4a10c] text-[#f4a10c] rounded-3xl shadow-md  mt-20 ">Choose Teaching Jobs by State</h2>
            <ul className=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 pl-8 h-auto w-full text-transform: capitalize">
              {industry.map(({ Title, Name, break1, isBold }, key) => (
                <li className={`pb-2 flex ${break1 ? 'md:break' : ''} ${isBold ? 'pt-4 font-bold text-[#f4a10c]' : ''}`} key={key}>
                  <Link to={`/${Name?.replace(/\s+/g, '-')}/`}>{Name}</Link>
                </li>
              ))}
            </ul>
            <div className="newLine"></div>
          </div>
        

        <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#e39e39] text-[#e39e39] rounded-3xl mt-20 shadow-md">Top Teaching Jobs at Schools</h2>
        <div className="cate-group section23 ">
          <div className="widget__text-block">
            <div className="faculty-container grid-cols-2 grid md:grid-cols-4 gap-8 py-2 px-7">
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/USA/" className='text-[#e39e39] font-bold'>NSW</Link></li>
                  <ul className="innerUL">
                    
                   <li className='mb-2 '><Link to="/employers/sceggs-darlinghurst/15840/" >SCEGGS Darlinghurst</Link></li>
                   <li className='mb-2 '><Link to="/employers/ascham-School/11527/" >Ascham  School</Link></li>
                   <li className='mb-2 '><Link to="/employers/al-noori-muslim-school/15858/" >AL Noori Muslim school</Link></li>
                   <li className='mb-2 '><Link to="/employers/sydney-grammar-school/11556/" >Sydney Grammar school</Link></li>
                   <li className='mb-2 '><Link to="/employers/presbyterian-ladies-college-sydney/15839/" >Presbyterian Ladies College Sydney</Link></li>
                   <li className='mb-2 '><Link to="/employers/meriden-school/15835/" >Meriden school</Link></li>
                   <li className='mb-2 '><Link to="/employers/brisbane-girls-grammar-school/15844/" >Brisbane girls grammar-school</Link></li>
                   <li className='mb-2 '><Link to="/employers/redeemer-baptist-school/15838/" >Redeemer Baptist school</Link></li>
                   <li className='mb-2 '><Link to="employers/red-bend-catholic-college/1040/" >Red Bend Catholic college</Link></li>
                   <li className='mb-2 '><Link to="/employers/brisbane-grammar-school/15837" >Brisbane Grammar school</Link></li>
                   <li className='mb-2 '><Link to="/employers/queenwood/15859" >Queenwood</Link></li>

                    
                   
                 
                   
                    
                    
                    
                    
                    
                    
                   
                    
                   
                    
                    
                    
                   
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/Australia/" className='text-[#e39e39] font-bold'>Victoria</Link></li>
                  <ul className="innerUL">
                 <li className='mb-2 '><Link to="/employers/victoria-state-government-education-and-training/19/" >Victoria State Government Education and Training</Link></li>
                 <li className='mb-2 '><Link to="/employers/presbyterian-ladies-college/15842/" >Presbyterian Ladies College</Link></li>
                 <li className='mb-2 '><Link to="/employers/st-aloysius-college/15841/" >St Aloysius College</Link></li>
                 <li className='mb-2 '><Link to="/employers/ballarat-clarendon-college/15836/" >Ballarat Clarendon College</Link></li>
                 <li className='mb-2 '><Link to="/employers/korowa-anglican-girls-school/15845/" >Korowa Anglican girls school</Link></li>
                 <li className='mb-2 '><Link to="/employers/camberwell-grammar-school/15846/" >Camberwell Grammar school</Link></li>
                 <li className='mb-2 '><Link to="/employers/st-andrews-christian-college/15856/" >St Andrews Christian College</Link></li>
                 <li className='mb-2 '><Link to="/employers/haileybury-college/15855/" >Haileybury College</Link></li>
                 <li className='mb-2 '><Link to="/employers/christ-church-grammar-school/15860/" >Christ Church Grammar school</Link></li>
                 <li className='mb-2 '><Link to="/employers/huntingtower-school/15834/" >Huntingtower school</Link></li>
                 <li className='mb-2 '><Link to="/employers/belmont-christian-college/15898/" >Belmont Christian College</Link></li>
                 <li className='mb-2 '><Link to="/employers/lighthouse-christian-college-cranbourne/15843/" >Lighthouse Christian College Cranbourne</Link></li>
                 <li className='mb-2 '><Link to="/employers/fintona-girls-school/11527/" >Fintona girls school</Link></li>

                    
                  </ul>
                
                </ul>
              </div>
              <div className="column">
                <ul className="">
                <li className='mb-1 mt-4'><Link to="/UK/" className='text-[#e39e39] font-bold'>Queensland</Link></li>
                  <ul className="innerUL">
                 <li className='mb-2 '><Link to="/employers/queensland-government-department-of-education/18/" >Queensland - Government - Department of Education</Link></li>
                   <li className='mb-2 '><Link to="/employers/catholic-education-services-diocese-of-cairns/60/" >Catholic - Education services Diocese of Cairns</Link></li>
                   <li className='mb-2 '><Link to="/employers/townsville-catholic-education-office/35/" >Townsville Catholic Education Office</Link></li>
                   <li className='mb-2 '><Link to="/employers/somerville-house/15847/" >Somerville House</Link></li>
                    
                  </ul>
                  <li className='mb-1 mt-4'><Link to="/Europe/" className='text-[#e39e39] font-bold'>ACT</Link></li>
                  <ul className="innerUL">
                 <li className='mb-2 '><Link to="/employers/act-government-department-of-education/20/" >ACT Government - Department of Education</Link></li>
                 <li className='mb-2 '><Link to="/employers/orana-steiner-school/14803/" >Orana Steiner school</Link></li>
                    </ul>



                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/Europe/" className='text-[#e39e39] font-bold'>Western Australia</Link></li>
                  <ul className="innerUL">
                    
                    
                   <li className='mb-2 '><Link to="/employers/international-school-of-western-australia/15848/" >International School of Western Australia</Link></li>
                    
                   <li className='mb-2 '><Link to="/employers/st-hildas-anglican-school-for-girls/11459/" >St Hildas Anglican school for girls</Link></li>
                   
                    
                  </ul>
                  <li className='mb-1 mt-4'><Link to="/Europe/" className='text-[#e39e39] font-bold'>South Australia</Link></li>
                  <ul className="innerUL">
                 <li className='mb-2 '><Link to="/employers/government-of-south-australia-department-for-education/17/" >Government of South Australia Department for Education</Link></li>
                   
                    </ul>
                    <li className='mb-1 mt-4'><Link to="/Europe/" className='text-[#e39e39] font-bold'>Nothern Territory</Link></li>
                  <ul className="innerUL">
                 <li className='mb-2 '><Link to="/employers/northern-territory-department-of-education/21/" >Northern Territory Department of Education</Link></li>
                  
                   
                    </ul>
                    <li className='mb-1 mt-4'><Link to="/Europe/" className='text-[#e39e39] font-bold'>Tasmania</Link></li>
                  <ul className="innerUL">
                 <li className='mb-2 '><Link to="/employers/tasmanian-government-education/12/" >Tasmanian Government Education</Link></li>
                   
                    </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#e39e39] text-[#e39e39] rounded-3xl mt-20 shadow-md hidden">Top Academic Jobs Today</h2>
        <div className="cate-group section23 hidden">
          <div className="widget__text-block">
            <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7 hidden">
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4 '><Link to="/jobs/Assistant-Associate-Professor,-Fall-2024---Artificial-Intelligence-in-Aerospace-Engineering/70907" className='text-blue-500 font-bold'>Assistant/Associate Professor, Fall 2024 - Artificial Intelligence in Aerospace Engineering</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >The University of Texas at Austin</Link></li>
                   <li className='mb-2 '><Link to="" >Austin, TX, USA</Link></li>
                   <li className='mb-2 '><Link to="" >11 Dec, 2023</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/College-of-Veterinary-Medicine:-Open-Rank-Academic-(NTT-or-TT)---Equine-Emergency-Services/66803" className='text-blue-500 font-bold'>College of Veterinary Medicine: Open Rank Academic (NTT or TT) - Equine Emergency Services</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >University of Missouri - Columbia</Link></li>
                   <li className='mb-2 '><Link to="" >Columbia, MO, USA</Link></li>
                   <li className='mb-2 '><Link to="" >25 Nov, 2023</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/Assistant-Professor-in-Theatre-&-Dance-with-a-focus-on-Designing-Just-Futures/65517" className='text-blue-500 font-bold'>Assistant Professor in Theatre & Dance with a focus on Designing Just Futures</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >University of California San Diego</Link></li>
                   <li className='mb-2 '><Link to="" >La Jolla, San Diego, CA, USA</Link></li>
                   <li className='mb-2 '><Link to="" >19 Nov, 2023</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/Assistant-Director-for-Student-Programming-(71101)/66802" className='text-blue-500 font-bold'>Assistant Director for Student Programming (71101)</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >Pratt Institute</Link></li>
                   <li className='mb-2 '><Link to="" >NY, USA</Link></li>
                   <li className='mb-2 '><Link to="" >25 Nov, 2023</Link></li>
                  </ul>
                </ul>
              </div>
            </div>
            <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/Oregon-Sea-Grant-Extension-Specialist-in-Human-Dimensions-of-Coastal-Systems/69048" className='text-blue-500 font-bold'>Oregon Sea Grant Extension Specialist in Human Dimensions of Coastal Systems</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >Oregon State University</Link></li>
                   <li className='mb-2 '><Link to="" >Corvallis, OR, USA</Link></li>
                   <li className='mb-2 '><Link to="" >04 Dec, 2023</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/dsps-accommodation-assistant/65518" className='text-blue-500 font-bold'>DSPS Accommodation Assistant</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >Cuesta College</Link></li>
                   <li className='mb-2 '><Link to="" >San Luis Obispo, CA, USA</Link></li>
                   <li className='mb-2 '><Link to="" >19 Nov, 2023</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/tenure-track-assistant-professor-of-machine-learning-in-biology/68725" className='text-blue-500 font-bold'>Tenure-track Assistant Professor of Machine Learning in Biology</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >University of Pennsylvania</Link></li>
                   <li className='mb-2 '><Link to="" >Philadelphia, PA, USA</Link></li>
                   <li className='mb-2 '><Link to="" >03 Dec, 2023</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/provost/69027" className='text-blue-500 font-bold'>Provost</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >American University of Armenia</Link></li>
                   <li className='mb-2 '><Link to="" >Yerevan, Armenia</Link></li>
                   <li className='mb-2 '><Link to="" >03 Dec, 2023</Link></li>
                  </ul>
                </ul>
              </div>
            </div>
            <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/open-rank-in-school-counseling-psychology/64801" className='text-blue-500 font-bold'>Open Rank (Assistant, Associate, Full Professor) in School Counseling & Psychology</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >California State University Channel Islands</Link></li>
                   <li className='mb-2 '><Link to="" >Camarillo, CA, USA</Link></li>
                   <li className='mb-2 '><Link to="" >15 Nov, 2023</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/open-rank-t-tt-faculty-chancellors-faculty-excellence-program-translational-predictive-biology-cluster/63422" className='text-blue-500 font-bold'>Open Rank T/TT Faculty - Chancellor's Faculty Excellence Program (CFEP) - Translational Predictive Biology Cluster</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >North Carolina State University</Link></li>
                   <li className='mb-2 '><Link to="" >Raleigh, NC, USA</Link></li>
                   <li className='mb-2 '><Link to="" >10 Nov, 2023</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/executive-director-of-development-haas-school-of-business/61088" className='text-blue-500 font-bold'>Executive Director of Development, Haas School of Business (0465U) 57961</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >University of California Berkeley</Link></li>
                   <li className='mb-2 '><Link to="" >Berkeley, CA, USA</Link></li>
                   <li className='mb-2 '><Link to="" >29 Nov, 2023</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/deputy-cio/63764" className='text-blue-500 font-bold'>Deputy CIO</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >Bowling Green State University</Link></li>
                   <li className='mb-2 '><Link to="" >Bowling Green, OH, USA</Link></li>
                   <li className='mb-2 '><Link to="" >12 Nov, 2023</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/director-of-alumni-engagement/72223" className='text-blue-500 font-bold'>Director of Alumni Engagement</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >University of Pennsylvania</Link></li>
                   <li className='mb-2 '><Link to="" >Philadelphia, PA, USA</Link></li>
                   <li className='mb-2 '><Link to="" >16 Dec, 2023</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/Executive-Officer---Full-time---Permanent---Robina---Gold-Coast/69249/" className='text-blue-500 font-bold'>Executive Officer - Full time - Permanent - Robina - Gold Coast</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >Bond University</Link></li>
                   <li className='mb-2 '><Link to="" >Gold Coast QLD, Australia</Link></li>
                   <li className='mb-2 '><Link to="" >26 Dec, 2023</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/Senior-Engineer,-Student-Systems-(2-positions-available)/71827/" className='text-blue-500 font-bold'>Senior Engineer, Student Systems (2 positions available)</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >Queensland University of Technology</Link></li>
                   <li className='mb-2 '><Link to="" >Gardens Point Road, Brisbane City QLD, Australia</Link></li>
                   <li className='mb-2 '><Link to="" ></Link></li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Link className='text-[#e39e39] mt-4 mb-4 px-2 hidden' to='/jobs/'>← view more</Link>
        <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#e39e39] text-[#e39e39] rounded-3xl mt-20 shadow-md hidden">Top Universities To Work For</h2>
        <div className="cate-group section23 hidden">
          <div className="widget__text-block">
            <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/employerss/queensland-university-of-technology/3786/" className='text-[#003463] font-bold'>Queensland University of Technology (QUT)</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="/jobs/QUT-lecturer/" >QUT Lecturing Jobs</Link></li>
                   <li className='mb-2 '><Link to="/jobs/QUT-research/" >QUT Research Jobs</Link></li>
                   <li className='mb-2 '><Link to="/jobs/QUT-professor/" >QUT Professorial Jobs</Link></li>
                   <li className='mb-2 '><Link to="/jobs/QUT-Executive/" >QUT Executive</Link></li>
                   <li className='mb-2 '><Link to="/jobs/QUT-Administration/" >QUT Administration</Link></li>
                   <li className='mb-2 '><Link to="/jobs/QUT-Human-Resources/" >QUT Human Resources</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/employersss/bond-university/3785/" className='text-[#f1b821] font-bold'>Bond University</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="/jobs/bond-lecturer/" >Bond Lecturing Jobs</Link></li>
                   <li className='mb-2 '><Link to="/jobs/bond-research/" >Bond Research Jobs</Link></li>
                   <li className='mb-2 '><Link to="/jobs/bond-professor/" >Bond Professorial Jobs</Link></li>
                   <li className='mb-2 '><Link to="/jobs/bond-Executive/" >Bond Executive</Link></li>
                   <li className='mb-2 '><Link to="/jobs/bond-Administration/" >Bond Administration</Link></li>
                   <li className='mb-2 '><Link to="/jobs/bond-Human-Resources/" >Bond Human Resources</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/employersss/harvard-university/3100/" className='text-[#A51C30] font-bold'>Harvard University</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="/jobs/harvard-lecturer/" >Harvard Lecturing Jobs</Link></li>
                   <li className='mb-2 '><Link to="/jobs/harvard-research/" >Harvard Research Jobs</Link></li>
                   <li className='mb-2 '><Link to="/jobs/harvard-professor/" >Harvard Professorial Jobs</Link></li>
                   <li className='mb-2 '><Link to="/jobs/harvard-Executive/" >Harvard Executive</Link></li>
                   <li className='mb-2 '><Link to="/jobs/harvard-Administration/" >Harvard Administration</Link></li>
                   <li className='mb-2 '><Link to="/jobs/harvard-Human-Resources/" >Harvard Human Resources</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/employersss/university-of-california-san-diego/3149/" className='text-[#192847] font-bold'>University of California San Diego</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="/jobs/UCSD-lecturer/" >UCSD Lecturing Jobs</Link></li>
                   <li className='mb-2 '><Link to="/jobs/UCSD-research/" >UCSD Research Jobs</Link></li>
                   <li className='mb-2 '><Link to="/jobs/UCSD-professor/" >UCSD Professorial Jobs</Link></li>
                   <li className='mb-2 '><Link to="/jobs/UCSD-Executive/" >UCSD Executive</Link></li>
                   <li className='mb-2 '><Link to="/jobs/UCSD-Administration/" >UCSD Administration</Link></li>
                   <li className='mb-2 '><Link to="/jobs/UCSD-Human-Resources/" >UCSD Human Resources</Link></li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#e39e39] text-[#e39e39] rounded-3xl mt-20 shadow-md hidden"><Link to="/the-university-rankings/" >The University Rankings/ Top Academic Careers</Link></h2>
        <div className="cate-group section23 hidden">
          <div className="widget__text-block">
            <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7 ">
              <div className="column">
                <ul className="">
                  <ul className="pb-4">
                   <li className='mb-2 '><Link to="/employerss/harvard-university/3100/" >	Harvard University</Link></li>
                   <li className='mb-2 '><Link to="/employerss/stanford-university/3101/" >	Stanford University</Link></li>
                   <li className='mb-2 '><Link to="/employerss/university-of-cambridge/12635/" >	University of Cambridge</Link></li>
                   <li className='mb-2 '><Link to="/employerss/massachusetts-institute-of-technology/3103/" >MIT</Link></li>
                   <li className='mb-2 '><Link to="/employerss/university-of-california-berkeley/3105/" >	University of California, Berkeley</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="/employerss/princeton-university/3104/" >	Princeton University</Link></li>
                   <li className='mb-2 '><Link to="/employerss/university-of-oxford/3099/" >	University of Oxford</Link></li>
                   <li className='mb-2 '><Link to="/employerss/columbia-university/3127/" >	Columbia University</Link></li>
                   <li className='mb-2 '><Link to="/employerss/caltech/3128/" >Caltech</Link></li>
                   <li className='mb-2 '><Link to="/employerss/University-of-Chicago/3126/" >	University of Chicago</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="/employerss/yale-university/3125/" >	Yale University</Link></li>
                   <li className='mb-2 '><Link to="/employerss/Cornell-University/3138/" >Cornell University</Link></li>
                   <li className='mb-2 '><Link to="/employerss/university-of-california-los-angeles/3136/" >UCLA</Link></li>
                   <li className='mb-2 '><Link to="/employerss/university-of-pennsylvania/3131/" >UPenn</Link></li>
                   <li className='mb-2 '><Link to="/employerss/johns-hopkins-university/3130/" >Johns Hopkins University (JHU)</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="/employerss/university-college-london/12527/" >University College London (UCL)</Link></li>
                   <li className='mb-2 '><Link to="/employerss/eth-zurich/3132/" >ETH Zurich</Link></li>
                   <li className='mb-2 '><Link to="/employerss/university-of-tokyo/3155/" >The University of Tokyo (UTokyo)</Link></li>
                   <li className='mb-2 '><Link to="/employerss/new-york-university-nyu/3144/" >New York University (NYU)</Link></li>
                   <li className='mb-2 '><Link to="/employerss/duke-university/3139/" >	Duke University (Duke)</Link></li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>

       

        <div className=" flex flex-col  ">
          <Link to="/job-type/" ><h2 className=" py-4 px-7 border-4 text-[#e39e39] rounded-full mt-[7rem] hover:bg-[#e39e39] hover:text-white shadow-md hidden">→ Find Teaching<span className="font-bold"> Job-Types</span> </h2></Link>
        </div>
        <div className="flex flex-col  ">
          <Link to="/industry/"> <h2 className="  py-4 px-7 border-4 text-[#e39e39] rounded-full mt-10 hover:bg-[#e39e39] hover:text-white shadow-md hidden">→ Find Academic Positions in<span className="font-bold"> Industry</span> ( i.e. laboratory technical services )</h2></Link>
        </div>
        <div className="flex flex-col  ">
          <Link to="/faculty/"><h2 className="  py-4 px-7 border-4 text-[#e39e39] rounded-full mt-10 mb-[7rem] hover:bg-[#e39e39] hover:text-white shadow-md hidden">→ Search Jobs by<span className="font-bold"> Faculty, Department, Specialty </span>( i.e. Agriculture: Economics and Agribusiness )</h2></Link>
        </div>



      </div>
    </div>
  )
}
export default Home