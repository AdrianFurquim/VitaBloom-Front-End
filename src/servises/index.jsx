import axios from "axios";

export default axios.create({
    // Mudar para a que estiver no back end
    baseURL: `http://localhost:3000/`
});