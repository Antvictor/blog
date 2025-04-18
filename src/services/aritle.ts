import axios from "axios"

export const getAritleList = () => axios.get("/api/aritle/list");