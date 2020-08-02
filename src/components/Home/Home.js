import React, { useState } from 'react';
import {Link, useLocation} from 'wouter';
import {useGifs} from '../../hooks/useGifs';
import ListOfGifs from '../ListOfGifs/ListOfGifs';

const Home = () => {
    const [keyword, setKeyword] = useState('');
    const [, setLocation] = useLocation();
    const gifs = useGifs('spngebob')
    
    function handleChange(e){
        setKeyword(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        setLocation(`/gifs/${keyword}`);
    }
	return (
		<React.Fragment>
            <form onSubmit={handleSubmit}>
                <input type="text" value={keyword} placeholder="Search..." name="keyword" onChange={handleChange} />
                <button type="submit" style={{
                    backgroundColor: 'blue',
                    color: 'white',
                    border: '0'
                }}>GO!</button>
            </form>
            <h4>Last search</h4>
            <ListOfGifs gifs={gifs} />            
			<Link to="/gifs/football" style={{textDecoration: 'none' }}>Football</Link>
			<Link to="/gifs/anime" style={{textDecoration: 'none'}}>Anime</Link>
			<Link to="/gifs/love" style={{textDecoration: 'none'}}>Love</Link>
			<Link to="/gifs/hapiness" style={{textDecoration: 'none'}}>Hapiness</Link>
		</React.Fragment>
	);
};

export default Home;
