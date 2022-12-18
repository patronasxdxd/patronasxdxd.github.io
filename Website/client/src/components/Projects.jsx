import React from "react";
import { Button } from "web3uikit";
import { Helmet } from "react-helmet";

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
  
  );

const Projects = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    


  


    <div className="flex flex-col item-center justify-center">
        {/* <Helmet>
       <script> showFox(); </script>
       </Helmet>

       <div id="logo-container" className="h-7 w-7"></div>
 */}


    <div class="flex flex-wrap justify-center ">

    {/* <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism ">
    
     <h2 className="text-white text-3xl text-base text-center mx-2">Terms </h2>
  
    <Input placeholder="enter a loan amount" name="loanAmount" type="number" />
    <Input placeholder="Enter a fee amount" name="feeAmount" type="number"  />
    <Input placeholder="Enter a collateral amount" name="collAmount" type="number"  />
    <Input placeholder="Enter repayTimestamp" name="timestamp" type="number"/>

    <div className="h-[1px] w-full bg-gray-400 my-2" />

        <button
          type="button"
          
          className="text-white w-full text-xl mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
        >
          Send now
        </button>
      


  </div> */}






  <div className="relative opacity-90">
    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-0 duration-300">
    <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded  animate-bounce" target="_blank" href="https://github.com/patronasxdxd/patronasxdxd.github.io">Code</a>
    <a class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded  animate-bounce" target="_blank" href="https://patronasxdxd.github.io">Demo</a>
    </a>
    <a href="https://patronasxdxd.github.io" className="flex justify-end">
        <div className="flex flex-wrap content-center ">
            <img src="./images/loan2.png" className="mx-auto   " alt=""></img>
        </div>
    </a>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

  </div> 





<div className="relative ">
    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-0 duration-300">
    <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded animate-bounce" target="_blank" href="https://github.com/patronasxdxd/patronasxdxd.github.io">Code</a>
    <a class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded animate-bounce" target="_blank" href="https://patronasxdxd.github.io/Daox">Demo</a>
    </a>
    <a href="https://patronasxdxd.github.io/Daox" className="relative">
        <div className="flex flex-wrap content-center">
            <img src="./images/doa2.png" className="mx-auto  " alt=""></img>
        </div>
    </a>
  </div>





</div>
</div>


  );
};

export default Projects;
