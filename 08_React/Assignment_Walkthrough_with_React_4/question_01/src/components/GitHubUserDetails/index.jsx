import { useParams } from "react-router-dom";
import { useGitHubUserDetails } from "../../Hooks/useGitHubUserDetails";

// eslint-disable-next-line react/prop-types
function GitHubUserDetails({ username }) {
  let { id } = useParams();
  const { userDetails } = useGitHubUserDetails(id, username);
  return (
    <>
      <div
        className="border-2 border-red-800 Images-Details-Wrapper bg-[#081c3b] text-white flex justify-evenly items-center h-96 m-4"
        key={userDetails?.id}
      >
        <div className="w-[30%] h-[70%] border-2 shadow-lg shadow-white rounded-xl overflow-hidden">
          <img className="w-full h-full object-center" src={userDetails?.profile_picture} alt={""} />
        </div>
        <div className="w-[60%] flex flex-col gap-y-6">
          <div className="title text-4xl font-bold">
            {`${userDetails?.first_name} ${userDetails?.last_name}`}
          </div>
          <div className="title text-4xl font-bold">
            {userDetails?.city}
          </div>

        </div>
      </div>
    </>
  );
}

export default GitHubUserDetails;
