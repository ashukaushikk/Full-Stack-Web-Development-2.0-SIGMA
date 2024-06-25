import { useState } from "react";
import GitHubUsers from "../GitHubUsers";
import Search from "../Search";
import GitHubUserDetails from "../GitHubUserDetails";

function Category() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="flex flex-col gap-y-4 justify-between items-center">
        <Search updateSearchTerm={setSearchTerm} />
        {(!searchTerm) ? (<GitHubUsers />) : (<GitHubUserDetails key={searchTerm} username={searchTerm}/>
        )}
      </div>
    </>
  );
}

export default Category;
