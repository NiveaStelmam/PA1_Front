import axios from "axios";


// CONSUMIR O "CADASTRAR USUÁRIO"
const menuFetch = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
    },
});

export default menuFetch;