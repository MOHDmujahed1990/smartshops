import {Card,CardContent} from "@mui/material"
import { Navbar } from "./Components/Navbar";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Home} from "./Components/Home"
import {Services} from "./Components/Services"
import {Contact} from "./Components/Contact"
import {AboutUs} from "./Components/AboutUs"
import { Help } from "./Components/Help";
import { Shopping } from "./Components/Shopping";


function App() {
  return (
    <div >
      <Card sx={{bgcolor:"#F0FFFF"}}>
        <CardContent>
         <BrowserRouter>
         <Navbar/>
           <br/>
             <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/shopping" element={<Shopping/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/aboutus" element={<AboutUs/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/help" element={<Help/>}/>
             </Routes>
         </BrowserRouter>
      </CardContent>
      </Card>
    </div>
  );
}

export default App;
