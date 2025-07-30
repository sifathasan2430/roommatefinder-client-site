import axios from "axios";
import React from "react";

const getFilteredRooms = async (filters={} ) => {
  const res = await axios.get(
    "https://roommatefinder-server-site.vercel.app/rooms",
    {
      params: filters,
    }
  );
 
  return res.data
};
export default getFilteredRooms