import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faThLarge, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { Link,NavLink } from 'react-router-dom';
import { logout as logoutAction } from '../../redux/slice/authSlice';

const Sidebar = (props) => {

    const { user } = props
    const dispatch = useDispatch()

    const handleLogoutUser = () => {
        dispatch(logoutAction())
    }

    return (
        <div className="w-full lg:w-64 bg-gray-800 p-6 rounded-lg relative">
            <div className="text-2xl font-bold text-orange-500 mb-8">
                RhythmoTune
            </div>
            <nav className="w-full">
                <div className='flex flex-col gap-4'>
                    <NavLink to={'/'} className={(e)=>{
                        return `flex cursor-pointer items-center space-x-2 ${e.isActive ? 'bg-orange-400 text-white':''} font-bold text-gray-300 hover:text-white px-6 py-2 rounded hover:bg-gray-700`
                    }}>
                        <FontAwesomeIcon icon={faHome} />
                        <span>Home</span>
                    </NavLink>
                    <NavLink to={'/categories'} className={(e)=>{
                        return `flex cursor-pointer items-center space-x-2 ${e.isActive ? 'bg-orange-400 text-white':''} font-bold text-gray-300 hover:text-white px-6 py-2 rounded hover:bg-gray-700`
                    }}>
                        <FontAwesomeIcon icon={faThLarge} />
                        <span>Categories</span>
                    </NavLink>
                    <NavLink to={'/artists'} className={(e)=>{
                        return `flex cursor-pointer items-center space-x-2 ${e.isActive ? 'bg-orange-400 text-white':''} font-bold text-gray-300 hover:text-white px-6 py-2 rounded hover:bg-gray-700`
                    }}>
                        <FontAwesomeIcon icon={faUser} />
                        <span>Artists</span>
                    </NavLink>

                </div>
                <div className='mt-4'>
                    <div className="text-gray-500 uppercase text-xs mb-2">Playlists</div>
                    <div className='flex flex-col gap-4 max-h-[calc(100vh-480px)] mt-3 overflow-y-auto'>
                        <div className="flex items-center space-x-2 text-gray-300 hover:text-white">
                            <img src="https://placehold.co/24x24" alt="Vibes & Chill" className="w-6 h-6 rounded-full" />
                            <span>Vibes & Chill</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-300 hover:text-white">
                            <img src="https://placehold.co/24x24" alt="Morning Boost" className="w-6 h-6 rounded-full" />
                            <span>Morning Boost</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-300 hover:text-white">
                            <img src="https://placehold.co/24x24" alt="Rhythm & Energy" className="w-6 h-6 rounded-full" />
                            <span>Rhythm & Energy</span>
                        </div>
                    </div>
                </div>

                <div className='absolute bottom-6 w-full left-0 px-5'>
                    {
                        user?.id ?
                            <div className='flex items-center gap-6'>
                                <Link to={'/profile'}>
                                    <img src={user?.avatar} alt='avatar' className='h-10 w-10 rounded-full cursor-pointer' />
                                </Link>
                                <div onClick={handleLogoutUser} className="flex flex-1 gap-3 items-center text-gray-300 hover:text-white px-6 py-2 rounded hover:bg-gray-700 cursor-pointer">
                                    <FontAwesomeIcon icon={faSignOutAlt} />
                                    <span>Logout</span>
                                </div>
                            </div>
                            :
                            <Link to={'/login'} className="flex items-center justify-center w-full space-x-2 text-gray-300 hover:text-white mt-8 px-6 py-2 rounded hover:bg-gray-700">
                                <FontAwesomeIcon icon={faSignOutAlt} />
                                <span>Login</span>
                            </Link>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Sidebar