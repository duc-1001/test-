import React, { useState } from 'react';
import axios from 'axios';

const FormCreateNewArtist = () => {
    const [name, setName] = useState('');  // Tên nghệ sĩ
    const [area, setArea] = useState('');  // Khu vực (hoặc quốc gia)
    const [avatar, setAvatar] = useState(null);  // Ảnh đại diện

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Gửi dữ liệu
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('area', area);
            if (avatar) {
                formData.append('avatar', avatar);  // Chỉ gửi avatar nếu có
            }

            const response = await axios.post('http://localhost:5000/api/artists/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',  // Đảm bảo gửi dưới dạng multipart
                },
            });
            alert('Artist created successfully!');
            console.log(response.data);
        } catch (error) {
            console.error('Error creating artist:', error);
            alert('Error creating artist');
        }
    };

    const handleAvatarChange = (e) => {
        setAvatar(e.target.files[0]);
    };

    return (
        <div className="flex text-black justify-center items-center">
            <div className="w-[500px] bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add a New Artist</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                        <input
                            type="text"
                            id="name"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="area" className="block text-sm font-medium text-gray-700">Area:</label>
                        <select
                            id="area"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                            required
                        >
                            <option value="">Select Area</option>
                            <option value="Asia">Asia (Châu Á)</option>
                            <option value="Europe">Europe (Châu Âu)</option>
                            <option value="Americas">Americas (Châu Mỹ)</option>
                            <option value="Oceania">Oceania (Châu Đại Dương)</option>
                            <option value="Africa">Africa (Châu Phi)</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <div className='block text-sm font-medium text-gray-700'>Upload Avatar:</div>
                        <label htmlFor="avatar" className="block w-72 h-72 border cursor-pointer rounded-full m-auto overflow-hidden">
                            <img src={avatar ? URL.createObjectURL(avatar) : ''} alt='avatar_artist'  className='w-full h-full object-cover'/>
                        </label>
                        <input
                            type="file"
                            id="avatar"
                            onChange={handleAvatarChange}
                            hidden
                        />
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Add Artist
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormCreateNewArtist;
