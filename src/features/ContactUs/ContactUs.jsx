import style from "./contactUs.module.css";
import { IconMapPins,IconClock24 } from '@tabler/icons-react';
const ContactUs = () => {
  return (
    <div className={`${style.contact_us} py-5`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <div className={style.contact_txt}>
              <h3 className="fw-bold">Talk to our Messaging Experts</h3>
              <p className="line-h gray-color">
                Whether you need high-volume OTPs or personalized WhatsApp
                marketing, we’re here to help your business scale its
                communications.
              </p>
              <div className={`${style.contact_txt_card} shadow-sm rounded-4 my-3 bg-white p-3`}>
                <div><IconMapPins size={20}/></div>
                <div>
                  <b>Headquarters</b>
                  <p className="text-sm">123 Business Plaza, Tech District</p>
                  <p className="text-sm">San Francisco, CA 94105</p>
                </div>
              </div>
              <div className={`${style.contact_txt_card} shadow-sm rounded-4 my-3 bg-white p-3`}>
                <div><IconClock24 size={20}/></div>
                <div>
                  <b>24/7 Global Support</b>
                  <p className="text-sm">Our team is ready to assist you anytime.</p>
                  <p className="main-color text-sm">support@bulqchat.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <form className="bg-white shadow-sm p-5 rounded-5 form-group">
              <h5 className="fw-bold sub-color mb-3">Send us a message</h5>
              <label className="form-label my-2 fw-bold text-sm">Full Name</label>
              <input className="form-control" type="text" />
              <label className="form-label my-2 fw-bold text-sm">Email</label>
              <input className="form-control" type="email" />
              <label className="form-label my-2 fw-bold text-sm">Company Name</label>
              <input className="form-control" type="text" />
              <label className="form-label my-2 fw-bold text-sm">Tell us about your needs</label>
              <textarea className="form-control" name="" id=""></textarea>
              <button className="shadow-sm">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
