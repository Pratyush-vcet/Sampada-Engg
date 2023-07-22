import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Slider from '../components/Slider/Slider';
import { slidesData } from '../components/Slider/SliderData'; 
import Prods from '../components/Slideslider/Prods';
import Die from '../components/Slideslider/Die';
import Values from '../components/Values/Values';
function Home () {
    return(
        <>
      <Navbar/>
      <Slider slides={slidesData}/>
      <Values/>
      <Die/>
      <Prods/>
      <Footer/>
        </>
    );
}

export default Home;