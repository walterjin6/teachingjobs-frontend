import React from 'react';
import { Helmet } from "react-helmet";
import SearchResults from './SearchResults';
import { Link } from 'react-router-dom'
const PostJob = () => {
  return (
    <div className="">
      <Helmet>
        <title>Post a job</title>
        <meta name="description" content="All prices are in USD, switch region to change prices. Ads are live for up to 60 days, and include the employer logo and ad performance metrics. " />
        <meta name="keywords" content="Post Academic Jobs, Post a Job AcademicJobs" />
      </Helmet>
      <div className="blurb text-left pb-4 px-4 ">
        <Link to="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=14" ><h1 className="font-bold text-lg md:text-3xl text-center text-1xl  py-4 px-7 border-4 border-[#f4a10c] text-white rounded-full bg-[#f4a10c] hover:bg-white hover:text-[#f4a10c] hidden">→ Post A Job</h1></Link>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div>
          <picture>
            <img src="https://academicjobs.s3.amazonaws.com/img/banner/Acadenic-jobs-Employers-Top-Banner.png" alt="Academic Employers" className="rounded-3xl shadow-xl" />
          </picture>
          <div className="text-xl">
            <ul className="mt-[-20rem] mb-[5rem] pl-4 ">
              <div className="text-xl hidden md:block">
                <div className="text-white text-[5rem] font-bold">THE NEW WAY</div>
                <div className="text-white text-[5rem]  font-bold pt-8">TO RECRUIT</div>
                <div className="text-[#f4a10c] font-bold pt-4" style={{ marginTop: '10px' }}>#1 for affordability</div>
                <div className="text-[#f4a10c] font-bold">#1 for Academic Talent Delivery</div>
                <div className="font-bold pb-12" style={{ color: 'white' }}>Advertise with Academic Jobs today!</div>
              </div>
              <button>
                <Link to="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=14"><h1
                  className="border-2 border-[#f4a10c] rounded-full p-2 text-white hover:bg-[#f4a10c] text shadow-xl font-bold mt-[16rem] md:mt-0"
                  href="https://iloveacademicjobs.com/employer-products/?action=buy_product&amp;product_sid=14"
                >
                  Sign in & Post a Job
                </h1></Link>
              </button>
            </ul>
          </div></div>
        <div className="newLine text-center">
          <div className="py-2 px-7 rounded-2xl text-center">
            <p >All prices are in USD. AcademicJobs connects the world's academic employers with top academic talent, post your job openings and find qualified candidates today.  </p>
            <div className="newLine mb-2"></div>
          </div>
          <div className="newLine mb-2"></div>
        </div>
        <div className="max-w-1380 mx-auto ">
          <div className="my-4" id="packages">
            <div className="text-center mb-35">
            </div>
            <div className="p-4 grid-cols-1 grid md:flex md:flex-wrap justify-center gap-4">
              {/* Single Job Posting */}
              <div className="md:w-[24%] bg-[white]  p-4 mb-10  border border-gray-300 p-4 mb-4 shadow-xl">
                <div className="bg-[#f4a10c] pt-2 mt-[-1rem] mx-[-1rem]" > </div>
                <h3 className="font-bold text-2xl text-center text-[#f4a10c] pt-2">Single Job Posting</h3>
                <p className="text-center">Explore our classic ads.</p>
                <div className="flex flex-col mt-5">
                  <div className="flex justify-between mb-5 items-center">
                    <p className="font-bold">Basic Post</p>
                    <div className="flex items-center gap-4">
                      <p className="text-xl">$315</p>
                      <Link to="/payment/0" className="btn">Buy</Link>
                      {/* <a href="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=14" className="btn">Buy</a> */}
                    </div>
                  </div>
                  <div className="flex justify-between mb-5 items-center">
                    <p className="font-bold">Priority Listing</p>
                    <div className="flex items-center gap-4">
                      <p className="text-xl">$465</p>
                      <Link to="/payment/1" className="btn">Buy</Link>
                      {/* <a href="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=15" className="btn">Buy</a> */}
                    </div>
                  </div>
                  <div className="flex justify-between mb-5 items-center">
                    <p className="font-bold">Social+Priority</p>
                    <div className="flex items-center gap-4">
                      <p className="text-xl">$615</p>
                      <Link to="/payment/2" className="btn">Buy</Link>
                      {/* <a href="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=16" className="btn">Buy</a> */}
                    </div>
                  </div>
                  <div className="flex justify-between mb-5 items-center">
                    <p className="font-bold">HR Jobs</p>
                    <div className="flex items-center gap-4">
                      <p className="text-xl">$99</p>
                      <a href="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=29" className="btn">Buy</a>
                    </div>
                  </div>
                </div>
                <div className="mt-7.2">
                  <p className="text-[#f4a10c] font-bold">Package includes:</p>
                  <ul className="pl-8">
                    <li> -30 day single job listing</li>
                    <li> -Free employer account</li>
                    <li> -Ad performance metrics</li>
                    <li> -Edit your job posting anytime</li>
                  </ul>
                </div>
              </div>
              {/* 5 Job Pack */}
              <div className="md:w-[24%] bg-[white]  p-4 mb-10  border border-gray-300 p-4 mb-4  shadow-xl">
                <div className="bg-[#f4a10c] pt-2 mt-[-1rem] mx-[-1rem]" > </div>
                <h3 className="font-bold text-2xl text-center text-[#f4a10c] pt-2">5 Job Pack</h3>
                <p className="text-center pb-5">Post 5 Jobs at anytime.</p>
                <p className="bg-[#f4a10c] rounded-full p-3 font-bold text-1xl text-center text-white mb-5 items-center shadow-lg">MOST POPULAR</p>
                <div className="flex flex-col mt-5">
                  <div className="flex justify-between mb-5 items-center items-center">
                    <p className="font-bold ">Basic Post</p>
                    <div className="flex items-center gap-4">
                      <p className="text-xl">$1,418</p>
                      <a href="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=17" className="btn">Buy</a>
                    </div>
                  </div>
                  <div className="flex justify-between mb-5 items-center">
                    <p className="font-bold">Priority Listing</p>
                    <div className="flex items-center gap-4">
                      <p className="text-xl">$2,168</p>
                      <a href="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=29" className="btn">Buy</a>
                    </div>
                  </div>
                  <div className="flex justify-between mb-5 items-center">
                    <p className="font-bold">Social+Priority</p>
                    <div className="flex items-center gap-4">
                      <p className="text-xl">$2,918</p>
                      <a href="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=34" className="btn">Buy</a>
                    </div>
                  </div>
                </div>
                <div className="mt-7.2">
                  <p className="text-[#f4a10c] font-bold">Package includes:</p>
                  <ul className="pl-8">
                    <li> -30 day job listings</li>
                    <li> -Edit your job postings anytime</li>
                    <li> -Job credits do not expire</li>
                    <li> -Saving 10%</li>
                  </ul>
                </div>
              </div>
              {/* 10 Job Pack */}
              <div className="md:w-[24%] bg-[white]  p-4 mb-10  border border-gray-300 p-4 mb-4  shadow-xl">
                <div className="bg-[#f4a10c] pt-2 mt-[-1rem] mx-[-1rem]" > </div>
                <h3 className="font-bold text-2xl text-center text-[#f4a10c] pt-2">10 Job Pack</h3>
                <p className="text-center pb-[4.3rem]">Post 10 jobs at anytime.</p>
                <div className="flex flex-col mt-5">
                  <div className="flex justify-between mb-5 items-center">
                    <p className="font-bold">Basic Post</p>
                    <div className="flex items-center gap-4">
                      <p className="text-xl">$2,520</p>
                      <a href="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=18" className="btn">Buy</a>
                    </div>
                  </div>
                  <div className="flex justify-between mb-5 items-center">
                    <p className="font-bold">Priority Listing</p>
                    <div className="flex items-center gap-4">
                      <p className="text-xl">$4,020</p>
                      <a href="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=35" className="btn">Buy</a>
                    </div>
                  </div>
                  <div className="flex justify-between mb-5 items-center">
                    <p className="font-bold">Social+Priority</p>
                    <div className="flex items-center gap-4">
                      <p className="text-xl">$5,520</p>
                      <a href="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=36" className="btn">Buy</a>
                    </div>
                  </div>
                </div>
                <div className="mt-7.2">
                  <p className="text-[#f4a10c] font-bold">Package includes:</p>
                  <ul className="pl-8">
                    <li> -30 day single job listings</li>
                    <li> -Edit your job postings anytime</li>
                    <li> -Job credits do not expire</li>
                    <li> -Saving 20%</li>
                  </ul>
                </div>
              </div>
              {/* Unlimited Packs */}
              <div className="md:w-[24%] bg-[white]  p-4 mb-10  border border-gray-300 p-4 mb-4  shadow-xl">
                <div className="bg-[#f4a10c] pt-2 mt-[-1rem] mx-[-1rem]" > </div>
                <h3 className="font-bold text-2xl text-center pt-2 text-[#f4a10c]">Unlimited Packs</h3>
                <p className="text-center pb-[2.8rem]">Fairly based on how many employees you have.</p>
                <div className="flex flex-col mt-5">
                  <div className="flex justify-between mb-5 items-center">
                    <p className="font-bold">{'< 2000 Staff'}</p>
                    <div className="flex items-center gap-4">
                      <p className="text-xl">$14,000</p>
                      <a href="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=26" className="btn">Buy</a>
                    </div>
                  </div>
                  <div className="flex justify-between mb-5 items-center">
                    <p className="font-bold">{'< 4000 Staff'}</p>
                    <div className="flex items-center gap-4">
                      <p className="text-xl">$19,000</p>
                      <a href="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=19" className="btn">Buy</a>
                    </div>
                  </div>
                  <div className="flex justify-between mb-5 items-center">
                    <p className="font-bold">{'> 4000 Staff'}</p>
                    <div className="flex items-center gap-4">
                      <p className="text-xl">$26,000</p>
                      <a href="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=23" className="btn">Buy</a>
                    </div>
                  </div>
                </div>
                <div className="mt-7.2">
                  <p className="text-[#f4a10c] font-bold">Package includes:</p>
                  <ul className="pl-8">
                    <li> -Use anytime within 12 months</li>
                    <li> -Edit your job postings anytime</li>
                    <li> -Job credits do not expire</li>
                    <li> -Saving 70%</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-white text-center">
              <p className="mb-0">
                <a href="/pricing/" className="text-yellow-400"><strong></strong></a>
                &nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="cont1 md:flex md:flex-wrap grid-cols-1 grid justify-center my-4 md:gap-0 gap-4">
        <div className="w-auto md:w-1/3 p-4">
          <div className="long-box border-4 border-[#f4a10c] p-4 rounded-3xl text-center text-[#f4a10c] shadow-xl" >
            <img
              alt="Job seeking bell notification icon"
              className="seeker-icons"
              src="https://academicjobs.s3.amazonaws.com/icon/Hands-On-Hips-Icon.png"
            />
            <h3>1</h3>
            <h3>Craft your free profile</h3>
            <p className="text-gray-400">All you need is to fill in some quick details.</p>
          </div>
        </div>
        <div className="w-auto md:w-1/3 p-4">
          <div className="long-box border-4 border-[#f4a10c] p-4 rounded-3xl text-center  text-[#f4a10c]">
            <img
              alt="Employer attraction icon"
              className="seeker-icons"
              src="https://academicjobs.s3.amazonaws.com/icon/Academic-Jobs-Book-Story-Icon.png"
            />
            <h3>2</h3>
            <h3>Start your job post</h3>
            <p className="text-gray-400">All you need is a little info for your job post.</p>
          </div>
        </div>
        <div className="w-auto md:w-1/3 p-4">
          <div className="long-box border-4 border-[#f4a10c] p-4 rounded-3xl text-center  text-[#f4a10c]">
            <img
              alt="Secure profile icon"
              className="seeker-icons"
              src="https://academicjobs.s3.amazonaws.com/icon/Rocket-Icon.png"
            />
            <h3>3</h3>
            <h3>Lift Off.</h3>
            <p className="text-gray-400">Post your job and it will be live to our talent.</p>
          </div>
        </div>
      </div>
      <p className='text-[#f4a10c] mt-8 font-bold text-right '><Link className='text-[#f4a10c] mt-8 font-bold text-right ' to='https://iloveacademicjobs.com/recruitment/'> View More Details →</Link> </p>
      <div className="cont1 md:flex md:flex-wrap grid-cols-1 grid justify-center my-4 md:gap-0 gap-4 pt-12">
        <div className="w-auto md:w-1/3 p-4">
          <div className="long-box border-4   rounded-3xl text-center text-[#f4a10c] shadow-xl" >
            <img
              alt="Job seeking bell notification icon"
              className="rounded-3xl"
              src="https://academicjobs.s3.amazonaws.com/img/_misc/SingleJobListingDemo.png"
            />
          </div>
        </div>
        <div className="w-auto md:w-1/3 p-4">
          <div className="long-box border-4 rounded-3xl text-center  text-[#f4a10c] shadow-xl">
            <img
              alt="Employer attraction icon"
              className="rounded-3xl"
              src="https://academicjobs.s3.amazonaws.com/img/_misc/PriorityListingDemo.png"
            />
          </div>
        </div>
        <div className="w-auto md:w-1/3 p-4">
          <div className="long-box border-4   rounded-3xl text-center  text-[#f4a10c] shadow-xl">
            <img
              alt="Secure profile icon"
              className="rounded-3xl"
              src="https://academicjobs.s3.amazonaws.com/img/_misc/SocialPlusPriorityListingDemo.png"
            />
          </div>
        </div>
      </div>
      <section className="mainContent">
        <div className="pt-8 pb-12">
          <picture>
            <img
              src="https://academicjobs.s3.amazonaws.com/img/_misc/proudly-working-with.png"
              alt=""
              className="bg-white"
            />
          </picture>
        </div>
        <div className=" rounded-3xl">
          <img
            src="https://academicjobs.s3.amazonaws.com/img/_misc/InstitutionalprofileEmployeradminstats.png"
            alt=""
            className=" rounded-3xl shadow-xl"
          />
        </div>
      </section>
    </div>
  );
};
export default PostJob;