import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setJob, setId, setEmployer } from '../store/postsSlice'
import { Link } from 'react-router-dom'
const Job = ({ job }) => {
  //console.log(job)
  const dispatch = useDispatch()
  const myId = useSelector((state) => state.posts.job.employer_id)
  let content
  //console.log(job)
  //let logo = '', company_name = ''
  const { employer_id, title, location, activation_date, expiration_date, how_to_apply, logo, company_name, featured, id } = job
  if (location == 'Career_Hub') {
    content = (
      <article className="media bg-white border-2 border-[#f4a10c] p-4 mb-4 rounded-xl shadow-lg" data-id="59972"
        onClick={() => {
          window.history.pushState({}, "New Page Title", `/academic-hub/${title?.replace(/[&' \/]/g, '-').toLowerCase()}/${id}/`);
          dispatch(setJob(job))
        }}
      >
        <div className="flex items-center mb-4">
          <div className="w-20 h-20 mr-4 hidden">
            {/* <Link to={`/employers/${company_name}/${employer_id}/`}> */}
            <img src={`https://postmyjob.online/${logo}` || "/favicon.png"} alt={company_name} className="w-full h-full object-contain rounded-lg" />
            {/* </Link> */}
          </div>
          <div className="flex-1">
            <span className="block text-[#f4a10c] text-xl font-light leading-tight hover:underline  cursor-pointer">{title}</span>
            <div className="hidden mt-2">
              {featured ? <span className="inline-block bg-blue-300 text-white px-2 py-1 text-xs font-bold rounded-full mr-2">Career Advice</span> : ''}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            <div className="inline-block bg-blue-400 text-white px-2 py-1 text-xs font-bold rounded-full mr-2 mb-1">Academic Hub</div>
            <div className="text-gray-700"> {featured ? <span className="inline-block bg-[#f4a10c] text-white px-2 py-1 text-xs font-bold rounded-full mr-2">Career Advice</span> : ''}</div>
          </div>
          <div className="text-gray-400 font-light">  {activation_date && (
            ` ${new Date(activation_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`
          )}</div>
        </div>
      </article>
    )
  } else {
    content = (
      <article className="media bg-white border border-gray-300 p-4 mb-4 rounded-xl shadow-lg" data-id="59972"
      ///onClick={() => {
      /// window.history.pushState({}, "New Page Title", `/jobs/${title?.replace(/[&' \/]/g, '-').toLowerCase()}/${id}/`);
      /// dispatch(setJob(job))
      /// }}
      >
        <div className="flex items-center pb-2">
          <div className="w-20 h-20 mr-4">
            {/* <Link to={`/employers/${company_name}/${employer_id}/`}> */}
            <img src={logo || "/favicon.png"} alt={company_name} className="w-full h-full object-contain rounded-lg" />
            {/* </Link> */}
          </div>
          <div className="flex-1">
            <span className="block text-blue-500 text-xl font-bold leading-tight hover:underline  cursor-pointer">{title}</span>
            <div className="hidden-xs mt-2">
              {featured ? <span className="inline-block bg-[#f4a10c] text-white px-2 py-1 text-xs font-bold rounded-full mr-2">Featured</span> : ''}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            <div className="mb-1">{company_name}</div>
            <div className="text-gray-700 font-light">{location}</div>
          </div>
          <div className="text-gray-700 text-sm font-light pt-7">  {expiration_date && (
            `Exp. ${new Date(expiration_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`
          )}</div>
          {((new Date(expiration_date) < new Date()) && expiration_date) && (
            <div className="bg-opacity-50 bg-red-500 text-white  text-sm px-1 py-1 rounded-full absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rotate-[35deg] skew-y-0">
              Job Fulfilled By AcademicJobs.com
            </div>
          )}
        </div>
      </article>
    )
  }
  return <div className='overflow-y w-full relative'>{content}</div>
}
export default Job
