import React from 'react'
import "../components/WineItem/WineItem.jsx";

import { wines } from "../db/wines.js";
import WineItem from '../components/WineItem/WineItem.jsx';

const Wines = () => {
	return (
		<div className='page wines-page'>
			<div className='wines-container'>
				<div className='wines-filter'>
					<h2>Filter</h2>
				</div>
				<div className='wines-list'>
					<img src="./vines.png" alt="news" className='news-pic'/>
					<div className='wines-items'>
						{wines.map(wine => (
							<WineItem key={wine.id} wine={wine} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Wines
