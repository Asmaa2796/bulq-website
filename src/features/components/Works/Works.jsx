import style from './works.module.css';
import Tilt from "react-parallax-tilt";

import {
  IconCodeDots,IconMessages,IconBrandSpeedtest
} from "@tabler/icons-react";
const Works = () => {
  const works = [
    {
      id: 1,
      title: "Integrate API",
      icon: <IconCodeDots stroke={2} />,
      desc: "Connect your platform using our developer-friendly SDKs and lightning-fast REST API endpoints. Start sending in under 5 minutes.",
    },
    {
      id: 2,
      title: "Customize Messages",
      icon: <IconMessages stroke={2} />,
      desc: "Personalize communication across SMS and WhatsApp with custom templates, dynamic variables, and smart OTP triggers.",
    },
    {
      id: 3,
      title: "Track Performance",
      icon: <IconBrandSpeedtest stroke={2} />,
      desc: "Monitor delivery rates and engagement in real-time with comprehensive analytics. Optimize your campaigns with data.",
    },
  ];
  return (
    <div className={`${style.works} py-5`}>
      <div className="container">
        <h2 className="text-center fw-bold">
          <span className="d-block">How Bulq Chat Works</span>
        </h2>
        <p className="line-h gray-color text-center">
          A simple, three-step process to integrate global SMS, WhatsApp, and OTP services into your business workflow in minutes.
        </p>
        <div className="row">
          {works &&
            works.length > 0 &&
            works.map((w, index) => (
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-12"
                key={w?.id || index}
              >
              <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0.45}
                  scale={1.05}
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  transitionSpeed={250}
                  className="tilt-card"
                >
                <div className={`${style.work_card}`}>
                  <div className={`${style.icon}`}><b>0{w?.id}</b> {w?.icon}</div>
                  <h5 className="sub-color fw-bold mt-3">{w?.title}</h5>
                  <p className="line-h gray-color">{w?.desc}</p>
                </div>
                </Tilt>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
