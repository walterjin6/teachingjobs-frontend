import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NomineePromoIdeas = () => {
  return (
    <div className="">
      <Helmet>
        <title>Nominee Promotion Ideas and Help</title>
        <meta
          name="description"
          content="Information, templates and resources to help you promote your nomination for the Principal of the Year Award."
        />
        <meta
          name="keywords"
          content="Nominee help, promo templates, nominee resources, nominee promotion, nominee promotion ideas, nominee promotion help, nominee promotion resources, nominee promotion templates, nominee promotion examples, nominee promotion tips, nominee promotion advice, nominee promotion strategies"
        />
      </Helmet>

      <div className="px-7 py-8 container mx-auto py-16 bg-orange-100 p-4 pt-4 rounded-3xl mt-8 mb-56">
        <h1 className="text-5xl font-semibold  text-[#f4a10c] ">
          Principal of the year 2023!
        </h1>
        <h3 className="text-lg mt-4 pb-8">Nominate your Principal NOW!</h3>

        <h4 className="text-lg text-[#f4a10c]">
          To nominate an outstanding principal for the auspicious{" "}
          <span className="poty">"PRINCIPAL OF THE YEAR 2023 AWARD"</span>{" "}
          simply complete the form below:{" "}
        </h4>

        <div className="p-4 bg-gray-100 mt-[3rem] hidden">
          <p className="mb-4 text-lg font-semibold text-[#f4a10c]">
            Drop us an email:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <span className="font-semibold">
                University and College Advertisers:
              </span>{" "}
              BestResults (AT) Teachingjobs.com
            </li>
            <li>
              <span className="font-semibold">
                Teachings and Higher Ed Staff:
              </span>{" "}
              TheBestJobs (AT) TeachingJobs.com
            </li>
            <li>
              <span className="font-semibold">Student Jobs on Campus:</span>{" "}
              StudentWork (AT) TeachingJobs.com
            </li>
            <li>
              <span className="font-semibold">Teaching Talent Pool:</span>{" "}
              TalentPool (AT) AcadmeicJobs.com
            </li>
          </ul>
          <p className="mt-4">Or call us:</p>
        </div>

        <Link to="https://iloveTeachingjobs.com/Nominate/">
          <img
            src="https://Teachingjobs.s3.amazonaws.com/img/_misc/Nominate-us.jpeg"
            alt="Nominate us"
            className="mt-[4rem] hidden"
          />
        </Link>
      </div>

      <section className="px-7 py-8 container mx-auto py-16 bg-slate-100 p-4 pt-4 rounded-3xl mt-8 mb-8"></section>
    </div>
  );
};

export default NomineePromoIdeas;
