import React, { useState } from 'react';

function App() {
  const videos = [
    { id: 1, title: 'Video 1', author: 'Author 1', rating: 4.5, url: '../src/assets/data/vid1.mp4', description: 'Description 1' },
    { id: 2, title: 'Video 2', author: 'Author 1', rating: 4.5, url: '../src/assets/data/vid1.mp4', description: 'Description 1' },
    { id: 3, title: 'Video 3', author: 'Author 1', rating: 4.5, url: '../src/assets/data/vid1.mp4', description: 'Description 1' },
    { id: 4, title: 'Video 4', author: 'Author 1', rating: 4.5, url: '../src/assets/data/vid1.mp4', description: 'Description 1' },
    { id: 5, title: 'Video 5', author: 'Author 1', rating: 4.5, url: '../src/assets/data/vid1.mp4', description: 'Description 1' },
    { id: 6, title: 'Video 6', author: 'Author 1', rating: 4.5, url: '../src/assets/data/vid1.mp4', description: 'Description 1' },
    { id: 7, title: 'Video 7', author: 'Author 1', rating: 4.5, url: '../src/assets/data/vid1.mp4', description: 'Description 1' },
    { id: 8, title: 'Video 8', author: 'Author 1', rating: 4.5, url: '../src/assets/data/vid1.mp4', description: 'Description 1' },
    { id: 9, title: 'Video 9', author: 'Author 1', rating: 4.5, url: '../src/assets/data/vid1.mp4', description: 'Description 1' },
    { id: 10, title: 'Video 10', author: 'Author 1', rating: 4.5, url: '../src/assets/data/vid1.mp4', description: 'Description 1' },
    // Add more video objects as needed
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [selectedVideo, setSelectedVideo] = useState(videos[0]); // Set the default selected video to the first video in the array

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const matchedVideos = videos.filter(video =>
      video.title.toLowerCase().includes(query)
    );
    setFilteredVideos(matchedVideos);
    setSearchQuery(query);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="bg-gray-900 m-0 p-0 h-[1300px] w-full relative">

      <div className='text-black left-0 ml-20  absolute top-6 '>
        <input
          type="text"
          placeholder="Search videos"
          value={searchQuery}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded-2xl w-[900px] h-8"
        />
      </div>

      <div className='text-white left-0 ml-5 absolute top-24'>
        {selectedVideo && (
          <div>
            <video src={`${selectedVideo.url}`} controls className='max-w-none w-[1000px] h-[500px]'></video>
          </div>
        )}
      </div>

      <div className='text-white left-0 ml-5 absolute top-[620px]'>
        <div>
          {
            selectedVideo && (
              <div className=' font-bold text-white text-4xl '>
                {selectedVideo.title}
              </div>
            )
          }
        </div>

        <div className=' mt-3'>
          {
            selectedVideo && (
              <div className=' font-normal text-white text-2xl '>
                {selectedVideo.description}
              </div>
            )
          }
        </div>
      </div>

      <div className="bg-gray-700 w-1 h-full absolute top-0 right-[336px]"></div>

      <div className='text-white right-0 mr-10 absolute top-0 h-full overflow-y-auto'>
        <nav className="w-64">
          <div className="flex items-center justify-center mt-6">
            <div className="text-white text-xl font-semibold">Videos</div>
          </div>
          <ul className="mt-6">
            {filteredVideos.map(video => (
              <li
                key={video.id}
                className="pl-4 py-2 text-white hover:bg-gray-700 cursor-pointer"
                onClick={() => handleVideoSelect(video)}
              >
                <h2 className="text-lg font-medium">{video.title}</h2>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
