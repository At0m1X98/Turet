import React, {useEffect, useState} from 'react'
import './Navbar.css'

import logo from '/logo.png'

import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [isSticky, setIsSticky] = useState(false);
  	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 450);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	}, []);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const closeMenu = () => setIsMenuOpen(false);

	return (
		<div className='navbar'>
			<div className='navbar-top'>
				<div className='left'>
					<p><FaPhoneAlt className='phone-icon' /> +420 111 222 333</p>
					<p><FaEnvelope className='email-icon' /> turet@gmail.com</p>
				</div>
				<div className='right'>
					<p>e-shop will be added</p>
					<button
						className='menu-btn' 
						id='menu-btn' 
						onClick={toggleMenu}
						aria-label='Toggle menu'
					>
						☰
					</button>
				</div>
			</div>
			<div className='navbar-logo'>
				<Link to="/"><img src={logo} alt="logo" /></Link>
			</div>
			<div className={`navbar-links ${isSticky ? 'sticky' : ''} ${isMenuOpen ? 'active' : ''}`}>
				<button className="close-btn" onClick={closeMenu}>✕</button>

				<ul>
					<li><Link to="/" className='link'>ÚVOD</Link></li>
					<li><Link to="/wine" className='link'>VÍNO</Link></li>
					<li><Link to="/alcoholics" className='link'>VINAŘI</Link></li>
					<li><Link to="/degustation" className='link'>DEGUSTACE</Link></li>
					<li><Link to="/companies" className='link'>SPOLUPRÁCE</Link></li>
					<li><Link to="/to-morava" className='link'>REZERVACE</Link></li>
					<li><Link to="/contact" className='link'>KONTAKT</Link></li>
				</ul>
			</div>

			{isMenuOpen && (
				<div 
				className="menu-overlay" 
				onClick={closeMenu}
				/>
			)}
		</div>
	)
}

export default Navbar
