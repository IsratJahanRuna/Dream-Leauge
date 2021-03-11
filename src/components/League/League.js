import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const League = ({ league }) => {
    const { strLeague, strSport, idLeague } = league;

    const [leagues, setLeagues] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.leagues[0]));


    }, [])


    return (

        <div className="home-page d-inline-flex  justify-content-center ml-5 " style={{ width: '23rem', border: '2px solid white', marginBottom: '50px', backgroundColor: 'red', border: '1px solid red', borderRadius: '15px' }}>
            <Card style={{ width: '18rem', height: '300px', backgroundColor: 'palegreen', textAlign: 'center', margin: '5px' }}>

                <Card.Body>
                    <img style={{ width: '100px', height: '120px' }} src={leagues.strBadge} alt=""/>

                    <Card.Text>
                        <p><b>{strLeague}</b></p>
                        <p>Sport Type: {strSport}</p>
                    </Card.Text>

                    <Button variant="light"><Link to={`/league/${idLeague}`} style={{ color: 'palegreen' }}><b>Explore</b> <FontAwesomeIcon icon={faArrowRight} /></Link></Button>

                </Card.Body>

            </Card>
        </div >

    );
};

export default League;