import axios from "axios";

export const getLastComment = () => axios.get("/api/comment/last");