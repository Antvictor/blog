import axios from "axios";

export const getUserList = () => axios.get("/api/user");