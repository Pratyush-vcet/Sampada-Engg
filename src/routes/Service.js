import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar//Navbar';
import SImg from '../assets/3.jpg'
import Footer from '../components/Footer/Footer';
import Die from '../components/Productdata/Die'
import Products from '../components/Productdata/Products';

function Service() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-about"
                heroImg={SImg}
                title='Services'
            />
            <Die />
            <Products/>
            <Footer />
        </>
    )
}

export default Service;