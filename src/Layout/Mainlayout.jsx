import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Mainlayout() {
  return (
    <div>
      {/*navbar*/}
      <Navbar/>
 

      {/*chidren*/}
      <Outlet/>

 
{/*footer*/}
<Footer/>
    </div>
  )
}
