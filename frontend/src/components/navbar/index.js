import React from "react";

function Index() {
  const handleLogout = () => {
    localStorage.clear();
    console.log("hello");
  };

  return (
    <div>
      {" "}
      <button onClick={handleLogout}>log out</button>
    </div>
  );
}

export default Index;
