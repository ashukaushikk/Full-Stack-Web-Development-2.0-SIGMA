import {Routes, Route} from 'react-router-dom'
import Category from "../components/Category"
import GitHubUserDetails from "../components/GitHubUserDetails"

function CustomRoutes () {
    return (
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/photo/:id" element={<GitHubUserDetails />} />
      </Routes>
    );
}

export default CustomRoutes;