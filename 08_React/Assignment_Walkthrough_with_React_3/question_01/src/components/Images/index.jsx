import { Link } from "react-router-dom";

function Images({ id, image }) {
  return (
    <div className="flex flex-col justify-center items-center text-center pt-2 pb-2 basis-[25%] text-sm hover:bg-[beige]">
      <Link to={`/images/${id}`}>
        <div><span className="font-bold">id:</span> {id}</div>
        <div className="">
          <img className="h-52 rounded-2xl object-cover" src={image} alt="" />
        </div>
      </Link>
    </div>
  );
}

export default Images;
