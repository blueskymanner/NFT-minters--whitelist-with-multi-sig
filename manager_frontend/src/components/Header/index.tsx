import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../assets/images/new_logo.png";
import TelegramImage from "../../assets/icons/telegram.png";
import GithubImage from "../../assets/icons/github.png";
import InstagramImage from "../../assets/icons/instagram.png";
import TwitterImage from "../../assets/icons/twitter.png";
import FacebookImage from "../../assets/icons/facebook.png";
import SocialIcon from "../common/SocialIcon";
import useNav from "../../hooks/useNav";
import { Link } from "react-router-dom";
import NavbarToggler from "./NavbatToggler";
import Image from "../common/Image";
import { useState } from "react";
import Popup from "../Popup";

const Navbar = () => {
  const navs = [
    { menu: "Home", scrollLink: "home", link: "/" },
    { menu: "Roadmap", scrollLink: "roadmap", link: "/roadmap" },
    { menu: "About", scrollLink: "about", link: "/aboutus" },
    { menu: "Blog", scrollLink: "blog", link: "" },
    { menu: "Art", scrollLink: "art", link: "" },
    { menu: "Faqs", scrollLink: "faqs", link: "" },
  ];

  const socialIcons = [
    { icon: TelegramImage, link: "https://t.me/deviversiynfts" },
    { icon: GithubImage, link: "https://github.com/DiversifyNFTs" },
    { icon: InstagramImage, link: "https://www.instagram.com/diversifynft/" },
    { icon: TwitterImage, link: "https://twitter.com/DiversifyNfts" },
    { icon: FacebookImage, link: "https://m.facebook.com/diversifynfts" },
  ];

  const [navbarOpen] = useNav(false);
  const location = useLocation();

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        id="header"
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-0"
      >
        <div className="container py-3 py-lg-2">
          <Link to="/" className="navbar-brand pointer">
            <Image src={Logo} />
          </Link>
          <button
            className="navbar-toggler border-0 outline-none p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <NavbarToggler navbarOpen={navbarOpen} />
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navs.map((nav, index) => (
                <li key={index} className="nav-item">
                  {location.pathname === "/" ? (
                    <ScrollLink
                      activeClass="active"
                      className="nav-link nav-animation-link white px-0 py-2 pointer"
                      to={nav.scrollLink}
                      spy={true}
                    >
                      {nav.menu}
                    </ScrollLink>
                  ) : (
                    <Link
                      className={`nav-link white px-0 py-2 pointer ${
                        location.pathname === nav.link && "active"
                      }`}
                      to={nav.link}
                    >
                      {nav.menu}
                    </Link>
                  )}
                </li>
              ))}
              <li className="nav-item">
                <span
                  style={{ cursor: "pointer" }}
                  className="nav-link white px-0 py-2"
                  onClick={() => setOpen(true)}
                >
                  Litepaper
                </span>
              </li>
            </ul>
            <ul className="navbar-nav social-icons">
              {socialIcons.map((icon, index) => (
                <li key={index}>
                  <SocialIcon link={icon.link} img={icon.icon} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <Popup open={open} handleClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
