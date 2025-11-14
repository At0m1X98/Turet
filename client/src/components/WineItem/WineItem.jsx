import React from 'react'
import "./WineItem.css"

import { FaThermometerHalf } from "react-icons/fa";

const WineItem = ({wine}) => {
	return (
		<div className='wine-item'>
			<div className='wine-container'>
				<div className='wine-item-pic'>
					<img 
						src={wine.pic} 
						alt={wine.name}
						onError={(e) => { e.target.src = "./testwine.png"; }}
					/>
				</div>
				<div className='wine-item-info'>
					<div className='wine-item-header'>
						<div className='wine-item-title'>
							<h2 className='vinarstvi'>{wine.winer}</h2>
							<h1 className='nazev'>{wine.name}</h1>
							<p><span>{wine.year}</span></p>
							<h3>{wine.type.join(", ")}</h3>
						</div>
						<div className='thermo'>
							<div>
								<p><FaThermometerHalf /> Alkohol</p>
								<p><FaThermometerHalf /> Cukry</p>
								<p><FaThermometerHalf /> Kyselinky</p>
							</div>
							<div>
								<p>{wine.alkohol} %</p>
								<p>{wine.cukr} g/l</p>
								<p>{wine.kyselinky} g/l</p>
							</div>
						</div>
					</div>
					<p className='popis'>{wine.text}</p>
				</div>
			</div>
		</div>
	)
}

export default WineItem
