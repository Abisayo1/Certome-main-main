import { useState } from "react";
import { ArrowRight } from "lucide-react";

const jobData = {
  "HT & Admin": [
    ["HR Manager", "5 Years", "2024-07-30"],
    ["Admin Officer", "3 Years", "2024-08-15"],
  ],
  "Engineering": [
    ["Software Engineer", "3 Years", "2024-07-28"],
    ["DevOps Engineer", "4 Years", "2024-08-05"],
    ["Cybersecurity Analyst", "2 Years", "2024-08-10"],
  ],
  "Support": [
    ["Customer Support", "1 Year", "2024-07-25"],
    ["Technical Support", "2 Years", "2024-08-01"],
  ],
  "Design": [
    ["UI/UX Designer", "2 Years", "2024-07-27"],
    ["Graphic Designer", "3 Years", "2024-08-03"],
  ],
  "Digital Marketing": [
    ["SEO Specialist", "2 Years", "2024-07-29"],
    ["Social Media Manager", "3 Years", "2024-08-07"],
  ],
};

const HeaderCareer3 = () => {
  const [selectedCategory, setSelectedCategory] = useState("Engineering");

  return (
    <div className="flex flex-col items-center text-center bg-[#F9F9F9] p-10">
      <p className="text-lg">Come join us</p>
      <h1 className="text-3xl font-bold">Career Openings</h1>
      <p className="max-w-2xl text-gray-600 mt-4">
        We’re always looking for creative, talented self-starters to join the CERTOME family. 
        Check out our open roles below and fill out an application.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-10 w-full max-w-5xl">
        {/* Left Column - Job Categories */}
        <ul className="space-y-2 max-lg:ml-10 md:text-left md:w-full">
          {Object.keys(jobData).map((category) => (
            <li
              key={category}
              className={`cursor-pointer ${selectedCategory === category ? "text-[#D2232A] font-bold" : "text-gray-700"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category} {category === "Engineering" && "(20)"}
            </li>
          ))}
        </ul>

        {/* Right Column - Job Listings */}
        <div className="col-span-4 flex flex-col space-y-4 w-full">
          {jobData[selectedCategory].map((job, index) => (
            <div key={index} className="shadow-lg p-4 flex flex-col md:flex-row justify-between items-center rounded-lg">
              <div className="w-full md:w-1/3 text-center md:text-left">{job[0]}</div>
              <div className="w-full md:w-1/3 text-center md:text-left">
                <p className="text-gray-400">Experience</p>
                {job[1]}
              </div>
              <div className="w-full md:w-1/3 text-center md:text-left">
                <p className="text-gray-400">Deadline</p>
                {job[2]}
              </div>
              <button className="p-2 bg-blue-500 text-black rounded-full mt-2 md:mt-0">
                <ArrowRight size={24} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderCareer3;
