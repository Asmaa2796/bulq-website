import { Link } from "react-router-dom";
import { IconMenu3 } from '@tabler/icons-react';
import Collapse from "bootstrap/js/dist/collapse";
const Navbar = () => {
     const handleNavLinkClick = () => {
    if (window.innerWidth < 992) {
      const navbarCollapse = document.getElementById("navbarNav");
      if (navbarCollapse) {
        const bsCollapse = Collapse.getInstance(navbarCollapse) || new Collapse(navbarCollapse);
        bsCollapse.hide();
      }
    }
  };
    return (
        <>
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container">
                <a class="navbar-brand" href="/"><img src="/logos/logo-chat-white.png" alt="Bulq Logo"/></a>
                <button class="navbar-toggler text-white border-light-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <IconMenu3 size={20}/>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <Link class="nav-link" onClick={handleNavLinkClick} to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" onClick={handleNavLinkClick} to="/services">Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" onClick={handleNavLinkClick} to="/solutions">Solutions</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" onClick={handleNavLinkClick} to="/works">Works</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" onClick={handleNavLinkClick} to="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                    <button className="search-button">Search <bi className="bi bi-search"></bi></button>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar;
