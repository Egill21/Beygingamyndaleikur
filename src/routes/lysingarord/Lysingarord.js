import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';


import "./Lysingarord.scss";

import { getLysingarord, getLysingarordById } from '../../api';

export default function Lysingarord(props) {

  const [wordINFO, setwordINFO] = useState([]);
  const [currentWord, setCurrentWord] = useState('');
  const [frumstig, setFrumstig ] = useState('');
  const [midstig, setMidstig ] = useState('');
  const [efstastig, setEfstastig ] = useState('');
  
  const [isCorrect1, setIsCorrect1] = useState(false);
  const [isCorrect2, setIsCorrect2] = useState(false);
  const [isCorrect3, setIsCorrect3] = useState(false);

  const [loading, setLoading] = useState(false);

  function frumstigChange(e) {
    if (e.target.value === frumstig) {
      setIsCorrect1(true);
    }
  }

  function midstigChange(e) {
    if (e.target.value === midstig) {
      setIsCorrect2(true);
    }
  }

  function efstastigChange(e) {
    if (e.target.value === efstastig) {
      setIsCorrect3(true);
    }
  }

  function cheater() {
    setIsCorrect1(true);
    setIsCorrect2(true);
    setIsCorrect3(true);
  }

  async function fetchData() {
    setLoading(true);
    setIsCorrect1(false);
    setIsCorrect2(false);
    setIsCorrect3(false);
    let myWord = await getLysingarord();
    if (myWord.length > 1) {
      myWord = await getLysingarordById(myWord[0].guid);
    }
    setwordINFO(myWord);
    for (var i = 0; i < myWord[0].bmyndir.length; i++) {
      if (myWord[0].bmyndir[i].g === 'FSB-KK-NFET') {
        setFrumstig(myWord[0].bmyndir[i].b);
      }
      if (myWord[0].bmyndir[i].g === 'MST-KK-NFET') {
        setMidstig(myWord[0].bmyndir[i].b);
      }
      if (myWord[0].bmyndir[i].g === 'ESB-KK-NFET') {
        setEfstastig(myWord[0].bmyndir[i].b);
      }
    }
    setCurrentWord(myWord[0].ord);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      {loading &&
        <h2 className="home__heading">Sæki gögn...</h2>
      }
      {!loading && (
        <div className="mainDiv">
          <h1>Orð: {currentWord}</h1>
          <div className="subDIVSL">
            <p>Frumstig</p>
            {isCorrect1 &&
              <input onChange={frumstigChange} value={frumstig} className="inputL correct" type="text"></input>
            }
            {!isCorrect1 &&
              <input onChange={frumstigChange} className="inputL" type="text"></input>
            }
          </div>
          <div className="subDIVSL">
            <p>Miðstig</p>
            {isCorrect2 &&
              <input onChange={midstigChange} value={midstig} className="inputL correct" type="text"></input>
            }
            {!isCorrect2 &&
              <input onChange={midstigChange} className="inputL" type="text"></input>
            }
          </div>
          <div className="subDIVSL">
            <p>Efsta stig</p>
            {isCorrect3 &&
              <input onChange={efstastigChange} value={efstastig} className="inputL correct" type="text"></input>
            }
            {!isCorrect3 &&
              <input onChange={efstastigChange} className="inputL" type="text"></input>
            }
          </div>
          <div className="subDIVSL">
            <button onClick={fetchData} className="newWordButton">Nýtt orð</button>
            <button onClick={cheater} className="newWordButton">Sjá lausn</button>
            <Link className="linkL" to="/"><button>Forsíða</button></Link>
          </div>
        </div>
      )}
    </Fragment>
  );
}


