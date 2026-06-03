import axios from 'axios';
import i18n from '../i18n';

const API_BASE_URL = "https://api.bedouintrails.com/api";
// custom api header or shared header
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});
// auth checking for the ednpoints that asks for auth or token
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('userToken')?.trim();
    if (token) {
        try {
            config.headers.Authorization = `Bearer ${token}`;
        } catch (error) {
            console.error('Invalid token format:', error);
            localStorage.removeItem('userToken');
        }
    }
    // Add language header based on current i18n language
    config.headers.lang = i18n.language || 'ar';
    return config;
}, (error) => {
    return Promise.reject(error);
});
// data fetching
const api = {
    getHomeData: () => apiClient.get('/home'),
    getAbout: () => apiClient.get('/about-us'),
    getAllTraps: () => apiClient.get("/traps"),
    getTrapDetails: async (id) => apiClient.get(`/traps/${id}`),
    login: (credentials) => apiClient.post('/login', credentials),
    register: (userData) => apiClient.post('/register', userData),
    logout: () => apiClient.post('/logout'),
    getProfile: () => apiClient.get('/profile'),
    // data checking for updating profile data
    updateProfile: (data) => {
        if (data instanceof FormData) {
            if (!data.has('_method')) {
                data.append('_method', 'put');
            }

            for (let [key, value] of data.entries()) {
                console.log(`Profile update - ${key}: ${value}`);
            }

            return apiClient.post('/profile', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        }
        const formData = new FormData();
        formData.append('_method', 'put');

        if (data.first_name) formData.append('first_name', data.first_name);
        if (data.last_name) formData.append('last_name', data.last_name);
        if (data.phone) formData.append('phone', data.phone);
        if (data.email) formData.append('email', data.email);
        if (data.image) formData.append('image', data.image);

        if (data.current_password) formData.append('current_password', data.current_password);
        if (data.password) formData.append('password', data.password);
        if (data.password_confirmation) formData.append('password_confirmation', data.password_confirmation);
        // custom header for updateProfile
        return apiClient.post('/profile', formData, {
            headers: {
                'Accept': 'application/json',
            }
        });
    },
    changePassword: (data) => apiClient.post('/reset-password', data),
    getMyOrders: () => apiClient.get('/my-orders'),
    getMyOrderById: async (id) => {
        const response = await apiClient.get('/my-orders');
        if (response.data && response.data.data) {
            const order = response.data.data.find(order => order.id === parseInt(id));
            return { data: { status: true, data: order } };
        }
        return { data: { status: false, data: null } };
    },
    verifyOtp: (data) => apiClient.post('/verify-otp', data),
    resendOtp: (data) => apiClient.post('/resend-code', data),
    forgetPassword: (email) => apiClient.post('/forget-password', { email }),
    resetPassword: (data) => apiClient.post('/reset-password', data),
    addReview: (reviewData) => apiClient.post('/reviews', reviewData),
    getFAQ: () => apiClient.get('/common-questions'),
    getAllArticles: () => apiClient.get('/articles'),
    addOrder: (data) => apiClient.post('/orders', data),
    getOrderDetails: (id) => apiClient.get(`/order-details/${id}`),
    cancellOrder: (id) => apiClient.post(`/orders/${id}`, {
        _method: "put"
    })
};

export default api;
