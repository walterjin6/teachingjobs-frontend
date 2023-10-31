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
  if (job) {
    //const {  website, custom_fields,  } = employer
    const { employer_id, id, company_name, logo, title, location, activation_date, expiration_date, description, how_to_apply, featured } = job
    // console.log(logo)  onClick={() => { navigate(`/jobs/${title?.replace(/[&' \/]/g, '-').toLowerCase()}/${id}/`) }}
    content = (
      <div className='bg-white'>
        <div className="flex items-center p-4">
          <div className="w-1/4 pr-4">
            <Link to={`/employers/${company_name ?.replace(/[&' \/]/g, '-').toLowerCase()}/${employer_id}/`}>
              <img className="w-full rounded-xl" src={logo || ''} alt={company_name} />
            </Link>
          </div>
          <div className="w-3/4">
            <h1 className="text-2xl font-bold mb-2">
              {title}
            </h1>
            <div className="mb-4">
              <Link className="text-blue-500" to={`/employers/${company_name}/${employer_id}/`}>{location}</Link>
            </div>
            <div className="flex justify-between items-center">
              <button target="_blank" className="px-4 py-2 bg-[#f4a10c] text-white font-bold rounded-full" data-toggle="modal" data-target="#apply-modal" rel=""
                onClick={() => {
                  let subject = `Application for ${title} position at  ${company_name} from AcademicJobs.com`;
                  if (how_to_apply.includes('@')) {
                    window.location.href = `mailto:${how_to_apply}?subject=${encodeURIComponent(subject)}`;
                  } else {
                    window.location.href = how_to_apply;
                  }
                }}
              >
                Apply Now
              </button>
              <div className="">
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
        <div className='flex flex-wrap gap-6 bg-white border border-gray-300 p-4 mb-4 rounded-lg shadow-lg" '>
          <span>{location}</span>
          <span>
            {expiration_date && (
              `Exp. ${new Date(expiration_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`
            )}
          </span>
          {featured ? <span className="inline-block bg-[#f4a10c] text-white px-2 py-1 text-xs font-bold rounded-full mr-2">Featured</span> : ''}
          <button
            className='btn btn-xs px-1 py-0'
            onClick={() => { navigate(`/jobs/${title?.replace(/[&' \/]/g, '-').toLowerCase()}/${id}/`) }}
          >Detail</button>
        </div>
        <article className="wrapper media bg-white border border-gray-300 p-4 mb-4 rounded-lg shadow-lg" data-id="59972"
        >
          {/* <div className='wrapper'> */}
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </article>
        {/* <ReactQuill value={description} modules={quillModules} /> */}
      </div >
    )
  }
  return <div className='overflow-y w-full'>{content}</div>
}
export default JobDetail
