import React from "react";
import styles from "/Users/gilleszwijsen/loan/client/src/css/mystyle.module.css"



const About = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    
    <div className="flex flex-col item-center justify-center">

<div className= "m-auto">
<img
    src="./images/me2.png  "
    class="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl"
    alt=""
  />

  </div>




<div className={styles.shadowxd2 }>
     <h2 className="text-white text-4xl text-base text-center mx-2"> 0xPatronasxd  </h2>
     </div>



    </div>

    


   


  );
};

export default About;
