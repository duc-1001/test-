import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:8080/'
})

request.interceptors.request.use(
    // async (config) => {
    //     let date = new Date();
    //     const decodedToken = jwtDecode(user?.accessToken);
    //     if (decodedToken && decodedToken.exp && decodedToken?.exp < date.getTime() / 1000) {
    //         const data = await handleRefreshToken(user);
    //         if (data) {
    //             // user.accessToken = data.accessToken; // Cập nhật accessToken mới cho user
    //             // user.refreshToken = data.refreshToken; // Cập nhật accessToken mới cho user
    //             config.headers['token'] = 'Bearer ' + data.accessToken; // Thêm token mới vào header
    //             dispatch(update(data)); // Gọi hàm next để cập nhật thông tin user trong Redux hoặc Context
    //         }
    //     } else {
    //         config.headers['token'] = 'Bearer ' + user.accessToken; // Thêm token hiện tại vào header
    //     }
    //     return config;
    // },
    // (err) => {
    //     return Promise.reject(err);
    // }
);

request.interceptors.response.use(
    (response) => {
        return response.data
    }
)



export default request