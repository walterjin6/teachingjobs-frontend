import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'

import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";


const UK = () => {
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(setRegion('UK'))
  }, []);
  return (
    <div>
      <Helmet>
        <title>Academic Jobs UK</title>
        <meta name="description" content="Find your ideal academic jobs in UK and join the vibrant academic community at UK university jobs. We have the perfect opportunity for you whatever the job." />
        <meta name="keywords" content="Academic Jobs UK. academicjobs, academia jobs" />
      </Helmet>
      <div className="pt-[8rem] flex flex-col items-center justify-center" > 
      <img
           src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-uk-min.png"
          
            alt="AcademicJobs UK Logo"
            className=" w-[20rem] mb-[1rem] "
          /></div> 
      <SearchBox />

      <div className=" mt-[10rem] " > 
      <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-[#f4a10c] ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
                  <li><Link to="/UK/lecturer/" >	Lecturer</Link></li>
                  <li><Link to="https://www.academicjobs.com/UK/research/" >	Research </Link></li>
                  <li><Link to="https://www.academicjobs.com/UK/professor/" >	Professor</Link></li>
                  </ul>
                  <li><Link to="https://www.academicjobs.com/UK/executive/" >	Executive</Link></li>
                  <li><Link to="https://www.academicjobs.com/UK/admin/" >Admin</Link></li>
                  <li><Link to="https://www.academicjobs.com/UK/hr/" >	HR</Link></li>
                  <li><Link to="https://www.academicjobs.com/UK/student/" >	Student</Link></li>
              
                </ul>
                </div>


                <div className=" mt-4 " > 
                <ul className="faculty-container flex  gap-4 items-center justify-center text-[#f4a10c] ">
                 
                  <li><Link to="https://www.academicjobs.com/online/" >	Online </Link></li>
                  <li><Link to="https://www.academicjobs.com/jobs/remote/" >	Remote</Link></li>
                
                  <li><Link to="https://www.academicjobs.com/jobs/full-time/" >Full-Time</Link></li>
                  <li><Link to="https://www.academicjobs.com/jobs/part-time/" >	Part-Time</Link></li>
                  <li><Link to="/jobs/casual/" >	Casual</Link></li>
                </ul>
                </div>
                
      <div className="text-[#f4a10c]  flex flex-col items-center justify-center  text-2xl pt-8  animate-bounce h-6" > 
      <a>▼</a></div> 
      <div className="blurb text-left py-8 pt-[10rem] ">
        <h1 className="py-3 px-7 bg-[#f4a10c] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl  shadow-xl">Academic Jobs UK</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <p className="px-7 pb-8">To start your UK academic jobs search, you can browse through our listings of university jobs, research jobs, science jobs and managerial jobs in leading universities and top global employerss. You can also find PhDs, studentships, scholarships and fellowships to support your academic career. You can search by keywords, disciplines, locations, salary bands, contract types and more.
          Find your ideal academia jobs and join the vibrant academic community of university jobs uk. We have the perfect opportunity for you whatever the jobs in academia you are seeking.</p>
          <p className="font-semibold"></p>
        </div>
      </div>
      <div id="myUniversity" class="myUniversity">
        <div class="widget__text-block1">
          <div>
          <h2 className="text-1xl font-bold py-3 px-7 border-[#f4a10c] border-2  text-[#f4a10c] rounded-3xl shadow-md ">Academic Jobs UK: Jobs in Academia by University </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
          <ul>
            <li className='mb-1 '><Link to="/jobs/england/" className='text-[#f4a10c] font-bold'>England</Link></li>
            <li><Link to="/employers/university-of-cambridge/12635/">University of
              Cambridge</Link></li>
            <li><Link to="/employers/university-of-oxford/3099/">University of
              Oxford</Link>
            </li>
            <li><Link to="/employers/university-college-london/12527/">University
              College London</Link>
            </li>
            <li><Link to="/employers/imperial-college-london/3129/">Imperial
              College London</Link></li>
            <li><Link to="/employers/london-school-of-economics-and-political-science/3153/">London School
              of Economics and Political Science</Link>
            </li>
            <li><Link to="/employers/university-of-manchester/3833/">University of
              Manchester</Link></li>
            <li><Link to="/employers/university-of-birmingham/12614/">University of
              Birmingham</Link></li>
            <li><Link to="/employers/university-of-leeds/12797/">University of
              Leeds</Link>
            </li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/jobs/scotland/" className='text-[#f4a10c] font-bold'>Scotland</Link></li>
            <li><Link to="/employers/university-of-edinburgh/12681/">University of
              Edinburgh</Link></li>
            <li><Link to="/employers/university-of-glasgow/12713/">University of
              Glasgow</Link>
            </li>
            <li><Link to="/employers/university-of-aberdeen/12555/">University of
              Aberdeen</Link></li>
            <li><Link to="/employers/university-of-st-andrews/13005/">University of
              St Andrews</Link></li>
            <li><Link to="/employers/university-of-dundee/12669/">University of
              Dundee</Link>
            </li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/jobs/wales/" className='text-[#f4a10c] font-bold'>Wales</Link></li>
            <li><Link to="/employers/cardiff-university/6252/">Cardiff
              University</Link>
            </li>
            <li><Link to="/employers/swansea-university/10538/">Swansea
              University</Link>
            </li>
            <li><Link to="/employers/aberystwyth-university/13115/">Aberystwyth
              University</Link></li>
            <li><Link to="/employers/bangor-university/13116/">Bangor
              University</Link>
            </li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/jobs/northern-ireland/" className='text-[#f4a10c] font-bold'>Northern Ireland</Link></li>
            <li><Link to="/employers/queens-university-belfast/10799/">Queen's
              University Belfast</Link>
            </li>
            <li><Link to="/employers/ulster-university/13098/">Ulster
              University</Link>
            </li>
          </ul>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}
export default UK