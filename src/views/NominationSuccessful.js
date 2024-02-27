import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NominationSuccessful = () => {
  return (
    <div className="">
      <Helmet>
        <title>Nomination Successful - Thank you</title>
        <meta
          name="description"
          content="Successful nomination for the Principal of the Year Award."
        />
        <meta name="keywords" content="Successful nomination" />
      </Helmet>
      <section>
        <div className="px-7 py-8 container mx-auto py-16 p-4 pt-4 rounded-3xl mt-8 mb-56">
          <h1 className="text-5xl font-semibold  text-[#f4a10c] mb-8">
            Thank you for your nomination of Principal of the Year!
          </h1>
          <p>
            To increase your nominees chances of winning ask other academic
            staff to share this link{" "}
            <a
              className="link link-warning hover:text-[#f4a10c]"
              href="https://www.teachingjobs.com.au/principal-of-the-year-2023-nominations"
            >
              www.TeachingJobs.com.au
            </a>{" "}
            on their various social media accounts and their email…
          </p>
          <ul>
            <li>Email</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Website</li>
            <li>Other social media accounts</li>
          </ul>
          <a
            className="btn btn-warning hover:bg-[#f4a10c] mt-4"
            href="/principal-of-the-year-2023-nominations"
          >
            Nominate someone else
          </a>
        </div>
      </section>
    </div>
  );
};

export default NominationSuccessful;
