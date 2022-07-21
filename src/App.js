import React from 'react';
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="bg-[#edeef03b] h-screen">
      <Outlet />
    </div>
  );
}

export default App;
