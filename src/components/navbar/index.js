import React from "react";
import { useHistory } from "react-router-dom";
function Index() {
  let history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <div>
      {" "}
      <button onClick={handleLogout}>log out</button>
    </div>
  );
}

export default Index;
