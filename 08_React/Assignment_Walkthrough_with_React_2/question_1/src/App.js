// Question:- 1 Creating a User Page like instragram using React Functionalities.

// Assignmnets Description :
// In this assignments, you will create a user page similar to instagram using React functionalites. The primary task is to implement conditional rendring, allowing user to either sign up or log in depeding on their choice. The user interface should show different input fields based on their selection. If they choose to sign up, additional inputs for registration will be displayed. On the other hand, if they opt for login, only the basic username and password inputs should be visible.

import Auth from "./modules/Authorization";

function App() {
  return <Auth />;
}

export default App;
