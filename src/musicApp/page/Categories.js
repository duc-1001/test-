import React, { useState } from 'react';

// Dữ liệu mẫu về các thể loại âm nhạc
const categories = [
  { id: 1, name: 'Pop' },
  { id: 2, name: 'Rock' },
  { id: 3, name: 'Jazz' },
  { id: 4, name: 'Classical' },
  { id: 5, name: 'Electronic' },
  // Thêm các thể loại khác ở đây
];

// Dữ liệu mẫu về các bài hát theo thể loại
const songs = {
  Pop: [
    { id: 1, title: 'Song 1', artist: 'Artist 1' },
    { id: 2, title: 'Song 2', artist: 'Artist 2' },
  ],
  Rock: [
    { id: 3, title: 'Song 3', artist: 'Artist 3' },
    { id: 4, title: 'Song 4', artist: 'Artist 4' },
  ],
  Jazz: [
    { id: 5, title: 'Song 5', artist: 'Artist 5' },
    { id: 6, title: 'Song 6', artist: 'Artist 6' },
  ],
  Classical: [
    { id: 7, title: 'Song 7', artist: 'Artist 7' },
    { id: 8, title: 'Song 8', artist: 'Artist 8' },
  ],
  Electronic: [
    { id: 9, title: 'Song 9', artist: 'Artist 9' },
    { id: 10, title: 'Song 10', artist: 'Artist 10' },
  ],
};

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('Pop');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="p-6">
      {/* Header - Danh sách các thể loại */}
      <h1 className="text-3xl font-bold mb-4">Categories</h1>
      <div className="flex space-x-6 mb-6">
        {categories.map(category => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-lg text-white ${selectedCategory === category.name ? 'bg-blue-500' : 'bg-gray-500'}`}
            onClick={() => handleCategoryChange(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Danh sách bài hát theo thể loại đã chọn */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Songs in {selectedCategory} Category</h2>
        <div className="space-y-4">
          {songs[selectedCategory].map(song => (
            <div key={song.id} className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-xl font-semibold">{song.title}</h3>
              <p className="text-gray-600">Artist: {song.artist}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
