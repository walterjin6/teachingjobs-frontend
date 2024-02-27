import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal'
import ShareJob from './ShareJob'
import { BsFillShareFill } from 'react-icons/bs';
const JobDetail = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)
  let content = <div className=''>Job Description is comming soon .... </div >
  const job = useSelector((state) => state.posts.job)
  console.log(job)
  const { employer_id, id, company_name, logo, title, location, activation_date, expiration_date, description, how_to_apply, featured } = job
  if (job) {
    if (location == 'Career_Hub') {
      content = (
        <div className='bg-white'>
          <div className="flex items-center p-4">
            <div className="w-1/4 pr-4 hidden">
              <Link to={`/employers/${company_name?.replace(/[&' \/]/g, '-').toLowerCase()}/${employer_id}/`}>
                <img className="w-full rounded-xl" src={logo || "/favicon.png"} alt={company_name} />
              </Link>
            </div>
            <div className="w-3/4">
              <h2 className="text-2xl font-bold mb-2 ">
                {title}
              </h2>
              <div className="mb-4">
                <Link to="/academic-hub/" className="inline-block bg-blue-400 text-white px-2 py-1 text-xs font-bold rounded-full mr-2 mb-1">Academic Hub</Link>
              </div>
              <div className="flex justify-between items-center">
                <button target="_blank" className="px-4 py-2 bg-[#f4a10c] text-white font-bold rounded-full hidden" data-toggle="modal" data-target="#apply-modal" rel=""
                  onClick={() => {
                    let subject = `Application for ${title} position at  ${company_name} from AcademicJobs.com`;
                    if (how_to_apply.includes('@')) {
                      window.location.href = `mailto:${how_to_apply}?subject=${encodeURIComponent(subject)}`;
                    } else {
                      //alert()
                      window.open(how_to_apply, '_blank');
                    }
                  }}
                >
                  Apply Now
                </button>
                <div className="ml-8">
                  <div
                    onClick={() => {
                      setIsOpen(true)
                    }}
                  >
                    <BsFillShareFill />
                  </div>
                  <Modal
                    open={isOpen}
                    onClose={() => {
                      setIsOpen(false)
                    }}
                  >
                    {/* <button onClick={() => {
                    setIsOpen(false)
                  }}>Close</button> */}
                    <ShareJob />
                  </Modal>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap gap-6 bg-white border-2 border-[#f4a10c] p-4 mb-4 rounded-lg shadow-lg" '>
            <span>
              {activation_date && (
                ` ${new Date(activation_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`
              )}
            </span>
            {featured ? <span className="inline-block bg-[#f4a10c] text-white px-2 py-1 text-xs font-bold rounded-full mr-2">Career Advice</span> : ''}
            <button
              className='btn btn-xs px-1 py-0'
              onClick={() => { navigate(`/jobs/${title?.replace(/[&' \/]/g, '-').toLowerCase()}/${id}/`) }}
            >More Detail</button>
          </div>
          <article className="wrapper media bg-white border-2 border-[#f4a10c] p-4 mb-4 rounded-lg shadow-lg" data-id="59972"
          >
            {/* <div className='wrapper'> */}
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </article>
          {/* <ReactQuill value={description} modules={quillModules} /> */}
        </div >
      )
    } else {
      //const {  website, custom_fields,  } = employer
      // console.log(logo)  onClick={() => { navigate(`/jobs/${title?.replace(/[&' \/]/g, '-').toLowerCase()}/${id}/`) }}
      content = (
        <div className='bg-white'>
          <div className="flex items-center p-4">
            <div className="w-1/4 pr-4">
              <Link to={`/employers/${company_name?.replace(/[&' \/]/g, '-').toLowerCase()}/${employer_id}/`}>
                <img className="w-full rounded-xl" src={logo || "/favicon.png"} alt={company_name} />
              </Link>
            </div>
            <div className="w-3/4">
              <h2 className="text-2xl font-bold mb-2 text-blue-500">
                {title}
              </h2>
              <div className="mb-4 text-blue-500">
                <Link to={`/employers/${company_name?.replace(/[&' \/]/g, '-').toLowerCase()}/${employer_id}/`}><a>{company_name}</a></Link>
              </div>
              <div className="flex justify-between items-center">
                <button target="_blank" className="px-4 py-2 bg-[#f4a10c] text-white font-bold rounded-full" data-toggle="modal" data-target="#apply-modal" rel=""
                  onClick={() => {
                    let subject = `Application for ${title} position at  ${company_name} from AcademicJobs.com`;
                    if (how_to_apply.includes('@')) {
                      window.location.href = `mailto:${how_to_apply}?subject=${encodeURIComponent(subject)}`;
                    } else {
                      window.open(how_to_apply, '_blank');
                      //window.location.href = how_to_apply;
                    }
                  }}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap gap-6 bg-white border border-gray-300 p-4 mb-4 rounded-lg shadow-lg '>
            <span className="font-bold">{location}</span>
            <span>
              {expiration_date && (
                `Exp. ${new Date(expiration_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`
              )}
            </span>
            {featured ? <span className="inline-block bg-[#f4a10c] text-white px-2 py-1 text-xs font-bold rounded-full mr-2">Featured</span> : ''}
            <button
              className='btn btn-xs px-1 py-0'
              onClick={() => { navigate(`/jobs/${title?.replace(/[&' \/]/g, '-').toLowerCase()}/${id}/`) }}
            >More Detail</button>
            <div className="pt-1">
              <div
                onClick={() => {
                  setIsOpen(true)
                }}
              >
                <BsFillShareFill />
              </div>
              <Modal
                open={isOpen}
                onClose={() => {
                  setIsOpen(false)
                }}
              >
                {/* <button onClick={() => {
                    setIsOpen(false)
                  }}>Close</button> */}
                <ShareJob />
              </Modal>
            </div>
          </div>
          <article className="wrapper media bg-white border border-gray-300 p-4 mb-4 rounded-lg shadow-lg" data-id="59972"
          >
            {/* <div className='wrapper'> */}
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </article>
          {/* <ReactQuill value={description} modules={quillModules} /> */}
          {((new Date(expiration_date) < new Date()) && expiration_date) && (
            <div className="bg-opacity-50 bg-red-500 text-white text-xl px-3 py-3 rounded-full absolute top-[10%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rotate-45 skew-y-0">
              Job Fulfilled By AcademicJobs.com
            </div>
          )}
        </div >
      )
    }
  }
  return <div className='overflow-y w-full  relative'>{content}</div>
}
export default JobDetail
