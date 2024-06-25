import useGitHubUsers from "../../Hooks/useGitHubUsersjs";
import GitHubImages from "../GitHubImages";

function GitHubUsers() {
  const { count, usersListState, setUsersListState } = useGitHubUsers();

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="font-extrabold text-4xl">List of Images</h1>
      <div className="flex gap-3 text-white">
        <button
          disabled={count === 0}
          onClick={() => {
            setUsersListState((state) => ({
              ...state,
              count: state.count - 12,
              [usersListState.isLoading]: true,
            }));
          }}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          {" "}
          Previous
        </button>
        <button
          onClick={() => {
            count <= usersListState.totalUsers
              ? setUsersListState((state) => ({
                  ...state,
                  count: state.count + 12,
                  [usersListState.isLoading]: true,
                }))
              : null;
          }}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
      <div className="images_wrapper flex flex-wrap gap-y-10 justify-evenly">
        {usersListState.isLoading
          ? "Loading..."
          : usersListState.imageList.map((r) => (
              <GitHubImages
                key={r.id}
                id={r.id}
                first_name={r.first_name}
                last_name={r.last_name}
                image={r.image}
                city={r.city}
              />
            ))}
      </div>
    </div>
  );
}

export default GitHubUsers;
