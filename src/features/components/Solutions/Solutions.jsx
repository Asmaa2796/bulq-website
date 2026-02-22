import style from "./solutions.module.css";
import Tilt from "react-parallax-tilt";
import {
  IconShoppingBag,
  IconCloudLock,
  IconTruckDelivery,
  IconClipboardHeart,
  IconBuildingCommunity,
  IconRoute,
} from "@tabler/icons-react";
const Solutions = () => {
  const solutions = [
    {
      id: 1,
      title: "E-commerce Notifications",
      icon: <IconShoppingBag stroke={2} />,
      desc: "Automate order updates, abandoned cart reminders, and promotional WhatsApp messages to drive higher conversion and customer loyalty.",
      tags: ["WhatsApp", "Promos"],
    },
    {
      id: 2,
      title: "Bank-Grade Security",
      icon: <IconCloudLock stroke={2} />,
      desc: "Deliver secure 2FA and OTP codes with 99.9% uptime and enterprise-level encryption. Built for high-stakes financial transactions.",
      tags: ["2FA/OTP", "Encryption"],
    },
    {
      id: 3,
      title: "Logistics Tracking",
      icon: <IconTruckDelivery stroke={2} />,
      desc: "Keep customers informed with real-time delivery updates and automated driver-to-customer communication for seamless operations.",
      tags: ["Live SMS", "Tracking"],
    },
    {
      id: 4,
      title: "Healthcare Alerts",
      icon: <IconClipboardHeart stroke={2} />,
      desc: "Secure appointment reminders and patient notifications compliant with global privacy standards like HIPAA and GDPR.",
      tags: ["Privacy", "Alerts"],
    },
    {
      id: 5,
      title: "Real Estate Marketing",
      icon: <IconBuildingCommunity stroke={2} />,
      desc: "Convert leads instantly with automated property alerts and scheduled viewing reminders via highly-targeted SMS campaigns.",
      tags: ["Lead Gen", "Marketing"],
    },
    {
      id: 6,
      title: "Travel & Hospitality",
      icon: <IconRoute stroke={2} />,
      desc: "Send booking confirmations, check-in alerts, and digital concierge services via WhatsApp for a superior guest experience.",
      tags: ["Check-in", "WhatsApp"],
    },
  ];
  return (
    <div className={`${style.solutions} py-5`}>
      <div className="container">
        <h2 className="text-center fw-bold">
          <span className="d-block">Communication Solutions Built for</span>
          <span className="sub-color d-block">Your Industry</span>
        </h2>
        <p className="line-h gray-color text-center">
          Empower your business with SMS, WhatsApp, and OTP APIs tailored to
          your specific sector. Scale faster with infrastructure designed for
          your unique needs.
        </p>
        <div className="row">
          {solutions &&
            solutions.length > 0 &&
            solutions.map((s, index) => (
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-12"
                key={s?.id || index}
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
                  <div className={`${style.solution_card} bg-white`}>
                    <div className={`${style.icon}`}>{s?.icon}</div>
                    <h5 className="sub-color fw-bold mt-3">{s?.title}</h5>
                    <p className="line-h gray-color">{s?.desc}</p>
                    <ul className="list-unstyled p-0 m-0 d-flex">
                      {s?.tags?.map((t, index) => (
                        <li key={index}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </Tilt>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;