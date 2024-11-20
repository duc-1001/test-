import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Header = (props) => {
    const {user} = props

    return (
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 sticky top-[0px] bg-gray-900">
            <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
                <input
                    type="text"
                    placeholder="Search for a song"
                    className="w-full bg-gray-700 text-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none"
                />
                <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 translate-y-[-50%] text-gray-400" />
            </div>
            {
                user?.id && <Link to={'/profile'} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <img src={user?.avatar} alt="User profile" className="w-8 h-8 rounded-full" />
                        <div>
                            <div className="text-sm font-semibold">{user?.username}</div>
                            <div className="text-xs text-green-500">Premium</div>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faCog} className="text-gray-400" />
                </Link>
            }
        </div>
    )
}

export default Header