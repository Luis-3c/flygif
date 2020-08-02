import React from 'react';
import Gif from '../Gif';
import './ListOfGifs.css';

const ListOfGifs = (props) => {
	return (
		<div className="listOfGifs">
			{props.gifs.map((g) => {
				return <Gif key={g.id} title={g.title} id={g.id} url={g.url} />;
			})}
		</div>
	);
};

export default ListOfGifs;
