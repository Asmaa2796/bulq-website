import About from '../About/About';
import Brands from '../Brands/brands';
import Features from '../Features/Features';
import Services from '../Services/Services';
import WhyChoose from '../WhyChoose/WhyChoose';
import Hero from './../Hero/Hero';

const Home = () => {
    return (
        <>
            <Hero/>
            <About/>
            <Services/>
            <Features/>
            <Brands/>
            <WhyChoose/>
        </>
    );
}

export default Home;
