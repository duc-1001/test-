import React from 'react';
// Nếu bạn sử dụng Tailwind, có thể không cần file CSS này

const Home = () => {
    return (
        <div>
            <div className=''>
                {/* Featured Song */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
                    <div className="w-full md:w-1/3">
                        <img
                            src="https://placehold.co/300x300"
                            alt="Echoes of Midnight"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/3">
                        <img
                            src="https://placehold.co/300x300"
                            alt="Echoes of Midnight"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/3">
                        <img
                            src="https://placehold.co/300x300"
                            alt="Echoes of Midnight"
                            className="rounded-lg"
                        />
                    </div>
                </div>

                {/* Categories */}
                <div className="mb-8">
                    <div className="text-lg font-semibold mb-4">Select Categories</div>
                    <div className="flex flex-wrap space-x-2">
                        {['All', 'Relax', 'Sad', 'Party', 'Romance', 'Energetic', 'Relaxing', 'Jazz', 'Alternative'].map(category => (
                            <button key={category} className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full mb-2 hover:bg-green-500">
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Popular Songs */}
                <div>
                    <div className="text-lg font-semibold mb-4">Popular songs</div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                        {['Golden Days', 'Fading Horizon', 'Waves of Time', 'Electric Dreams', 'Shadows & Light', 'Echoes of Midnight'].map((song, index) => (
                            <div key={index} className="mb-4">
                                <img src={`https://placehold.co/150x150`} alt={song} className="rounded-lg mb-2" />
                                <div className="text-sm font-semibold">{song}</div>
                                <div className="text-xs text-gray-400">Artist Name</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
