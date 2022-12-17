import React from "react";
import styles from "/Users/gilleszwijsen/patronasxdxd.github.io/Website/client/src/css/mystyle.module.css"
import Typed from 'react-typed';



const About = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (


  
    
    <div id="aboutus" className="flex flex-col item-center justify-center">

<div className= "m-auto">

<img
    src="./images/me2.png  "
    class="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none "
    alt=""
  />

  </div>



<div className="m-auto"> 
  <div className={styles.title }>
  <Typed className="text-green-600 " style={{ maxWidth:600 }}

strings= {["0xPatronas", "Solidity Developer"]}


typeSpeed= {60}
backSpeed={100}
loop
/>

 </div>
</div>






{/* 
<div className={styles.shadowxd2 }>
     <h2 className="text-white text-4xl text-base text-center mx-2"> 0xPatronasxd  </h2>
     </div> */}



    </div>

    
  


   


  );
};

export default About;
