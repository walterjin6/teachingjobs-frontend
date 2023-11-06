import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import JobDetail from './JobDetail'
import SingleQA from './SingleQA'
import { Helmet } from "react-helmet";
const Findemployerss = () => {
  const navigate = useNavigate()
  return (



    <div className='w-full h-full'>

      <Helmet>
        <title>Top School Employers</title>
        <meta name="description" content="Browse through our comprehensive list of universities from around the world and find the best one for you. Whether you want to study in Australia, Canada, UK, USA, or anywhere else, we have the information you need to make an informed decision." />
        <meta name="keywords" content="Top School Employers. Top Australian Schools" />
      </Helmet>


      <div className="blurb text-left py-8">
        <h1 className="text-3xl font-bold py-4 px-7 bg-[#e39e39] text-white rounded-full shadow-xl">Top School Employers</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <p className="px-7 pb-8">You can find our profiles of school employers across Australia, from public to private, from urban to rural, and from kindergarten to high school. You can see their photos, videos, and stories, and get a glimpse of their vision, culture, and achievements. You can also compare their benefits, opportunities, and expectations, and find out what they are looking for in their teachers. The find employers page is a great way to discover new possibilities and find your perfect match. </p>
          <p className=""> </p>
        </div>
      </div>

      <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#e39e39] text-[#e39e39] rounded-3xl mt-4 shadow-md">Top Teaching Jobs at Schools</h2>
        <div className="cate-group section23 ">
          <div className="widget__text-block">
            <div className="faculty-container grid-cols-2 grid md:grid-cols-4 gap-8 py-2 px-7">
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/USA/" className='text-[#e39e39] font-bold'>NSW</Link></li>
                  <ul className="innerUL">
                    
                    <li><Link to="/employers/sceggs-darlinghurst/15840/" >SCEGGS Darlinghurst</Link></li>
                    <li><Link to="/employers/ascham-School/11527/" >Ascham  School</Link></li>
                    <li><Link to="/employers/al-noori-muslim-school/15858/" >AL Noori Muslim school</Link></li>
                    <li><Link to="/employers/sydney-grammar-school/11556/" >Sydney Grammar school</Link></li>
                    <li><Link to="/employers/presbyterian-ladies-college-sydney/15839/" >Presbyterian Ladies College Sydney</Link></li>
                    <li><Link to="/employers/meriden-school/15835/" >Meriden school</Link></li>
                    <li><Link to="/employers/brisbane-girls-grammar-school/15844/" >Brisbane girls grammar-school</Link></li>
                    <li><Link to="/employers/redeemer-baptist-school/15838/" >Redeemer Baptist school</Link></li>
                    <li><Link to="employers/red-bend-catholic-college/1040/" >Red Bend Catholic college</Link></li>
                    <li><Link to="/employers/brisbane-grammar-school/15837" >Brisbane Grammar school</Link></li>
                    <li><Link to="/employers/queenwood/15859" >Queenwood</Link></li>

                    
                   
                 
                   
                    
                    
                    
                    
                    
                    
                   
                    
                   
                    
                    
                    
                   
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/Australia/" className='text-[#e39e39] font-bold'>Victoria</Link></li>
                  <ul className="innerUL">
                  <li><Link to="/employers/victoria-state-government-education-and-training/19/" >Victoria State Government Education and Training</Link></li>
                  <li><Link to="/employers/presbyterian-ladies-college/15842/" >Presbyterian Ladies College</Link></li>
                  <li><Link to="/employers/st-aloysius-college/15841/" >St Aloysius College</Link></li>
                  <li><Link to="/employers/ballarat-clarendon-college/15836/" >Ballarat Clarendon College</Link></li>
                  <li><Link to="/employers/korowa-anglican-girls-school/15845/" >Korowa Anglican girls school</Link></li>
                  <li><Link to="/employers/camberwell-grammar-school/15846/" >Camberwell Grammar school</Link></li>
                  <li><Link to="/employers/st-andrews-christian-college/15856/" >St Andrews Christian College</Link></li>
                  <li><Link to="/employers/haileybury-college/15855/" >Haileybury College</Link></li>
                  <li><Link to="/employers/christ-church-grammar-school/15860/" >Christ Church Grammar school</Link></li>
                  <li><Link to="/employers/huntingtower-school/15834/" >Huntingtower school</Link></li>
                  <li><Link to="/employers/belmont-christian-college/15898/" >Belmont Christian College</Link></li>
                  <li><Link to="/employers/lighthouse-christian-college-cranbourne/15843/" >Lighthouse Christian College Cranbourne</Link></li>
                  <li><Link to="/employers/fintona-girls-school/11527/" >Fintona girls school</Link></li>

                    
                  </ul>
                
                </ul>
              </div>
              <div className="column">
                <ul className="">
                <li className='mb-1 mt-4'><Link to="/UK/" className='text-[#e39e39] font-bold'>Queensland</Link></li>
                  <ul className="innerUL">
                  <li><Link to="/employers/queensland-government-department-of-education/18/" >Queensland - Government - Department of Education</Link></li>
                    <li><Link to="/employers/catholic-education-services-diocese-of-cairns/60/" >Catholic - Education services Diocese of Cairns</Link></li>
                    <li><Link to="/employers/townsville-catholic-education-office/35/" >Townsville Catholic Education Office</Link></li>
                    <li><Link to="/employers/somerville-house/15847/" >Somerville House</Link></li>
                    
                  </ul>
                  <li className='mb-1 mt-4'><Link to="/Europe/" className='text-[#e39e39] font-bold'>ACT</Link></li>
                  <ul className="innerUL">
                  <li><Link to="/employers/act-government-department-of-education/20/" >ACT Government - Department of Education</Link></li>
                  <li><Link to="/employers/orana-steiner-school/14803/" >Orana Steiner school</Link></li>
                    </ul>



                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className='mb-1 mt-4'><Link to="/Europe/" className='text-[#e39e39] font-bold'>Western Australia</Link></li>
                  <ul className="innerUL">
                    
                    
                    <li><Link to="/employers/international-school-of-western-australia/15848/" >International School of Western Australia</Link></li>
                    
                    <li><Link to="/employers/st-hildas-anglican-school-for-girls/11459/" >St Hildas Anglican school for girls</Link></li>
                   
                    
                  </ul>
                  <li className='mb-1 mt-4'><Link to="/Europe/" className='text-[#e39e39] font-bold'>South Australia</Link></li>
                  <ul className="innerUL">
                  <li><Link to="/employers/government-of-south-australia-department-for-education/17/" >Government of South Australia Department for Education</Link></li>
                   
                    </ul>
                    <li className='mb-1 mt-4'><Link to="/Europe/" className='text-[#e39e39] font-bold'>Nothern Territory</Link></li>
                  <ul className="innerUL">
                  <li><Link to="/employers/northern-territory-department-of-education/21/" >Northern Territory Department of Education</Link></li>
                  
                   
                    </ul>
                    <li className='mb-1 mt-4'><Link to="/Europe/" className='text-[#e39e39] font-bold'>Tasmania</Link></li>
                  <ul className="innerUL">
                  <li><Link to="/employers/tasmanian-government-education/12/" >Tasmanian Government Education</Link></li>
                   
                    </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>

     
  )
}
export default Findemployerss