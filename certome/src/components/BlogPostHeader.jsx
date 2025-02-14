import React from 'react';

const BlogPostHeader = () => {
  return (
    <div className="p-5 mx-4 sm:mx-12 md:mx-16 lg:mx-28"
      style={{
        backgroundImage: "url('badge.png')", 
        backgroundPosition: 'left', 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', // Change the size to cover for better responsiveness
        paddingRight: '50px' // Adjust padding to avoid overlap
      }}>
      {/* Technology button with background image */}
      <div className="text-left mb-4">
        <button className="bg-[#4B6BFB] text-white px-4 py-2 rounded-md">
          Technology
        </button>
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
        The Impact of Technology on the Workplace: How Technology is Changing
      </h1>

      {/* Profile Section */}
      <div className="flex items-center justify-center mb-6">
        <img src="imgIcon.jpg" alt="Abisayo Folu-Agoi" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <div className="text-lg font-semibold">Abisayo Folu-Agoi</div>
          <div className="text-sm text-gray-500">August 20, 2022</div>
        </div>
      </div>

      {/* Image */}
      <div className="mb-6">
        <img src="pic2.png" alt="Blog Image" className="mx-auto w-full" />
      </div>

      {/* Blog Content */}
      <div className="mb-8">
        <p>
          Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
        </p>
        <p className="mt-4">
          One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.
        </p>
      </div>

      {/* Subtopics */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Research Your Destination</h2>
        <p className="mt-4">
          Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.
        </p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Plan Your Itinerary</h2>
        <p className="mt-4">
          While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.
        </p>
        <p className="mt-4">
          Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
        </p>
      </div>

      {/* Quote */}
      <div className="bg-[#E8E8EA] p-4 rounded-lg italic text-center mb-6">
        “Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy.”
      </div>

      {/* Second Image */}
      <div className="mb-6">
        <img src="pic.png" alt="Pic" className="mx-auto w-full" />
      </div>

      {/* Additional Subtopics */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Pack Lightly and Smartly</h2>
        <p className="mt-4">
          Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Stay Safe and Healthy</h2>
        <p className="mt-4">
          Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. This includes researching any required vaccinations or medications, staying hydrated, washing your hands frequently, and using sunscreen and insect repellent. It's also essential to keep your valuables safe and secure and to be aware of your surroundings at all times.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Immerse Yourself in the Local Culture</h2>
        <p className="mt-4">
          One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Capture Memories</h2>
        <p className="mt-4">
          Finally, don't forget to capture memories of your journey. Whether it's through photographs, journaling, or souvenirs, preserving the moments and experiences of your travels can bring joy and nostalgia for years to come. However, it's also essential to be present in the moment and not let technology distract you from the beauty of your surroundings.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Conclusion:</h2>
        <p className="mt-4">
          Finally, don't forget to capture memories of your journey. Whether it's through photographs, journaling, or souvenirs, preserving the moments and experiences of your travels can bring joy and nostalgia for years to come. However, it's also essential to be present in the moment and not let technology distract you from the beauty of your surroundings.
        </p>
      </div>
    </div>
  );
};

export default BlogPostHeader;
