import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SearchResults from "./SearchResults";
import careerAdvice from "../utils/careerAdvice";
const Careeradvice2 = () => {  
  return (
    <div className="max-w-screen-xl mx-auto ">
      <Helmet>
        <title>Teaching hub and Career Advice</title>
        <meta
          name="description"
          content="Are you looking for hub in academia? Read our blog posts to discover the secrets of well-being, work-life balance, and career satisfaction for Teachings.  "
        />
        <meta name="keywords" content="Teaching hub, TeachingJobs hub" />
      </Helmet>
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-2xl md:text-3xl py-4 px-7 bg-[#f4ac10] text-white rounded-full shadow-xl">
          {" "}
          Teaching Hub & Top Career Advice Today
        </h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="py-4 px-7  text-black rounded-2xl ">
          <p className="bg-slate-100 p-4 rounded-3xl">
            Are you looking for an Teaching hub, career advice, tips, and
            insights from Teachings and researchers? Check out these Teaching
            jobs blogs and learn from the experts in your field. You will find valuable
            information and inspiration to advance your Teaching career. Read
            these blogs now and discover the best opportunities and practices
            for Teaching.
          </p>
          {/* <a href="/career-help/" className="btn btn-warning mt-4">Career help</a> */}
        </div>
{/* 
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-8">
          <iframe
            class=" aspect-video  rounded-3xl"
            src="https://www.youtube.com/embed/bEEmo_KhOOk?si=yiNtzXaYyASiWU8W"
            title="YouTube video player"
          ></iframe>

          <iframe
            class=" aspect-video rounded-3xl"
            src="https://www.youtube.com/embed/hSbjVkmSIrc?si=qeq_VAZ3ZEQpWhjh"
            title="YouTube video player"
          ></iframe>

          <iframe
            class=" aspect-video rounded-3xl"
            src="https://www.youtube.com/embed/yn-ctFDfI60?si=REwYQIJFPBm6NnXm"
            title="YouTube video player"
          ></iframe>
        </div> */}
      </div>

        {/* <h2 className=" font-bold text-xl md:text-xl px-7 text-[#f4ac10] border-2 border-[#f4ac10] rounded-3xl mt-6 py-2">
          {" "}
          Top Teaching Hub Posts
        </h2> */}
        {/* <div className="bg-white flex flex-col">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch  px-1 mb-8 text-left px-4">
            <Link to="/Teaching-hub/happiness-and-Teachings/">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    {" "}
                    Happiness and Teachings: Scott Galloway's Algebra of hub{" "}
                  </h2>
                  <a className=" text-gray-400"> 10 Aug, 2023</a>
                </div>
                <figure>
                  <img
                    src="https://Teachingjobs.s3.amazonaws.com/img/_misc/how-to-be-a-happy-Teaching.jpg"
                    alt="Happiness and Teachings: Scott Galloway's Algebra of hub"
                  />
                </figure>
              </div>
            </Link>
            <Link to="/Teaching-hub/top-Teaching-jobs-australia/">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"> Top Teaching Jobs Australia </h2>
                  <a className=" text-gray-400"> 10 Aug, 2023</a>
                </div>
                <figure>
                  <img
                    src="https://Teachingjobs.s3.amazonaws.com/img/_misc/top-Teaching-jobs-australia.jpg"
                    alt="Top Teaching Jobs Australia"
                  />
                </figure>
              </div>
            </Link>
            <Link to="/Teaching-hub/how-to-land-your-dream-college-job-a-step-by-step-guide/">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    {" "}
                    How to Land Your Dream College Job: A Step-by-Step Guide{" "}
                  </h2>
                  <a className=" text-gray-400"> 06 Jul, 2023</a>
                </div>
                <figure>
                  <img
                    src="https://Teachingjobs.s3.amazonaws.com/img/_misc/Dream_Job_2.png"
                    alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                  />
                </figure>
              </div>
            </Link>
            <Link to="/Teaching-hub/exploring-the-benefits-of-Teaching-jobs-online-why-virtual-hiring-is-on-the-rise/">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    {" "}
                    Exploring the Benefits of Teaching Jobs Online: Why Virtual
                    Hiring is on the Rise{" "}
                  </h2>
                  <a className=" text-gray-400"> 20 Jun, 2023</a>
                </div>
                <figure>
                  <img
                    src="https://Teachingjobs.s3.amazonaws.com/img/_misc/Virtual_Hiring.png"
                    alt="Exploring the Benefits of Teaching Jobs Online: Why Virtual Hiring is on the Rise"
                  />
                </figure>
              </div>
            </Link>
            <Link to="/Teaching-hub/exploring-the-global-landscape-of-Teaching-jobs-opportunities-and-challenges/">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    {" "}
                    Exploring the Global Landscape of Teaching Jobs:
                    Opportunities and Challenges{" "}
                  </h2>
                  <a className=" text-gray-400"> 7 Jun, 2023</a>
                </div>
                <figure>
                  <img
                    src="https://Teachingjobs.s3.amazonaws.com/img/_misc/Global_Opportunities_2.png"
                    alt="Exploring the Global Landscape of Teaching Jobs: Opportunities and Challenges"
                  />
                </figure>
              </div>
            </Link>
            <Link to="/Teaching-hub/the-evolution-of-university-recruitment/">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    {" "}
                    The Evolution of University Recruitment: Embracing Digital
                    Platforms{" "}
                  </h2>
                  <a className=" text-gray-400"> 15 May, 2023</a>
                </div>
                <figure>
                  <img
                    src="https://Teachingjobs.s3.amazonaws.com/img/_misc/Recruitment_Evolution_2.png"
                    alt="The Evolution of University Recruitment: Embracing Digital Platforms"
                  />
                </figure>
              </div>
            </Link>
          </ul>
        </div> */}

      

      {/* <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#00aeef] text-[#00aeef] rounded-3xl mt-20 shadow-md ">
            Most Rewarding University Careers
          </h2>
          <div className="cate-group section23 ">
            <div className="widget__text-block">
              <div className="faculty-container grid-cols-1 grid md:grid-cols-5 md:gap-8 py-2 px-7 pb-16">

              <div className="column">
                  <ul className="">
                  <li className="mb-1 mt-4">
                      <Link to="/Teaching-hub/find-student-jobs-on-your-university-campus/" className="text-[#00aeef] ">
                      Find Student Jobs on your University Campus
                      </Link>
                    </li>
                  
                  </ul>
                </div>

                <div className="column">
                  <ul className="">
                  
                    <li className="mb-1 mt-4">
                      <Link to="/Teaching-hub/seek-all-qut-university-careers-here/" className="text-[#00aeef] ">
                      Seek all QUT University Careers Here
                      </Link>
                    </li>
                    <li className="mb-1 mt-4">
                      <Link to="/Teaching-hub/seek-all-qut-university-jobs-here/" className="text-[#00aeef] ">
                      Seek all QUT University Jobs Here
                      </Link>
                    </li>
                    
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link
                        to="/Teaching-hub/seek-all-bond-university-careers-here/"
                        className="text-[#00aeef] "
                      >
                        Seek all Bond University Careers Here
                      </Link>
                    </li>
                    <li className="mb-1 mt-4">
                      <Link to="/Teaching-hub/seek-all-bond-university-jobs-here/" className="text-[#00aeef] ">
                      Seek all Bond University Jobs Here
                      </Link>
                    </li>
                
                   
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link to="/Teaching-hub/start-your-career-at-harvard-university/" className="text-[#00aeef] ">
                      Start your Career at Harvard University 
                      </Link>
                    </li>
                    <li className="mb-1 mt-4">
                      <Link to="/Teaching-hub/seek-all-harvard-university-jobs-here/" className="text-[#00aeef] ">
                      Seek all Harvard University Jobs Here
                      </Link>
                    </li>
               
                    
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link to="/Teaching-hub/seek-all-ucla-jobs-here/" className="text-[#00aeef] ">
                      Seek all UCLA Jobs Here
                      </Link>
                    </li>
                    <li className="mb-1 mt-4">
                      <Link to="/Teaching-hub/start-you-career-at-ucla/" className="text-[#00aeef]">
                      Start you Career at UCLA
                      </Link>
                    </li>
                  </ul>
                </div>

               


              </div>
            </div>
          </div> */}


      <div className="w-ful  mx-auto  bg-[#f4ac10] border-[0.65rem] rounded-full md:my-2 md:mb-4  border-[#f4ac10] shadow-xl">
        <h2 className=" font-bold text-xl md:text-xl px-7 text-white ">
          {" "}
          All Carrer Advice Posts
        </h2>
      </div>
      <div className="mt-[-3.3rem]">
        <SearchResults q={{ l: "Teaching_Hub" }} />
      </div>
    </div>
  );
};
export default Careeradvice2;
