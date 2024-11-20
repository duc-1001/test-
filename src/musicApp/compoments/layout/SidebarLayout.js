import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faPlay, faForward, faHeart, faRandom, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './SideBar';
import { useSelector } from 'react-redux';

const SidebarLayOut = (props) => {
    const { children } = props
    const user = useSelector(state=>state.auth.user)
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <div className="flex flex-col lg:flex-row h-screen px-5 pt-10 pb-20">
                {/* Sidebar */}
                <Sidebar user={user} />

                {/* Main Content */}
                <div className="flex-1 px-6 flex flex-col max-h-[calc(100vh-100px)] overflow-y-auto">
                    {/* Header */}
                    {children}
                </div>
            </div>

            {/* Now Playing Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <img src="https://placehold.co/40x40" alt="Echoes of Midnight" className="w-10 h-10 rounded-lg" />
                    <div>
                        <div className="text-sm font-semibold">Echoes of Midnight</div>
                        <div className="text-xs text-gray-400">Jon Hickman</div>
                    </div>
                </div>
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <FontAwesomeIcon icon={faBackward} className="text-gray-400" />
                    <FontAwesomeIcon icon={faPlay} className="text-white" />
                    <FontAwesomeIcon icon={faForward} className="text-gray-400" />
                </div>
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                    <span className="text-xs text-gray-400">0:53</span>
                    <div className="w-64 bg-gray-700 h-1 rounded-full">
                        <div className="bg-green-500 h-1 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                    <span className="text-xs text-gray-400">3:58</span>
                </div>
                <div className="flex items-center space-x-4">
                    <FontAwesomeIcon icon={faHeart} className="text-gray-400" />
                    <FontAwesomeIcon icon={faRandom} className="text-gray-400" />
                    <FontAwesomeIcon icon={faVolumeUp} className="text-gray-400" />
                </div>
            </div>
        </div>
    )
}

export default SidebarLayOut