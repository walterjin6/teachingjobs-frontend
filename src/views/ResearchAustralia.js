import React, { useState, useEffect, useRef } from 'react'

import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import SearchResults from './SearchResults';
import research from "../utils/research.json";
import { Link } from 'react-router-dom'

const Research2 = () => {  window.location.replace("https://www.academicjobs.com/australia/research");
  const handleFormSubmit = (event) => {

    event.preventDefault();
    const a = {}
    if (keyWordRef.current.value.trim()) a.q = keyWordRef.current.value.trim()
    if (locationRef.current.value.trim()) a.l = locationRef.current.value.trim()
    navigate("/jobs/", { state: { q: keyWordRef.current.value.trim(), l: locationRef.current.value.trim() } });
  }

  const [page, setPage] = useState(0);
  const navigate = useNavigate()
  const keyWordRef = useRef('')
  const locationRef = useRef('')

  return (



    <div className="">
      <Helmet>
        <title>Research Academic Jobs Australia</title>
        <meta name="description" content="Do you enjoy learning new things and finding solutions to practical issues? If yes, you may consider applying to one of the best institutions for a researcher post onResearch Academic Jobs Australia." />
        <meta name="keywords" content="Academic Jobs Australia Research. Researcher positions" />
      </Helmet>
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#00aeef] text-white rounded-full shadow-xl ">Academic Jobs Australia Research  </h1>

        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <div className="py-4 px-7 rounded-2xl ">

            <p>Often working as a member of a bigger team or project, academic researchers do novel and creative study in their chosen subjects. Along with having the necessary training and expertise in data analysis, technique, and communication, Research Academic Jobs Australia requires a PhD or a similar degree. According on their role and contract type, Research Academic Jobs Australia involves outreach, supervision, and teaching. </p> </div>
          <div className="newLine mb-2"></div>
          <Link className='text-[#00aeef] mb-4 px-7' to='/research/faq/'>View Research Jobs FAQ</Link>


          <div className="bg-white flex flex-col  ">
            <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#00aeef] text-[#00aeef] rounded-3xl shadow-md  mt-20 ">Choose Higher Ed Research Jobs in Australia</h2>
            <ul className=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize">
              {research.map(({ Title, Name, break1, isBold }, key) => (
                <li className={`pb-2 flex ${break1 ? ' md:break' : ''} ${isBold ? 'pt-4 font-bold text-[#00aeef]' : ''}`} key={key}>
                  <Link to={`/research/${Name?.replace(/\s+/g, '-')}/`}>{Name}</Link>
                </li>
              ))}
            </ul>
            <div className="newLine"></div>
          </div>
        </div>





      </div>


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="max-w-screen-xl mx-auto">
          <form className="flex flex-col  gap-2 md:flex-row md:gap-2 mx-18 w-full " onSubmit={handleFormSubmit}>
            <input
              type="text"
              className="text-center md:w-[41%] md:text-left px-4 py-2 border border-[#00aeef] text-gray-500 rounded-md focus:ring-orange-500 focus:border-orange-500"
              placeholder="Keyword"
              ref={keyWordRef}
            //defaultValue={name}
            />
            <input
              type="text"
              className="text-center md:w-[41%] md:text-left px-4 py-2 border border-[#00aeef] text-gray-500 rounded-md focus:ring-orange-500 focus:border-orange-500"
              placeholder="Location"
              ref={locationRef}
            />
            <button
              className="bg-[#00aeef] hover:bg-orange-600 text-white py-2 px-6 rounded-md focus:ring-2 focus:ring-orange-300"
              type="submit"
            >
              Find Jobs
            </button>
          </form>
        </div>
      </div>



      <SearchResults q={{ q: "research", l: "Australia" || 0 }} />
    </div>

  );
};

export default Research2;