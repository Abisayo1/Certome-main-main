import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const BlogHeader = () => {
  return (
    <div className="sm:p-5 text-center m-3 sm:mt-3 sm:mb-20">

      {/* Title */}
      <h1 className="text-2xl sm:text-4xl font-MontserratBold text-primary mb-5 text-center sm:text-left">
        Trending Topics
      </h1>

      {/* Buttons */}
      <div className="flex flex-wrap max-md:justify-center items-center overflow-x-auto gap-3 mb-5 max-w-full">
        <button className="outline-none py-2 px-4 rounded-3xl bg-blue border-2 border-[#797979] cursor-pointer duration-300 focus:text-blue focus:font-semibold focus:bg-blue-500">
          All
        </button>
        <button className="outline-none py-2 px-4 rounded-3xl bg-blue border-2 border-[#797979] cursor-pointer duration-300 focus:text-blue focus:font-semibold focus:bg-blue-500 min-w-[150px] sm:min-w-[200px]">
          Design Thinking
        </button>
        <button className="outline-none py-2 px-4 rounded-3xl bg-blue border-2 border-[#797979] cursor-pointer duration-300 focus:text-blue focus:font-semibold focus:bg-blue-500">
          Technology
        </button>
        <button className="outline-none py-2 px-4 rounded-3xl bg-blue border-2 border-[#797979] cursor-pointer duration-300 focus:text-blue focus:font-semibold focus:bg-blue-500">
          Web3
        </button>
        <button className="outline-none py-2 px-4 rounded-3xl bg-blue border-2 border-[#797979] cursor-pointer duration-300 focus:text-blue focus:font-semibold focus:bg-blue-500">
          Programming
        </button>
        <button className="outline-none py-2 px-4 rounded-3xl bg-blue border-2 border-[#797979] cursor-pointer duration-300 focus:text-blue focus:font-semibold focus:bg-blue-500">
          AI
        </button>
      </div>

      <div className='h-[80vh]' > {/*focus Image */}
        <div className="relative w-full px-3 h-[300px] sm:h-[500px] rounded-3xl mt-5 ">
          <img src="badge.png" alt="badge" className="absolute -z-[999] p-3 justify-start mt-3   sm:-mt-[200px] " />
          <img src="Hero.png" alt="Hero" className="w-full h-full object-cover rounded-3xl " />

          {/* Card */}
          <div className="sm:absolute  mt-3 max-sm:-mt-40 max-sm:mr-10 sm:mt-0 -bottom-14 bg-blue left-5 sm:px-10 p-5 sm:pt-10 rounded-xl shadow-xl justify-start ">
            <button className="bg-[blue] text-blue border-none outline-none py-2 px-3 text-sm rounded-lg cursor-pointer mb-3 flex ">Technology</button>

            {/* Wrap the title in a Link component */}
            <Link to="/blog/:id" className="text-[1em] sm:text-lg mb-3 max-w-[500px]">
              The Impact of Technology on the Workplace: How Technology is Changing
            </Link>

            <div className="flex flex-row items-center mt-3">
              <div className='sm:w-[10%]' >
                <img src="imgIcon.jpg" alt="User Thumbnail" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3 " />
              </div>
              <div className='w-[90%]' >
                <p className="flex flex-col sm:flex-row items-start w-full mt-3 ">
                  <span className="text-sm text-[grey] ">Abisayo Folu-Agoi</span>
                  <span className="text-sm text-[grey] ml-3 ">August 20, 2022</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
