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
  if (location == 'Blogs') {
    content = (
      <div className="text-white flex items-center mb-4 bg-orange-800 w-full h-20  border border-gray-300 p-4 mb-4 rounded-xl shadow-lg">
{title}
      </div>

      )
  }else{
  content = (
    <article className="media bg-white border border-gray-300 p-4 mb-4 rounded-xl shadow-lg" data-id="59972"
      onClick={() => {
        window.history.pushState({}, "New Page Title", `/jobs/${title?.replace(/[&' \/]/g, '-').toLowerCase()}/${id}/`);
        dispatch(setJob(job))
      }}
    >
      <div className="flex items-center mb-4">
        <div className="w-20 h-20 mr-4">
          {/* <Link to={`/employers/${company_name}/${employer_id}/`}> */}
          <img src={logo} alt={company_name} className="w-full h-full object-contain rounded-lg" />
          {/* </Link> */}

        </div>
        <div className="flex-1">
          <span className="block text-blue-500 text-lg font-bold leading-tight hover:underline  cursor-pointer">{title}</span>
          <div className="hidden-xs mt-2">
            {featured ? <span className="inline-block bg-[#f4a10c] text-white px-2 py-1 text-xs font-bold rounded-full mr-2">Featured</span> : ''}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          <div className="mb-1">{company_name}</div>
          <div className="text-gray-700">{location}</div>
        </div>
        <div className="text-gray-700 text-sm">  {expiration_date && (
          `Exp. ${new Date(expiration_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`
        )}</div>



      </div>
    </article>
  )
}
  return <div className='overflow-y w-full'>{content}</div>
}
export default Job
