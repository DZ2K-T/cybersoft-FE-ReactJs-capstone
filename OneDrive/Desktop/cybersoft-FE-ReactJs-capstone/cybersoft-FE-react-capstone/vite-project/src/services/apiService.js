import axios from "axios";
const api = axios.create({
    baseURL: "https://movienew.cybersoft.edu.vn/api/",
});
api.interceptors.request.use((config) => {
    // const accessToken = localStorage.getItem("USER_ADMIN") ? JSON.parse(localStorage.getItem("USER_ADMIN")).accessToken : "";
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoidGgwOTEwYUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsia2hhY2hoYW5nIiwidGgwOTEwYUBnbWFpbC5jb20iLCJHUDAwIl0sIm5iZiI6MTczMzI0NzUwMiwiZXhwIjoxNzMzMjUxMTAyfQ.t2E6x1iH_BppQePJZkoQnpJOvdDOfVNKjqXyVlcQk04";
    config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
        TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3NSIsIkhldEhhblN0cmluZyI6IjE0LzA1LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0NzE4MDgwMDAwMCIsIm5iZiI6MTcyMDg5MDAwMCwiZXhwIjoxNzQ3MzI4NDAwfQ.bqygxoVHbmcy6bdDT5IDHZGoA3eMAp4YV6_E_dO_XxI"
    };
    console.log(accessToken)
    return config;
});
export default api;