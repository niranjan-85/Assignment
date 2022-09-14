import { useState } from "react";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login"
import { UserList } from "./Constants/UserList";
import Dashboard from "./Components/Dashboard/Dashboard";


function App() {

  const [userData, setUserData] = useState(UserList);

  return (
    <div className="App">
      <Dashboard userDataList={userData} />
      <Login userDataList={userData} setUserDataList={setUserData} />
      <Register userDataList={userData} setUserDataList={setUserData} />
    </div>
  );
}

export default App;
