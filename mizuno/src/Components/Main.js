import React, { useEffect, useState } from 'react';
import { Card } from './Card';
import axios from "axios";

export const Main = () => {
    const [url, setUrl] = useState("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=5ab72ce79e594385c3129a46cb8832c5&hash=a823e45b4f4b314c2dd766154fc47201");
    const [item, setItem] = useState();
    const [search, setSearch] = useState("");
    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(url)
            setItem(res.data.data.results);
        }
        fetch()
    }, [url])
    const searchMarvel = () => {
        setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`)
    }
    return (
        <>
            <div className="header">
                <div className="bg">
                    <img src="./Images/bg.png" alt="" />
                </div>
                <div className="search-bar">
                    <img src="./Images/logo.jpg" alt="logo" />
                    <input type="search" placeholder="Search Here" className='search' onChange={e => setSearch(e.target.value)}
                        onKeyPress={searchMarvel} />
                </div>
            </div>
            <div className="content">
                <Card />
                {
                    (!item) ? <p>Not found</p> : <Card data={item} />
                }
            </div>
        </>
    );
}

export default Main;