import style from './footer.module.css';
import { IconPhone,IconMail,IconWorld } from '@tabler/icons-react';
const Footer = () => {
    return (
        <footer class={`${style.footer} py-5`}>
            <div class="container">
                <div class="row align-items-start">
                    <div class="col-md-4 mb-4">
                    <img src="/logos/3.png" alt='Logo'/>
                        <p class="text-light opacity-75">
                            Keeping your business connected through reliable messaging — SMS, WhatsApp, and secure OTP delivery.
                        </p>
                    </div>

                    <div class="col-md-4 mb-4">
                        <h5 class="fw-semibold mb-3">Quick Links</h5>
                        <ul class="list-unstyled">
                            <li><a href="#home" class="text-white-50 text-decoration-none">Home</a></li>
                            <li><a href="#services" class="text-white-50 text-decoration-none">Services</a></li>
                            <li><a href="#why_choose_bulq" class="text-white-50 text-decoration-none">Why Bulq</a></li>
                            <li><a href="#contact" class="text-white-50 text-decoration-none">Contact</a></li>
                        </ul>
                    </div>

                    <div class="col-md-4 mb-4">
                        <h5 class="fw-semibold mb-3">Get in Touch</h5>
                        <p class="text-white-50 mb-1"><IconPhone className='sub-color' size={18}/> +1 (555) 123-4567</p>
                        <p class="text-white-50 mb-1"><IconMail className='sub-color' size={18}/> support@bulq.chat</p>
                        <p class="text-white-50"><IconWorld className='sub-color' size={18}/> www.bulq.chat</p>
                    </div>
                </div>

                <hr class="border-secondary" />
                <div class="text-center mt-3">
                    <small class="text-white-50">
                        © {new Date().getFullYear()} Bulq. All rights reserved.
                    </small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;