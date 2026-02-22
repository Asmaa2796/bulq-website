import style from './whyChoose.module.css';
import Tilt from "react-parallax-tilt";

const WhyChoose = () => {
    return (
        <div className={`${style.why_choose} py-5`}>
            <div className='container'>
                <h2 className='text-center text-white fw-bold mb-4'>Why Choose Bulq</h2>
                <hr />
                <div className='row'>
                    <div className='col-xl-7 col-lg-7 col-md-12 col-12'>
                        <p className='line-h text-white'>
                            Bulq keeps your business connected — anytime, anywhere. With seamless delivery through SMS and WhatsApp, our platform ensures every message reaches your customers instantly and securely. Whether it’s sending updates, verifying users, or building engagement, Bulq gives you the reliability, speed, and simplicity your business deserves.
                        </p>
                    </div>
                    <div className='col-xl-5 col-lg-5 col-md-12 col-12'>
                        <div className={`${style.why_choose_img} text-center`}>
                            <img src='./logos/2.png' alt='Logo' />
                        </div>
                    </div>

                    <div className="why_choose_bulq">
                        <div className="row text-white text-sm">

                            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                <Tilt
                                    glareEnable={true}
                                    glareMaxOpacity={0.45}
                                    scale={1.05}
                                    tiltMaxAngleX={15}
                                    tiltMaxAngleY={15}
                                    transitionSpeed={250}
                                    className="tilt-card">
                                    <div className={`${style.why_choose_bulq_li}`}>
                                        <h5><b>01</b> Instant Communication</h5>
                                        <p>Deliver your messages in real time through fast, global connections.</p>
                                    </div>
                                </Tilt>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                <Tilt

                                    glareEnable={true}
                                    glareMaxOpacity={0.45}
                                    scale={1.05}
                                    tiltMaxAngleX={15}
                                    tiltMaxAngleY={15}
                                    transitionSpeed={250}
                                    className="tilt-card">
                                    <div className={`${style.why_choose_bulq_li}`}>
                                        <h5><b>02</b> Secure Verification</h5>
                                        <p>Send OTPs and alerts with confidence using enterprise-grade security.</p>
                                    </div>
                                </Tilt>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                <Tilt

                                    glareEnable={true}
                                    glareMaxOpacity={0.45}
                                    scale={1.05}
                                    tiltMaxAngleX={15}
                                    tiltMaxAngleY={15}
                                    transitionSpeed={250}
                                    className="tilt-card">
                                    <div className={`${style.why_choose_bulq_li}`}>
                                        <h5><b>03</b> All-in-One Platform</h5>
                                        <p>Manage SMS, WhatsApp, and customer engagement in one unified dashboard.</p>
                                    </div>
                                </Tilt>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                <Tilt

                                    glareEnable={true}
                                    glareMaxOpacity={0.45}
                                    scale={1.05}
                                    tiltMaxAngleX={15}
                                    tiltMaxAngleY={15}
                                    transitionSpeed={250}
                                    className="tilt-card">
                                    <div className={`${style.why_choose_bulq_li}`}>
                                        <h5><b>04</b> Reliable Support</h5>
                                        <p>Get 24/7 assistance and guidance to keep your messaging running smoothly.</p>
                                    </div>
                                </Tilt>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChoose;