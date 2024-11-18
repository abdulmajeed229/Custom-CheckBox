"use client"

import { useState } from "react";

function App() {

  const [isChecked, setIsChecked] = useState(false);

  return (

    <div className="h-[100vh] w-full flex justify-center items-center">
     
      <div
        onClick={() => setIsChecked(!isChecked)}
        className="h-[50px] w-[50px] bg-green-950 rounded-full flex justify-center items-center cursor-pointer"
      >
        {
        isChecked && (
          <span className="text-white text-[30px] font-extrabold">&#10003;</span>
        )}
      </div>
    </div>
  );
}

export default App;
