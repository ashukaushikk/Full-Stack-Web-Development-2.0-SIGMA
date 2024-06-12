import { useEffect, useState } from "react";
import axios from "axios";
import Images from "../Images";

function ListOfImages() {
  const [imageList, setimageList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [totalImages, setTotalImages] = useState("");

  const URL = `https://api.slingacademy.com/v1/sample-data/photos?offset=${count}&limit=12`;

  async function downloadImages() {
    const response = await axios.get(URL); //this downloads list of 5 images
    const imagesResults = response.data.photos;
    const totalPhotos = response.data.total_photos;

    // now iterate on the data of each images, and extact id, title, description, user & image
    const res = imagesResults.map((imagesData) => {
      return {
        id: imagesData.id,
        title: imagesData.title,
        description: imagesData.description,
        image: imagesData.url,
      };
    });

    setimageList(res);
    setTotalImages(totalPhotos);
    setIsLoading(false);
  }
  console.log("totalImages", totalImages);
  useEffect(() => {
    downloadImages();
  }, [count]);

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="font-extrabold text-4xl">List of Images</h1>
      <div className="flex gap-3 text-white">
        <button
          disabled={count === 0}
          onClick={() => {
            setCount(count - 12);
          }}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          Previous
        </button>
        <button
          onClick={() => {
            count <= totalImages ? setCount(count + 12) : null;
          }}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
      <div className="images_wrapper  flex flex-wrap justify-evenly">
        {isLoading
          ? "Loading..."
          : imageList.map((r) => (
              <Images
                key={r.id}
                id={r.id}
                title={r.title}
                description={r.description}
                image={r.image}
              />
            ))}
      </div>
    </div>
  );
}

export default ListOfImages;
