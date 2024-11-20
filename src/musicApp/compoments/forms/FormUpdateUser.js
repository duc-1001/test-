import { faPencil, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { updateProfileUser } from "../../service/user";
import { useDispatch } from "react-redux";
import { update as updateAction } from "../../redux/slice/authSlice"; 

const FormUpdateUser = (props) => {
    const dispatch = useDispatch()
    const { user, handleCloseModel } = props
    const [loading,setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: user?.email || '',
        username: user?.username || '',
        avatar: null,
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prevState => ({
            ...prevState,
            avatar: file,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('username', formData.username);
        data.append('id', user.id);
        if (formData.avatar) {
            data.append('avatar', formData.avatar);
        }
        setLoading(true)
        const res = await updateProfileUser(data)
        if(res.status===0){
            dispatch(updateAction(res.user))
            handleCloseModel()
        }
        setLoading(false)
    };
    return (
        <form onSubmit={handleSubmit} className="bg-white text-black p-6 rounded-lg shadow-lg w-[500px] mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4">Update Profile</h2>

            {/* Avatar */}
            <div className="mb-4">
                <div className="block text-gray-700">Avatar</div>
                <label className="w-52 h-52 border border-gray-300 rounded-full block m-auto cursor-pointer overflow-hidden" htmlFor="avatar">
                    <img src={formData?.avatar ? URL.createObjectURL(formData.avatar) :user?.avatar } alt="avatar" className="w-full h-full object-cover overflow-hidden" />
                </label>
                <input
                    type="file"
                    id="avatar"
                    name="avatar"
                    onChange={handleFileChange}
                    hidden
                    className="w-full  px-4 py-2 mt-2 rounded-md border border-gray-300"
                />
            </div>

            {/* Email */}
            <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    className="w-full  px-4 py-2 mt-2 rounded-md border border-gray-300"
                    disabled
                />
            </div>

            {/* Username */}
            <div className="mb-4">
                <label className="block text-gray-700" htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full  px-4 py-2 mt-2 rounded-md border border-gray-300"
                />
            </div>

            {/* New Password */}
            <div className="mb-4">
                <label className="block text-gray-700" htmlFor="newPassword">New Password</label>
                <div className="flex items-center justify-between w-full  px-4 py-2 mt-2 rounded-md border border-gray-300">
                    <div className="translate-y-[3px]">**************</div>
                    <FontAwesomeIcon className=" cursor-pointer" icon={faPencil} />
                </div>
            </div>

            <div className="flex justify-between">
                <button
                    type="button"
                    onClick={handleCloseModel}
                    className="bg-gray-500 px-4 py-2 rounded-full text-white font-semibold hover:bg-gray-600"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="bg-orange-500 px-4 py-2 rounded-full text-white font-semibold hover:bg-orange-600"
                >
                    {
                        loading ? <div className="animate-spin"><FontAwesomeIcon icon={faSpinner}/></div> :'Save Changes'
                    }
                </button>
            </div>
        </form>
    )
}

export default FormUpdateUser