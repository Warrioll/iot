import axios from "axios";


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL as string

export const getPowerUsageData = async  (from: Date, to: Date): Promise<{value: number, time: string}[]>=>{

    const response = await axios.get(`${BACKEND_URL}/powerUsage/${from}/${to}`, {
        withCredentials: true
    })
    console.log(response.data)
    return response.data
}