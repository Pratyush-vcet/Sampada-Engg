import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import CImg from '../assets/2.jpg'
import Footer from '../components/Footer/Footer';
import Form from '../components/Form/Form';

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={CImg}
        title='Contacts'
      />
      <Form />
      <Footer />
    </>
  )
}

export default Contact;