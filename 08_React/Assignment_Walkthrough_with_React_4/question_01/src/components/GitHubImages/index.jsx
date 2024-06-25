import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function GitHubImages({ id, image, first_name }) {
  return (
    <>
      <div className="rounded-2xl overflow-hidden">
        <div key={id} className="">
          <Link to={`/photo/${id}`}>
            <div className="relative">
              <img src={image} alt="" className="object-cover" width={280} />
              <div className="title bg-white font-black text-xs absolute bottom-3 left-0 w-32 rounded-r-lg">
                {first_name}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default GitHubImages;
