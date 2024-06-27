// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function useGitHubUserDetails(id, name) {
  const [userDetails, setUserDetails] = useState([]);
  async function downloadImages() {
    let response;
    try {
      const endpoint = name
        ? `https://api.github.com/users/${name}`
        : `https://api.github.com/users/${id}`;
      response = await axios.get(endpoint);
      console.log("response :", response);
      const responseResult = response.data;
      setUserDetails(responseResult);
    } catch (error) {
      console.error("Error fetching the userDetails", error);
    }
  }
  useEffect(() => {
    downloadImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  console.log("userDetails :", userDetails);
  return { userDetails };
}