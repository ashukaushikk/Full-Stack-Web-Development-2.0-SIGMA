import useGitHubUsers from "../../Hooks/useGitHubUsersjs";
import GitHubImages from "../GitHubImages";

function GitHubUsers() {
  const { usersListState } = useGitHubUsers();

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="font-extrabold text-4xl">List of Images</h1>
      <div className="images_wrapper flex flex-wrap gap-y-10 justify-evenly">
        {usersListState.isLoading
          ? "Loading..."
          : usersListState.imageList.map((r, key) => (
              <GitHubImages
                key={key}
                id={r.login}
                name={r.login}
                image={r.image}
                city={r.city}
              />
            ))}
      </div>
    </div>
  );
}

export default GitHubUsers;
