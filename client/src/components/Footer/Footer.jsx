import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-newsletter'>
				<h2>Nechte nám na sebe email</h2>
				<label>Zaregistruj se k odběru novinek</label>
				<input type='email' placeholder='Zde vložte svůj email' />
				<button>Přihlásit k odběru</button>
			</div>
			<div className='footer-content'>
				<div className='footer-links'>
					<a href='/'>Úvod</a>
					<a href='/wines'>Víno</a>
					<a href='/alcoholics'>Vinaři</a>
					<a href='/degustation'>Degustace</a>
					<a href='/place'>Degustárna</a>
					<a href='/companies'>Pro firmy</a>
					<a href='/to-morava'>Na Moravu</a>
					<a href='/contact'>Kontakt</a>
				</div>
				<div className='footer-social'>
					<a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'><FaFacebook /> Facebook</a>
					<a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'><FaInstagram /> Instagram</a>
					<a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'><FaTwitter /> Twitter</a>
				</div>
				<div className='footer-maps'>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d320.0901858850258!2d14.431822151037455!3d50.07277737577742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9522d1141705%3A0xfd37daa781c502d9!2sTURET%20Enoteca-Bistr%C3%B3!5e0!3m2!1scs!2scz!4v1759781415501!5m2!1scs!2scz" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='footer-map'></iframe>
				</div>
			</div>
			<div className='footer-bottom'>
				<p>© 2025 TURET. Všechna práva vyhrazena.</p>
			</div>
		</div>
	)
}

export default Footer
