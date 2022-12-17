import { Navbar, Welcome ,Projects,Skills,About} from "./components";


const App = () => (
  
  <div className="min-h-screen gradient-bg-welcome">
    <div className="">
  
      <Navbar />
      <About/>
      <Welcome />
      <About/>
      <Skills/>
      <Projects/>
    {/* <div className="flex justify-end gap-2 "> */}
      
      
      
    {/* </div> */}
    </div>
  </div>
);

export default App;
