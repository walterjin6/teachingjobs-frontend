import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { countryMappings, countryMappings1 } from "../utils/data";
import { setSearchJobCriteria, setRegion } from '../store/postsSlice';

import DispatchLink from './DispatchLink'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Header() { //1212
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false)
    const region = useSelector((state) => state.posts.region)
    const handleFormSubmit = () => {

          if (region !== "Global") {
            navigate("/jobs/", { state: { q: '', l: countryMappings1[region].searchLocation } });
        } else {
            const fetchLocation1 = async () => {
                try {
                    const response = await fetch("https://api.geoapify.com/v1/ipinfo?apiKey=ea0e191c22a94bf39e0e58ffbe2d6b66");
                    const result = await response.json();
                    return result.country.name
                } catch (error) {
                    return ""
                }
            }
            fetchLocation1()
                .then(country => {
                    //sessionStorage.setItem("location", countryMappings[country.toLowerCase()]);
                    //alert(countryMappings[country.toLowerCase()])
                    //alert(countryMappings[country.toLowerCase()])
                    dispatch(setRegion(countryMappings[country.toLowerCase()]))
                    //a.l = countryMappings1[sessionStorage.getItem("location")].searchLocation
                    //alert(region)
                    //dispatch(setSearchJobCriteria(a)) 
                    //alert(countryMappings1[sessionStorage.getItem("location")].searchLocation)
                    navigate("/jobs/", { state: { q: '', l: countryMappings1[countryMappings[country.toLowerCase()]].searchLocation } });
                    //navigate(`/jobs/${countryMappings1[sessionStorage.getItem("location")].searchLocation}`);
                })
                .catch(error => {
                    console.log('Error:', error);
                });
        }
        setIsNavOpen(false)
    };
    const ref = useRef(null)
    const onMouseEnter = (e) => {
        setDropdown(true)
    }
    const onMouseLeave = () => {
        setDropdown(false)
    }
    const closeDropdown = () => {
        dropdown && setDropdown(false)
    }
    const location = useLocation();
    return (
        <div className="flex w-full items-center  justify-between md:justify-start gap-12 border-gray-400 py-8 px-8">
            <Link to={`/${region}/`}>
                {location.pathname === "/" ||
                    < img
                        className='w-48'
                    src="/academicJobsLogo.png"
                        alt=""
                    />}
            </Link>
            <nav className='md:w-full'>
                <section className="MOBILE-MENU flex lg:hidden">
                    <div
                        className="HAMBURGER-ICON space-y-2"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    </div>
                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="absolute top-0 right-0 px-8 py-8 "
                            onClick={() => setIsNavOpen(false)}
                        >
                            <svg
                                className="h-8 w-8 text-gray-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <ul className="flex flex-col items-start justify-between min-h-[250px] text-xl py-16 pr-[6rem] pb-[40rem] bg-white">
                            <button className="text-gray-900 hover:underline p-4 mb-4 border rounded-r-3xl"
                                onClick={() => {
                                    navigate("/jobs/")
                                    setIsNavOpen(false)
                                }}>Teacher Jobs</button>
                                 <button className="text-gray-900 hover:underline p-4 mb-4  border rounded-r-3xl"
                                onClick={() => {
                                    navigate("/jobs/principal/")
                                    setIsNavOpen(false)
                                }}>Principal Jobs</button>
                            <button className="text-gray-900 hover:underline p-4 mb-4  border rounded-r-3xl"
                                onClick={() => {
                                    navigate("/employers/")
                                    setIsNavOpen(false)
                                }}>Top Schools</button>
                                <button className="text-gray-900 hover:underline p-4 mb-4  border rounded-r-3xl"
                                onClick={() => {
                                    navigate("/school-career-advice/")
                                    setIsNavOpen(false)
                                }}>Career Advice </button>
                            <div className=' flex justify-between items-center gap-10'>
                                <a href="https://myteachingjobs.com.au/school-pricing/" target="_blank"  className="text-[#e39e39] hover:underline font-bold p-4 border border-[#e39e39] rounded-r-3xl ">Post A Job</a>
                                <button className="px-4 py-4 mt-4 bg-[#e39e39] text-white rounded-r-full shadow-md hover:bg-orange-600 font-bold hidden"
                onClick={handleFormSubmit}
              >
                Search In Your Country
              </button>
                            </div>
                            <details class="bg-gray-300 open:bg-[amber-200] duration-300 md:hidden mt-6 rounded-r-3xl hidden">
            <summary class="bg-inherit px-5 py-3  cursor-pointer pl-8">Search Globally</summary>
         
                            <div className={`p-2  md:w-52  dropdown-content z-[1] menu p-2  bg-base-100  w-31 } `}
                            >
                                <div className="  text-gray-900 relative"
                                >
                                    <ul
                                        className=" text-[0.875rem] z-99  min-w-[10rem] py-1 bg-white rounded-lg ">
                                        {Object.keys(countryMappings1).map((key) => (
                                            <li className="navbar__item" key={key}>
                                                <DispatchLink
                                                    to={`/${key}/`}
                                                    region={key}
                                                    setDropdown={setDropdown}
                                                    setIsNavOpen={setIsNavOpen}
                                                    className="navbar__link"
                                                >
                                                    {countryMappings1[key].menu}
                                                </DispatchLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                           
        </details>
                        </ul>
                    </div>
                </section>
                <div className="DESKTOP-MENU w-full justify-between hidden space-x-8 lg:flex">
                    <div className="w-full columns-1 flex justify-start  md:items-center  md:gap-8 ">
                        <Link to="/jobs/" className="text-[#334680]  shadow-md rounded-full px-6 py-2 hover:text-[#e39e39] border border-transparent hover:border hover:border-[#e39e39]  ">Teacher Jobs</Link>
                        <Link to="/jobs/principal/" className="text-[#334680]  shadow-md rounded-full px-6 py-2 hover:text-[#e39e39] border border-transparent hover:border hover:border-[#e39e39]  ">Principal Jobs</Link>
                        <Link to="/employers/" className="text-[#334680]  shadow-md rounded-full px-6 py-2 hover:text-[#e39e39] border border-transparent hover:border hover:border-[#e39e39] ">Top Schools</Link>
                        <Link to="/school-career-advice/" className="text-[#334680]  shadow-md rounded-full px-6 py-2 hover:text-[#e39e39] border border-transparent hover:border hover:border-[#e39e39] ">Career Advice</Link>
                       
                    </div>
                    <div className=' w-[200px] grid items-center justify-center '>
                        <a href="https://myteachingjobs.com.au/school-pricing/" target="_blank"  className="text-[#e39e39]  font-bold shadow-md rounded-full px-4 py-2 border border-[#e39e39] hover:bg-[#e39e39] hover:text-white ">Post A Job</a>
                    </div>
                </div>
            </nav>
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
       hieght: 100%;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: end;
        background: rgba(0,0,0,.4);
      }
    `}</style>
        </div>
    );
}
