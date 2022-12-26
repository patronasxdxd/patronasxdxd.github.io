import React from "react";
import { Button } from "web3uikit";


const Projects = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    


  

    // animate-bounce w-6 h-6

    <div class="flex flex-wrap justify-center ">



  {/* <img
    src="./images/loan.png"
    className="max-w-sm h-auto hover:bg-slate-100"    alt=""
  />

<img
    src="./images/doa.png"
    className="max-w-sm h-auto hover:bg-slate-100"   alt=""
  /> */}




  <div className="relative">
    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-0 duration-300">
    <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded  animate-bounce" target="_blank" href="https://github.com/patronasxdxd/patronasxdxd.github.io">Code</a>
    <a class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded  animate-bounce" target="_blank" href="https://patronasxdxd.github.io/loan">Demo</a>
    </a>
    <a href="https://patronasxdxd.github.io/Loan" className="relative">
        <div className="flex flex-wrap content-center">
            <img src="./images/loan2.png" className="mx-auto  " alt=""></img>
        </div>
    </a>
  </div>


<div className="relative ">
    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-0 duration-300">
    <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded animate-bounce" target="_blank" href="https://github.com/patronasxdxd/patronasxdxd.github.io/tree/main/Dao">Code</a>
    <a class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded animate-bounce" target="_blank" href="https://patronasxdxd.github.io/Daox">Demo</a>
    </a>
    <a href="https://patronasxdxd.github.io/Daox" className="relative">
        <div className="flex flex-wrap content-center">
            <img src="./images/doa2.png" className="mx-auto  " alt=""></img>
        </div>
    </a>
  </div>


  <div className="relative ">
    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-0 duration-300">
    <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded animate-bounce" target="_blank" href="https://github.com/patronasxdxd/Runescape">Code</a>
    <a class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded animate-bounce" target="_blank" href="https://patronasxdxd.github.io/Runescape">Demo</a>
    </a>
    <a href="https://github.com/patronasxdxd/Runescape" className="relative">
        <div className="flex flex-wrap content-center">
            <img src="./images/Runescape.png" className="mx-auto  " alt=""></img>
        </div>
    </a>
  </div>


  <div className="relative">
    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-0 duration-300">
    <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded animate-bounce" target="_blank" href="https://github.com/patronasxdxd/Monopoly">Code</a>
    <a class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded animate-bounce" target="_blank" href="https://patronasxdxd.github.io/Monopoly">Demo</a>
    </a>
    <a href="https://patronasxdxd.github.io/Daox" className="relative">
        <div className="flex flex-wrap content-center">
            <img src="./images/Monopoly.png" className="mx-auto "  alt=""></img>
        </div>
    </a>
  </div>




</div>


  );
};

export default Projects;
