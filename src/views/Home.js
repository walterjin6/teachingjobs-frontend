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
            <title>Teaching Jobs Australia - Find School Jobs | Teaching Jobs</title>
            <meta name="description" content="Looking for Teaching Jobs in Australia? Visit our website at Teaching Jobs, to see our range of teaching jobs available near Melbourne, Sydney, Perth and all major cities." />
            <meta name="keywords" content="Teaching Jobs. TeachingJobs, Teacher Jobs, Teacher positions" />
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Teaching Jobs",
                    "url": "/",
                    "description": "Discover Teaching jobs at on the largest teaching job board in Australia."
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Find Teacher Jobs",
                    "url": "/jobs/",
                    "description": "Discover Teaching jobs at on the largest teaching job board in Australia."
                     },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Principal Jobs",
                    "url": "/principle/",
                    "description": "We are seeking an experienced and visionary educational leader to serve as a Principal. The Principal plays a pivotal role in providing effective leadership, fostering a positive learning environment, and ensuring the achievement of educational goals and objectives.",
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Secondary School Jobs",
                    "url": "/secondary/",
                    "description": "As a secondary school teacher, you will have the opportunity to make a difference in the lives of young people. You will also enjoy a rewarding career with flexible work hours, competitive salary and benefits, and ongoing professional development.",
                      },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Primary Jobs",
                    "url": "/primary/",
                    "description": "As a Primary School Teacher, you'll play a vital role in providing quality education, creating a positive classroom environment, and nurturing the academic and social development of our primary-aged learners. If you're dedicated, creative, and committed to making a positive impact on children's lives, we invite you to apply and become a key part of our educational community.",
                         },
                  {
                    "@type": "ListItem",
                    "position": 6,
                    "name": "Early Childhood Jobs",
                    "url": "/early-childhood/",
                    "description": "As an Early Childhood Teacher, you'll be responsible for providing a stimulating and engaging environment that promotes social, emotional, and cognitive development in young learners. If you have a love for teaching, creativity, and a dedication to fostering a lifelong love for learning, we invite you to apply for this rewarding opportunity.",
                      },
                  {
                    "@type": "ListItem",
                    "position": 7,
                    "name": "Administrative Jobs",
                    "url": "/administrative/",
                    "description": "In this role, you will assist with a wide range of administrative tasks, from record-keeping and scheduling to communications and event coordination. If you're dedicated, resourceful, and committed to ensuring the efficiency and effectiveness of an educational organisation, we invite you to apply and become an integral part of our administrative team.",
                 }
                  ,
                  {
                    "@type": "ListItem",
                    "position": 8,
                    "name": "Top School Jobs",
                    "url": "/top-schools/",
                    "description": "Browse through our comprehensive list of universities from around the world and find the best one for you. Whether you want to study in Australia, Canada, UK, USA, or anywhere else, we have the information you need to make an informed decision.", 
                },
                  {
                    "@type": "ListItem",
                    "position": 9,
                    "name": "Career advice",
                    "url": "/career-advice/",
                    "description": "Explore Australia's most in-demand roles with salary, job trends and career pathways. Our blog articles showcase the knowledge and experiences of real teachers.", 
              }
                  ,
                  {
                    "@type": "ListItem",
                    "position": 10,
                    "name": "Post A Job",
                    "url": "/school-pricing/",
                  
              },
                  {
                    "@type": "ListItem",
                    "position": 11,
                    "name": "Jobs in Melbourne",
                    "url": "/melbourne/",
                    "Description": " Are you searching for a teaching job in the melbourne? Visit our website at Teaching Jobs, to see our available employment positions for teaching jobs in melbourne",
              },
                  {
                    "@type": "ListItem",
                    "position": 12,
                    "name": "Jobs in Sydney",
                    "url": "/sydney/",
                    "Description": "Are you searching for a teaching job in the Sydney? Visit our website at Teaching Jobs, to see our available employment positions for teaching jobs in Sydney",
            },
                  {
                    "@type": "ListItem",
                    "position": 13,
                    "name": "Jobs in brisbane",
                    "url": "/brisbane/",
                    "Description": "Are you searching for a teaching job in the brisbane? Visit our website at Teaching Jobs, to see our available employment positions for teaching jobs in brisbane",
               }
              
                ]
              })}
            </script>
          </Helmet>
          <img
            // src="https://academicjobs.s3.amazonaws.com/img/_misc/academic-jobs-logo.png"
            src="TeachingJobs-Logo.png"
            alt="TeachingJobs Logo"
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
               <li className='mb-2 hover:underline'><Link to="/early-childhood/" >	Kindergarten</Link></li>
               <li className='mb-2 hover:underline'><Link to="/primary/" >	Primary </Link></li>
               <li className='mb-2 hover:underline'><Link to="/secondary/" >	Secondary</Link></li>
               
              </ul>
             
           
             <li className='mb-2 hover:underline'><Link to="/administrative/" >Admin</Link></li>
             <li className='mb-2 hover:underline'><Link to="/jobs/online/" >	Online </Link></li>
            
          
            </ul>
          </div>
          <div className=" mt-4 " >
            <ul className="faculty-container flex  gap-4 items-center justify-center text-[#e39e39] ">
           
             <li className='mb-2 hover:underline'><Link to="/jobs/remote/" >	Remote</Link></li>
             <li className='mb-2 hover:underline'><Link to="/jobs/full-time/" >Full-Time</Link></li>
             <li className='mb-2 hover:underline'><Link to="/jobs/part-time/" >	Part-Time</Link></li>
             <li className='mb-2 hover:underline'><Link to="/jobs/casual/" >	Casual</Link></li>
            </ul>
          </div>

          <div className=" mt-4 pb-4" >
            <ul className="faculty-container flex  gap-4 items-center justify-center text-[#e39e39] font-bold ">
           
             <li className='mb-2 hover:underline'><Link to="/nominate/" >	Nominate a Principal for 2023</Link></li>
      
            </ul>
          </div>

          <div className="text-[#e39e39]  flex flex-col items-center justify-center  text-2xl pt-4  animate-bounce h-6" >
            <a >▼</a></div>
        </div>
      </div>
      <div className=" pt-12">
        <div className="blurb text-left pt-12 ">
          <h1 className=" font-bold text-lg md:text-3xl py-4 px-6 bg-[#e39e39] text-white rounded-full mt-[18rem] shadow-xl border-4">Australia's #1 Teaching Job Board Site</h1>
          <div className="newLine mb-4">
            <p className="font-semibold"></p>
            <p className="font-semibold"></p>
          </div>
          <div className="newLine">
            <p className=" px-7 text-[#e39e39] text-2xl font-bold">Find all Australian Teaching Career opportunities here, we make it easy. 

