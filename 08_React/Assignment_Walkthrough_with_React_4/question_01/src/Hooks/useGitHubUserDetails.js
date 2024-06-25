// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function useGitHubUserDetails(id, username) {
  const [userDetails, setUserDetails] = useState([]);
  async function downloadImages() {
    let response;
    try {
      const endpoint = username
        ? `https://api.slingacademy.com/v1/sample-data/users/${username}`
        : `https://api.slingacademy.com/v1/sample-data/users/${id}`;
      response = await axios.get(endpoint);

      const responseResult = response.data.user;
      setUserDetails(responseResult);
    } catch (error) {
      console.error("Error fetching the userDetails", error);
    }
  }
  useEffect(() => {
    downloadImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return { userDetails };
}
