import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import JobDetail from './JobDetail'
import SingleQA from './SingleQA'
import category from "../utils/category.json";
import position from "../utils/position.json";
import hr from "../utils/hr.json";
import research from "../utils/research.json";
import lecturer from "../utils/lecturer.json";
import industry from "../utils/industry.json";
import cities from "../utils/cities.json";
import executive from "../utils/executive.json";
import student from "../utils/student.json";
import admin from "../utils/admin.json";
import professor from "../utils/professor.json";
import asiapositions from "../utils/asiapositions.json";
import africapositions from "../utils/africapositions.json";
import canadapositions from "../utils/canadapositions.json";
import europepositions from "../utils/europepositions.json";
import indiapositions from "../utils/indiapositions.json";
import middleeastpositions from "../utils/middleeastpositions.json";
import newzealandpositions from "../utils/newzealandpositions.json";
import southamericapositions from "../utils/southamericapositions.json";
import ukpositions from "../utils/ukpositions.json";

import { Helmet } from "react-helmet";
const SiteMap = () => {
  const navigate = useNavigate()
  return (



    <div className='w-full h-full text-2xl pd-1 space-y-6'>

      <Helmet>
        <title>AcademicJobs Sitemap</title>
        <meta name="description" content="Browse through our comprehensive list of universities from around the world and find the best one for you. Whether you want to study in Australia, Canada, UK, USA, or anywhere else, we have the information you need to make an informed decision." />
        <meta name="keywords" content="Find Universities. Find Employers, Find institutions" />
      </Helmet>


      <div className="blurb text-left py-8 text-xl">
        <h1 className="bg-[#f4a10c] text-white rounded-3xl font-bold mb-2 text-lg md:text-2xl px-7">TeachingJobs Sitemap</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <p className="px-7">
            The sitemap of Teachings Job provides an overview of the pages and links on the website. Whether you are a job seeker or an employer, you can find everything.</p>
          <p className=""></p>
        </div>
      </div>

      <div className=" mt-4 pb-8" >
            <ul className="faculty-container flex  gap-4 items-center justify-center text-[#e39e39] ">
             <li className='mb-2 hover:underline'><Link to="/jobs/online/" >	Online </Link></li>
             <li className='mb-2 hover:underline'><Link to="/jobs/remote/" >	Remote</Link></li>
             <li className='mb-2 hover:underline'><Link to="/jobs/full-time/" >Full-Time</Link></li>
             <li className='mb-2 hover:underline'><Link to="/jobs/part-time/" >	Part-Time</Link></li>
             <li className='mb-2 hover:underline'><Link to="/jobs/casual/" >	Casual</Link></li>
            </ul>
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
            <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#f4a10c] text-[#f4a10c] rounded-3xl shadow-md  mt-20 ">Choose Teaching Jobs by City</h2>
            <ul className=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 pl-8 h-auto w-full text-transform: capitalize">
              {cities.map(({ Title, Name, break1, isBold }, key) => (
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
        </div>
    
    </div>
  )
}
export default SiteMap