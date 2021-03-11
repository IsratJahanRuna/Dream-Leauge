import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './LeagueDetails.css';
import Male from './male.png';
import Female from './female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
const LeagueDetail = () => {
    const { leagueId } = useParams();
    const [league, setLeague] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]));


    }, [leagueId])

    let leaguePicture;
    if ("Male" === league.strGender) {
        leaguePicture = <img style={{ width: '300px', height: '200px' }} src={Male} alt="" />
    }
    else if ("Female" === league.strGender) {
        leaguePicture = <img style={{ width: '300px', height: '200px' }} src={Male} alt="" />
    }
    else {
        leaguePicture = <img style={{ width: '300px', height: '200px' }} src={Female} alt="" />
    }

    const banner = {
        width: '100%',
        height: '60vh',
        backgroundRepeat: "noRepeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${league.strBanner})`
    }

    return (

        <div className="container-fluid whole-details">
            <div style={banner}>
                <div className="container text-center logo" >
                    <img className="w-25 mt-5 img-fluid title" src={league.strLogo} alt="" />
                </div>
            </div>

            <div className="container text-white mb-3 card-font">
                <div style={{ width: '100%', backgroundColor: 'blue', border: '1px solid blue', borderRadius: '15px', marginTop: '20px' }}>
                    <div className="row  row-detail">
                        <div className="col-md-8 col-sm-12 card-gap">
                            <div className="card-body">
                                <h5 className="card-title">{league.strLeague}</h5>
                                <p className="card-text"><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {league.intFormedYear}</p>
                                <p className="card-text"><FontAwesomeIcon icon={faFlag} /> Country: {league.strCountry}</p>
                                <p className="card-text"><FontAwesomeIcon icon={faFutbol} /> Sport Type: {league.strSport}</p>
                                <p class="card-text"><FontAwesomeIcon icon={faMars} /> Gender: {league.strGender}</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-12 league-image mt-3 p-2 " style={{ marginLeft: '10px' }}>
                            <div>
                                {leaguePicture}
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="col-lg-12">
                <div className="container inside-para">
                    <p className="text-white text-define">{league.strDescriptionEN}</p>
                    <p className="text-white text-define">{league.strDescriptionFR}</p>
                </div>
            </div>


            <div className="d-flex justify-content-center">
                <a className="ml-5" href={`https://${league.strFacebook}`} target="_blank/"><FontAwesomeIcon style={{ color: 'blue' }} className="icons fa-2x" icon={faFacebook} />  </a>
                <a className="ml-5" href={`https://${league.strYoutube}`} target="_blank/" alt=""><FontAwesomeIcon className="icons fa-2x" style={{ color: 'red' }} icon={faYoutube} />  </a>
                <a className="ml-5" href={`https://${league.strTwitter}`} target="_blank/"><FontAwesomeIcon className="icons fa-2x" icon={faTwitter} /></a>
            </div>


        </div>


    );
};

export default LeagueDetail;