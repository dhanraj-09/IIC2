import axios from "axios";


const URL= "http://localhost:8080";

export async function sendData(data)
{
    try
    {
        const response = await axios.post(`${URL}/`,data,{
        });
        console.log("Data sent successfully:",response.data);
        return response.data;
    }
    catch(error)
    {
        console.error("Error sending data:",error.message);
        throw new Error(error.message);
    }
}

export async function fetchNotices()
{
    try
    {
        const response = await axios.get(`${URL}/notice`,{
        });
        console.log("Data fetched successfully:",response.data);
        return response.data;
    }
    catch(error)
    {
        console.error("Error fetching data:",error.message);
        throw new Error(error.message);
    }
}