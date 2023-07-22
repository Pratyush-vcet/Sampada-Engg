import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import aboutImg from '../assets/night.jpg'
import Footer from '../components/Footer/Footer';
import AboutUs from '../components/About/AboutUs';

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={aboutImg}
        title='About Us'
        url='/'
      />
      <AboutUs />
      <Footer />
    </>
  )
}

export default About;