import React from 'react';
import './Gif.css';

const Gif = (props) => {
	return (
		<div className="gif-cont">
			{/* <h4>{props.title}</h4> */}
			<img src={props.url} alt={props.title} />
		</div>
	);
};

export default Gif;
