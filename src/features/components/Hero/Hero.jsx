import style from "./hero.module.css";
import TextLoop from "react-text-loop";
import { IconBrandWhatsapp , IconPasswordMobilePhone , IconMessage} from '@tabler/icons-react';
const Hero = () => {
  return (
    <div className={`${style.hero_section}`}>
      <div className={`${style.hero_text}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <h1 className="text-white">
                Your Business,
                <br />
                Always Connected
              </h1>
              <p className="line-h text-white fw-bold">
                <span className="d-block my-1">Deliver messages instantly through</span>
                <TextLoop interval={3000} springConfig={{ stiffness: 180, damping: 8 }}>
                  <span className="d-flex align-items-center fs-5" style={{color:"#0efffb"}}><IconMessage size={20} className="me-1"/> SMS</span>
                  <span className="d-flex align-items-center fs-5" style={{color:"#7bf048"}}><IconBrandWhatsapp size={20} className="me-1"/> WhatsApp</span>
                  <span className="d-flex align-items-center fs-5" style={{color:"#ffde08"}}><IconPasswordMobilePhone size={20} className="me-1"/> Secure OTPs</span>
                </TextLoop>
                <span className="d-block my-1">
                  Bulq Chat helps businesses communicate, verify, and engage customers effortlessly — all through one reliable platform.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;