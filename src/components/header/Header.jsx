import { Link, NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "../../styles/header.css";
import { useRef, useState } from "react";

const pageLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },
  {
    path: "/blog",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  const overLayRef = useRef(null);
  const menuRef = useRef(null);

  function handleOpenMenu() {
    overLayRef.current.classList.toggle("navigations-active");
    menuRef.current.classList.toggle("menu-active");
    setOpen((open) => !open);
  }

  function handleCloseMenu() {
    overLayRef.current.classList.remove("navigations-active");
    menuRef.current.classList.toggle("menu-active");
    setOpen(false);
  }

  return (
    <header className="header">
      <div className="nav-top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header-top-left d-flex align-items-center gap-4">
                <span>Need Help?</span>
                <span className="header-top-help">
                  <i className="ri-phone-fill"></i>
                  <Link to="tel:+201006541237" className=" mx-2">
                    Call:+201006541237
                  </Link>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="header-top-right d-flex align-items-center justify-content-end gap-4">
                <Link to="#" className="d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line"></i>
                  <span>Login</span>
                </Link>
                <Link to="#" className="d-flex align-items-center gap-1">
                  <i className="ri-user-line"></i> <span>Register</span>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="nav-mid ">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <h1 className="company-logo">
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i className="ri-car-line"></i>
                  <span>
                    Rent Car <br />
                    Service
                  </span>
                </Link>
              </h1>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="company-info company-location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <div className="company-location-content">
                  <h4>Egypt</h4>
                  <h5>Maadi City, Cairo</h5>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="company-info company-work-time d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="company-work-time-content">
                  <h4>Sunday to Friday</h4>
                  <h5>10am - 11pm</h5>
                </div>
              </div>
            </Col>
            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end"
            >
              <button className="header-btn text-end">
                <Link to="/contact">
                  <i className="ri-phone-fill"></i>
                  <span>Request a call</span>
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <nav className="main-nav">
        <Container>
          <div className="navigations d-flex align-items-center justify-content-between">
            <span className="mobile-menu">
              <i
                className={open ? "ri-close-line" : "ri-menu-line"}
                onClick={() => handleOpenMenu()}
              ></i>
            </span>
            <div
              className="navigations-links "
              ref={overLayRef}
              onClick={() => handleCloseMenu()}
            >
              <div className="menu d-flex align-items-center" ref={menuRef}>
                {pageLinks.map((page, index) => (
                  <NavLink
                    to={page.path}
                    key={index}
                    className={(navClass) =>
                      navClass.isActive
                        ? "menu-link-active menu-links"
                        : "menu-links"
                    }
                  >
                    {page.display}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="navigations-right">
              <div className="search-box">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search"
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}

export default Header;
