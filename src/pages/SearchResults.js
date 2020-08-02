import React from 'react';
import ListOfGifs from '../components/ListOfGifs/ListOfGifs';
import {useGifs} from '../hooks/useGifs';

const SearchResults = (props) => {
    const { keyword } = props.params;
	const gifs = useGifs({keyword});
    return (
        <ListOfGifs gifs={gifs} />
    );
};

export default SearchResults;