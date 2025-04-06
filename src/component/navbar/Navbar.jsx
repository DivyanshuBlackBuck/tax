import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../Images/LogoJPG.png';
import { useBlogsRedux } from '../../redux/reduxHooks';

const Navbar = () => {
    const { getServiceResponse, setSelectedService } = useBlogsRedux()

    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [serviceDropdown, setServiceDropdown] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };


    return (
        <header>
            <div className="navbar">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                    {/* <h1>NEW</h1> */}
                </div>
                <ul className={`links ${isOpen ? 'open' : ''}`}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>

                    {/* Services Dropdown (2 Column) */}
                    <li
                        className="services-dropdown"
                        onMouseEnter={() => setServiceDropdown(true)}
                    // onMouseLeave={() => setServiceDropdown(false)}
                    >
                        <a href="/service">
                            Services <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                        </a>
                        {serviceDropdown && (
                            <div className="services-menu">
                                <div className="column">
                                    {
                                        getServiceResponse?.map((item) => {
                                            return (
                                                <button onClick={() => setSelectedService(item)}>
                                                    <a href="/service">{item?.name}</a>
                                                </button>
                                            )
                                        })
                                    }
                                </div>
                                {/* <div className="column">
                                    <a href="/service1">GST Consultancy</a>
                                    <a href="/service2">Income Tax</a>
                                    <a href="/service3">Accounting</a>
                                    <a href="/service4">CMA/Project Report</a>
                                </div>
                                <div className="column">
                                    <a href="/service5">Pan/Tan Registration</a>
                                    <a href="/service6">Firms and Society Reg.</a>
                                    <a href="/service7">Other Consultancy</a>
                                </div> */}
                            </div>
                        )}
                    </li>

                    {/* Updates Dropdown */}
                    <li
                        className="updates-dropdown"
                        onMouseEnter={() => setDropdownOpen(true)}
                    // onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <a href="/incomeTax">
                            Latest Updates <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                        </a>
                        {dropdownOpen && (
                            <ul className="updates-menu">
                                <li><a href="/gst">GST</a></li>
                                <li><a href="/incomeTax">Income Tax</a></li>
                            </ul>
                        )}
                    </li>

                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/Signup">SignUp</a></li>
                    <li><a href="/admin-pannel/dashboard">Admin</a></li>
                    <li><a href="/test">Test</a></li>
                </ul>
                <div className="toggle_btn" onClick={toggleNavbar}>
                    <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
                </div>
            </div>

            {isOpen && (
                <div className="dropdown_menu">
                    <a href="/"><li>Home</li></a>
                    <a href="/about"><li>About</li></a>
                    <a href="/service"><li>Service</li></a>
                    <a href="/client"><li>OurClient</li></a>
                    <a href="/job"><li>Jobs</li></a>
                    <a href="/contact"><li>Contact</li></a>
                    <a href="/images"><li>Images</li></a>
                    <a href="/" className="action_btn"><li>Get Started</li></a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
