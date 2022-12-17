import React from "react";
import styles from "/Users/gilleszwijsen/patronasxdxd.github.io/Website/client/src/css/mystyle.module.css"
import Typed from 'react-typed';



const About = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (


  
    
    <div className="flex flex-col item-center justify-center bg-midnight">

<div className= "m-auto">
<img
    src="./images/me2.png  "
    class="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl"
    alt=""
  />

  </div>


<div className="m-auto">
  <div className={styles.title }>
  <Typed className="text-white " style={{ maxWidth:600 }}

strings= {["0xPatronas"]}


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
