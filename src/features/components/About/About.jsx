import style from './about.module.css';
const About = () => {
    return (
        <div className={`${style.about}`}>
            <div className={`${style.about_div}`}></div>
            <div className='container'>
                <div className={`${style.about_text} py-5 position-relative`}>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-12'>
                            <div className={`${style.about_img}`}>
                                <img src='/logos/2.png' alt="Bulq Logo" />
                            <hr />
                            <b>Your Business, Always Connected</b>
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-12'>
                            <div className='py-4' data-aos="fade-up">
                                <h4>
                                "Our brand is not just what we build
                                today, but the trust we grow tomorrow.
                                Let’s keep shaping it—together."
                            </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;