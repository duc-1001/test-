import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ModelOverlay from '../compoments/items/ModelOverlay';
import FormCreateNewArtist from '../compoments/forms/FormCreateNewArtist';

// Dữ liệu mẫu về các ca sĩ
const artists = [
  { id: 1, name: 'Artist 1', image: 'path_to_image1.jpg', bio: 'This is bio for Artist 1.' },
  { id: 2, name: 'Artist 2', image: 'path_to_image2.jpg', bio: 'This is bio for Artist 2.' },
  { id: 3, name: 'Artist 3', image: 'path_to_image3.jpg', bio: 'This is bio for Artist 3.' },
  // Thêm các ca sĩ khác ở đây
];

const Artists = () => {
  const user = useSelector(state => state.auth.user)
  const [openModel, setOpenModel] = useState(false)
  const handleCloseModel = () => {
    setOpenModel(false)
  }
  return (
    <>
      <div className="p-6">
        {
          user?.role === 'admin' &&
          <div className='flex gap-5 items-center mb-4'>
            <h1 className="text-3xl font-bold">Artists</h1>
            <div onClick={() => setOpenModel(true)} className='w-20 h-7 grid place-content-center rounded-xl bg-orange-500 cursor-pointer'>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
        }
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map(artist => (
            <div key={artist.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={artist.image} alt={artist.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{artist.name}</h2>
                <p className="text-gray-600">{artist.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {
        openModel && <ModelOverlay handleCloseModel={handleCloseModel}>
          <FormCreateNewArtist>
          </FormCreateNewArtist>
        </ModelOverlay>
      }
    </>
  );
};

export default Artists;
