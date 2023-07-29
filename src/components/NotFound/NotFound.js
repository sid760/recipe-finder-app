// import React from 'react';
// import "./NotFound.scss";

// const NotFound = () => {
//   return (
//     <div className='not-found my-5'>
//       <div className='container flex align-center justify-center'>
//         Can't find         
        
//       </div>
//       <div className='container flex align-center justify-center'>
//       <button
//   type="button"
//   className="navbar-show-btn text-black"
//   onClick={() => {
//     // Replace 'your_external_link_url' with the actual URL you want to link to
//     window.open('http://127.0.0.1:8000/', '_blank');
//   }}
// >
//   Let's ask chatbot
// </button>
//       </div>
//     </div>
//   )
// }

// export default NotFound

import React, { useState } from 'react';
import YouTube from 'react-youtube';
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import "./NotFound.scss";

const YOUTUBE_API_KEY = "AIzaSyDg1RalXdbv2WXW5rflElORuu1fLQuqhEQ"; // Replace with your YouTube API Key

const searchYouTube = async (query) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search`,
      {
        params: {
          part: "snippet",
          maxResults: 5,
          key: YOUTUBE_API_KEY,
          q: query,
        },
      }
    );
    return response.data.items;
  } catch (error) {
    console.error("Error searching YouTube:", error);
    return [];
  }
};

const NotFound = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (searchTerm.trim() !== "") {
      const results = await searchYouTube(searchTerm);
      setSearchResults(results);
    }
  };

  return (
    <div className='not-found my-5'>
      <div className='container flex items-center justify-center'>
        <p className="text-3xl font-bold">Can't find</p>
      </div>
      <div className='container flex items-center justify-center mt-4'>

      <p style={{ textDecoration: 'underline' }}>
        <input
          type="text"
          placeholder="Search on YouTube"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        </p>
        <button
          type="button"
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-blue-500 text-black rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 form-submit-btn text-uppercase fs-14"
        >
          <BsSearch className='btn-icon' size={20} />
        </button>
      </div>
      <div className='container mt-8'>
        {searchResults.map((video) => (
          <div key={video.id.videoId} className="mb-4">
            <h3 className="text-xl font-semibold">{video.snippet.title}</h3>
            <YouTube videoId={video.id.videoId} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotFound;
