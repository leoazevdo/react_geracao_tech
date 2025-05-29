import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home"
import Produtos from "../pages/Produtos"
import Header from "../components/Header"
import Footer from "../components/Footer";

const Paths = () => {
    return ( 
            <>
              <BrowserRouter>
              <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/Produtos" element={<Produtos/>}/>
                    </Routes>
              <Footer/>
              </BrowserRouter>
            </>
        )
        }
     
 
export default Paths;