</p><p className=" px-7 text-[#e39e39]  text-xl pt-4">It is time to shine in 2024, with finding your opportunities on TeachingJobs Today!</p>
            <p className=" px-7 text-[#334680]  text-xl pt-4">Kindergarten Jobs | Primary School Jobs | Secondary School Jobs</p>
            <p className=" px-7"></p>
          </div>
        </div>

        <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#e39e39] text-[#e39e39] rounded-3xl mt-20 shadow-md ">Top Academic Jobs Today</h2>
        <div className="cate-group section23 ">
          <div className="widget__text-block">
            <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7 ">
              <div className="column ">
                <ul className="">
                  <li className='mb-1 mt-4 '><Link to="/jobs/teacher---st-stephen-s-catholic-college,-mareeba/65193/" className='text-blue-500 font-bold'>A Teacher - St Stephen's Catholic College, Mareeba</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >St Stephen's Catholic College Mareeba </Link></li>
                   <li className='mb-2 '><Link to="" >Mareeba, QLD</Link></li>
                   <li className='mb-2 '><Link to="" >17 Nov, 2023</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/leader-–-educational-leadership-development---catholic-education-cairns/65061/" className='text-blue-500 font-bold'>Leader – Educational Leadership Development - Catholic Education Cairns</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >Catholic Education Services - Diocese of Cairns</Link></li>
                   <li className='mb-2 '><Link to="" >Cairns, QLD</Link></li>
                   <li className='mb-2 '><Link to="" >26 Nov, 2023</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="jobs/p.e.-teacher---st-augustine-s-college,-cairns/64974/" className='text-blue-500 font-bold'>P.E. Teacher - St Augustine's College, Cairns</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >St Augustine's College - Cairns</Link></li>
                   <li className='mb-2 '><Link to="" >Cairns, QLD</Link></li>
                   <li className='mb-2 '><Link to="" >17 Nov, 2023</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/science-teacher---st-augustine-s-college,-cairns/64973/" className='text-blue-500 font-bold'>Science Teacher - St Augustine's College, Cairns (71101)</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >St Augustine's College - Cairns</Link></li>
                   <li className='mb-2 '><Link to="" >Cairns, QLD</Link></li>
                   <li className='mb-2 '><Link to="" >17 Nov, 2023</Link></li>
                  </ul>
                </ul>
              </div>
            </div>
            <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/primary-teacher/64949/" className='text-blue-500 font-bold'>Primary Teacher</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >Townsville Catholic Education Office</Link></li>
                   <li className='mb-2 '><Link to="" >Townsville, QLD</Link></li>
                   <li className='mb-2 '><Link to="" >20 Nov, 2023</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/secondary-teachers-(multiple-positions)/64940/" className='text-blue-500 font-bold'>Secondary Teachers (Multiple Positions)</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >Townsville Catholic Education Office</Link></li>
                   <li className='mb-2 '><Link to="" >Abergowrie, QLD</Link></li>
                   <li className='mb-2 '><Link to="" >30 Nov, 2023</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/foundation-principal/64922/" className='text-blue-500 font-bold'>Foundation Principal</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >Townsville Catholic Education Office</Link></li>
                   <li className='mb-2 '><Link to="" >Townsville, QLD</Link></li>
                   <li className='mb-2 '><Link to="" >13 Nov, 2023</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/secondary-teacher-(mathematics,-science---biology)/64839/" className='text-blue-500 font-bold'>Secondary Teacher (Mathematics, Science & Biology)</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >Townsville Catholic Education Office</Link></li>
                   <li className='mb-2 '><Link to="" >Charters Towers QLD</Link></li>
                   <li className='mb-2 '><Link to="" >20 Nov, 2023</Link></li>
                  </ul>
                </ul>
              </div>
            </div>
            <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/vet-trainer-and-assessor-–-education-support/64832/" className='text-blue-500 font-bold'>VET Trainer and Assessor – Education Support</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >Townsville Catholic Education Office</Link></li>
                   <li className='mb-2 '><Link to="" >Townsville QLD</Link></li>
                   <li className='mb-2 '><Link to="" >13 Nov, 2023</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="jobs/secondary-english-hsie-teacher/65917/" className='text-blue-500 font-bold'>Secondary English/HSIE Teacher</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >Belmont Christian College</Link></li>
                   <li className='mb-2 '><Link to="" >Belmont North NSW</Link></li>
                   <li className='mb-2 '><Link to="" >30 Nov, 2023</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/primary-teachers/64841/" className='text-blue-500 font-bold'>Primary Teachers</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >Townsville Catholic Education Office</Link></li>
                   <li className='mb-2 '><Link to="" >Mount Isa QLD</Link></li>
                   <li className='mb-2 '><Link to="" >30 Nov, 2023</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/middle-leader-curriculum,-pedagogy,-assessment-and-reporting-year-7---8---mount-st-bernard-college,-herberton/65194/" className='text-blue-500 font-bold'>Middle Leader Curriculum, Pedagogy, Assessment and Reporting Year 7 & 8 - Mount St Bernard College, Herberton</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >Catholic Education Services – Diocese of Cairns</Link></li>
                   <li className='mb-2 '><Link to="" >Herberton,QLD</Link></li>
                   <li className='mb-2 '><Link to="" >12 Nov, 2023</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/primary-teacher---year-2/64848/" className='text-blue-500 font-bold'>Primary Teacher - Year 2</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >Townsville Catholic Education Office</Link></li>
                   <li className='mb-2 '><Link to="" >Mundingburra QLD</Link></li>
                   <li className='mb-2 '><Link to="" >30 Nov, 2023</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/primary-teacher/64911/" className='text-blue-500 font-bold'>Primary Teacher</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >Townsville Catholic Education Office</Link></li>
                   <li className='mb-2 '><Link to="" >Hughenden QLD</Link></li>
                   <li className='mb-2 '><Link to="" >30 Nov, 2023</Link></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/primary-teacher/64837/" className='text-blue-500 font-bold'>Primary Teacher</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >Townsville Catholic Education Office</Link></li>
                   <li className='mb-2 '><Link to="" >Currajong QLD</Link></li>
                   <li className='mb-2 '><Link to="" >30 Nov, 2023</Link></li>
                  </ul>
                  </ul>
                  </div>  
                   <div className="column">
                   <ul className="">
                  <li className='mb-1 mt-4'><Link to="/jobs/primary-and-secondary-casual-teachers/63852/" className='text-blue-500 font-bold'>Primary and Secondary Casual Teachers</Link></li>
                  <ul className="innerUL">
                   <li className='mb-2 '><Link to="" >Belmont Christian College</Link></li>
                   <li className='mb-2 '><Link to="" >Belmont North NSW</Link></li>
                   <li className='mb-2 '><Link to="" >22 Nov, 2023</Link></li>
                  </ul>
                </ul>
              </div>
            </div>
            
          </div>
        </div>

        <div class="bg-white flex flex-col  ">
          <h2 class="text-1xl font-bold py-1 px-7 border-2 border-[#f4a10c] text-[#f4a10c] rounded-3xl shadow-md  mt-20 ">Choose Job Types</h2>
          <ul class=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 pl-8 h-auto w-full text-transform: capitalize"><li class="pb-2 flex  "><a href="/graduate-teacher/">graduate teacher</a></li><li class="pb-2 flex  "><a href="/library-services/">library services</a></li><li class="pb-2 flex  "><a href="/information-management/">information management</a></li><li class="pb-2 flex  "><a href="/schools-management/">schools management</a></li><li class="pb-2 flex  "><a href="/vocational-management/">vocational management</a></li><li class="pb-2 flex  "><a href="/principal/">principal</a></li><li class="pb-2 flex  "><a href="/student-services/">student services</a></li><li class="pb-2 flex  "><a href="/early-childhood/">early childhood</a></li><li class="pb-2 flex  "><a href="/primary/">primary</a></li><li class="pb-2 flex  "><a href="/secondary/">secondary</a></li><li class="pb-2 flex  "><a href="/tertiary/">tertiary</a></li><li class="pb-2 flex  "><a href="/vocational/">vocational</a></li><li class="pb-2 flex  "><a href="/special-needs-aides/">special needs aides</a></li><li class="pb-2 flex  "><a href="/tutoring/">tutoring</a></li><li class="pb-2 flex  "><a href="/training-assessment/">training assessment</a></li><li class="pb-2 flex  "><a href="/relief-teaching/">relief teaching</a></li><li class="pb-2 flex  "><a href="/administrative/">administrative</a></li></ul><div class="newLine"></div></div>



          <div class="bg-white flex flex-col  "><h2 class="text-1xl font-bold py-1 px-7 border-2 border-[#f4a10c] text-[#f4a10c] rounded-3xl shadow-md  mt-20 ">Choose Teaching Jobs by City</h2><ul class=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 pl-8 h-auto w-full text-transform: capitalize"><li class="pb-2 flex  "><a href="/melbourne/">melbourne</a></li><li class="pb-2 flex  "><a href="/sydney/">sydney</a></li><li class="pb-2 flex md:break "><a href="/brisbane/">brisbane</a></li><li class="pb-2 flex md:break "><a href="/gold-coast/">gold coast</a></li><li class="pb-2 flex  "><a href="/canberra/">canberra</a></li><li class="pb-2 flex md:break "><a href="/perth/">perth</a></li><li class="pb-2 flex md:break "><a href="/darwin/">darwin</a></li></ul><div class="newLine"></div></div>

         
          <div class="bg-white flex flex-col  "><h2 class="text-1xl font-bold py-1 px-7 border-2 border-[#f4a10c] text-[#f4a10c] rounded-3xl shadow-md  mt-20 ">Choose Teaching Jobs by State</h2><ul class=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 pl-8 h-auto w-full text-transform: capitalize"><li class="pb-2 flex  "><a href="/victoria/">victoria</a></li><li class="pb-2 flex  "><a href="/NSW/">NSW</a></li><li class="pb-2 flex md:break "><a href="/queensland/">queensland</a></li><li class="pb-2 flex  "><a href="/south-australia/">south australia</a></li><li class="pb-2 flex md:break "><a href="/western-australia/">western australia</a></li><li class="pb-2 flex  "><a href="/northern-territory/">northern territory</a></li><li class="pb-2 flex md:break "><a href="/tasmania/">tasmania</a></li></ul><div class="newLine"></div></div>
        

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