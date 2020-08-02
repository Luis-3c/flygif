import { useEffect, useState } from 'react';
import getGifs from '../services/getGifs';

export function useGifs({ keyword } = { keyword: null }) {
	const [ gifs, setGifs ] = useState([]);

	useEffect(
		() => {
            // recuperamos la keyword del local storage en caso de no existir
            const keywordToUse = keyword || localStorage.getItem('lastKeyword');
			getGifs({ keyword: keywordToUse }).then((gifs) => {
                setGifs(gifs);
                //Almacenamos la keyword en el localstorage
				localStorage.setItem('lastKeyword', keyword);
			});
		},
		[ keyword ]
	);
	return gifs;
}
