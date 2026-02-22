import style from './services.module.css';
import Tilt from "react-parallax-tilt";

const Services = () => {
    return (
        <div className={`${style.services} py-5`}>
            <div className='container'>
                <h2 className='text-center dark-color fw-bold mb-4'>Our Services</h2>
                <p className='gray-text text-center my-2'>A simple, transparent process to get you started with BeOn</p>
                <div class="row">
                    <div className='col-xl-4 col-md-6 col-12' data-aos="fade-up" data-aos-offset="100">
                        <Tilt
                            glareEnable={true}
                            glareMaxOpacity={0.45}
                            scale={1.05}
                            tiltMaxAngleX={15}
                            tiltMaxAngleY={15}
                            transitionSpeed={250}
                            className="tilt-card">
                            <div class={`${style.service_card} rounded-4 my-3 border`}>
                                <div className={`${style.service_icon}`}>
                                    <img src='/line.png' alt='Service' />
                                </div>
                                <h5>WhatsApp & SMS Campaigns</h5>
                                <p>
                                    Run powerful marketing campaigns with WhatsApp and SMS, reaching your audience globally with high engagement and complete security.
                                </p>
                                <hr />
                            </div>
                        </Tilt>
                    </div>
                    <div className='col-xl-4 col-md-6 col-12' data-aos="fade-up" data-aos-offset="300">
                        <Tilt
                            glareEnable={true}
                            glareMaxOpacity={0.45}
                            scale={1.05}
                            tiltMaxAngleX={15}
                            tiltMaxAngleY={15}
                            transitionSpeed={250}
                            className="tilt-card">
                            <div class={`${style.service_card} rounded-4 my-3 border`}>
                                <div className={`${style.service_icon}`}>
                                    <img src='/bubble-chat.png' alt='Service' />
                                </div>
                                <h5>Live Chat & AI Inbox</h5>
                                <p>
                                    Manage all customer conversations in one intelligent inbox — distribute chats to your team or AI, and track performance from a unified dashboard.
                                </p>
                                <hr />
                            </div>
                        </Tilt>
                    </div>
                    <div className='col-xl-4 col-md-6 col-12' data-aos="fade-up" data-aos-offset="500">
                        <Tilt

                            glareEnable={true}
                            glareMaxOpacity={0.45}
                            scale={1.05}
                            tiltMaxAngleX={15}
                            tiltMaxAngleY={15}
                            transitionSpeed={250}
                            className="tilt-card">
                            <div class={`${style.service_card} rounded-4 my-3 border`}>
                                <div className={`${style.service_icon}`}>
                                    <img src='/metrics.png' alt='Service' />
                                </div>
                                <h5>CRM & Customer Management</h5>
                                <p>
                                    Store, track, and classify customer information directly within your communication platform, and never lose a lead again.
                                </p>
                                <hr />
                            </div>
                        </Tilt>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;