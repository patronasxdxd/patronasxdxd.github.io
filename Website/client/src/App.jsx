import { Navbar, Welcome ,Projects,Skills,About} from "./components";


const App = () => (
  
  <div className="min-h-screen ">
    <div className="">
  
      <Navbar />
      <About/>
      <br/>
<br/>
<br/>
      
    
    <Projects/>
    <br/>
<br/>
<br/>
      {/* <Skills/> */}

      <br/>
<br/>
<br/>

      <Welcome />
      
    <div className="flex justify-end gap-2 ">
      
      
    </div>
    </div>
  </div>
);

export default App;
