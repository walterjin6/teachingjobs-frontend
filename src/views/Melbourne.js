import React, { useState, useEffect, useRef } from 'react'

import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import SearchResults from './SearchResults';

import { Link } from 'react-router-dom'

const Melbourne = () => {
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
        <title>melbourne</title>
        <meta name="description" content="Are you searching for a teaching job in the melbourne? Visit our website at Teaching Jobs, to see our available employment positions for teaching jobs in melbourne" />
        <meta name="keywords" content="teaching Jobs Melbourne, teaching positions Melbourne" />
      </Helmet>
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#f4a10c] text-white rounded-full shadow-xl ">Melbourne | Apply Online - Job Vacancies</h1>

        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <div className="py-4 px-7 rounded-2xl ">

            <p >to teach in Victoria, you must be registered with the Victorian Institute of Teaching (VIT), an independent statutory authority separate from any educational authority. The VIT registers teachers for all Victorian schools and colleges. Mutual recognition may apply for teachers who are currently registered in other states or territories.We hope this information helps you in your search for teaching opportunities in Melbourne. Good luck!  </p>
          </div>
          <div className="newLine mb-2"></div>
   




         





      </div>


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="max-w-screen-xl mx-auto">
          <form className="flex flex-col  gap-2 md:flex-row md:gap-2 mx-18 w-full " onSubmit={handleFormSubmit}>
            <input
              type="text"
              className="text-center md:w-[41%] md:text-left px-4 py-2 border border-[#f4a10c] text-gray-500 rounded-md focus:ring-orange-500 focus:border-orange-500"
              placeholder="Keyword"
              ref={keyWordRef}
            //defaultValue={name}
            />
            <input
              type="text"
              className="text-center md:w-[41%] md:text-left px-4 py-2 border border-[#f4a10c] text-gray-500 rounded-md focus:ring-orange-500 focus:border-orange-500"
              placeholder="Location"
              ref={locationRef}
            />
            <button
              className="bg-[#f4a10c] hover:bg-orange-600 text-white py-2 px-6 rounded-md focus:ring-2 focus:ring-orange-300"
              type="submit"
            >
              Find Jobs
            </button>
          </form>
        </div>
      </div>



      <SearchResults q={{ q: "", l:"melbourne"  }} />
    </div> </div>

  );
};

export default Melbourne;