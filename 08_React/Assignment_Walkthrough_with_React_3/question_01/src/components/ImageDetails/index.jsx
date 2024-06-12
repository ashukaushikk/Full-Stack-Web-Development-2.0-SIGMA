import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ImageDetails() {
  let { id } = useParams();
  const [images, setImages] = useState([]);

  async function downloadImages() {
    try {
      const response = await axios.get(
        `https://api.slingacademy.com/v1/sample-data/photos/${id}`
      );
      const responseResult = response.data.photo;
      console.log("responseResult", responseResult);

      setImages(responseResult);
    } catch (error) {
      console.error("Error fetching the images", error);
    }
  }

  useEffect(() => {
    downloadImages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <div
        className="border-2 border-red-800 Images-Details-Wrapper bg-[#081c3b] text-white flex justify-evenly items-center h-96 m-4"
        key={images?.id}
      >
        <div className="w-[30%] h-[70%] border-2 shadow-lg shadow-white rounded-xl overflow-hidden">
          <img className="" src={images?.url} alt={images?.title} />
        </div>
        <div className="w-[60%] flex flex-col gap-y-6">
          <div className="title text-4xl font-bold">{images?.title}</div>
          <div className="description text-xl">{images?.description}</div>
        </div>
      </div>
    </>
  );
}

export default ImageDetails;
