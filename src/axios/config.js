import axios from "axios";

const menuFetch = axios.create({
    baseURL: "http://localhost:3000/usuarioru",
    headers: {
        "Content-Type": "application/json",
    },
});
//5173
export default menuFetch;