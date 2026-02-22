import style from './features.module.css';

const Features = () => {
    return (
        <div className={`${style.features} py-5`}>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-12'>
                        <h2 className='mb-4'>Intelligent Messaging Assistant (AI-Driven Communication)</h2>
                        <p>
                            Your virtual AI teammate simplifies complex interactions — assisting your staff with context-aware suggestions, analyzing every chat for deeper insight, and helping you engage customers smarter and faster.
                        </p>
                        <ul class="ai-features m-0 list-unstyled">
                            <li data-aos="fade-up" data-aos-offset="100">
                                <span></span>
                                <strong>Empower Your Agents:</strong>
                                <small>                                
                                Meet your AI co-pilot — guiding your team to craft accurate, empathetic replies that save time while maintaining a personal touch.
                                </small>
                            </li>
                            <li data-aos="fade-up" data-aos-offset="200">
                                <span></span>
                                <strong>Understand Customer Needs:</strong>
                                <small>                                
                                Your AI analyzes the tone and intent behind each message — whether it’s a question, issue, or buying signal — and recommends tailored responses that convert.
                                </small>
                            </li>
                            <li data-aos="fade-up" data-aos-offset="300">
                                <span></span>
                                <strong>Deliver Instant Responses:</strong>
                                <small>
                                Say goodbye to delays. The AI assistant automatically handles frequent queries, ensuring customers get quick, precise answers anytime.
                                </small>
                            </li>
                        </ul>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-12'>
                        <div className='image text-center'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;