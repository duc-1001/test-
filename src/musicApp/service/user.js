import request from "../config/axois";

const updateProfileUser = (formData) => {
    return request.post('user/update-profile', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}


export {
    updateProfileUser,
}