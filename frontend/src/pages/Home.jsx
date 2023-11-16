// import { Announcement } from '../Components/Announcement/Announcement';
import Categories from '../Components/Categories/Categories';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import Products from '../Components/Products/Products';
import PublicCustomer from '../Components/ProfileCustomer';
import Slider from '../Components/Slider/slider';

const parallaxStyle = {
  position: 'relative',
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: 'url("/img/parallax.jpg")', // Substitua com o caminho da sua imagem
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: 1,
};

const Home = () => {
  return (
    <>
      {/* <Announcement /> */}
      <Navbar />
      <div style={parallaxStyle}>
        <Slider />
      </div>
      <PublicCustomer />
      <Categories />
      <Products />
      <Footer />
    </>
  );
};

export default Home;
