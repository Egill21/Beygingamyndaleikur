import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';


import "./Nafnord.scss";

import { getNafnord, getNafnordById } from '../../api';

export default function Nafnord(props) {

  const [wordINFO, setwordINFO] = useState([]);
  const [currentWord, setCurrentWord] = useState('');
  const [nfet, setNFET ] = useState('');
  const [þfet, setÞFET ] = useState('');
  const [þgfet, setÞGFET ] = useState('');
  const [efet, setEFET ] = useState('');
  
  const [isCorrect1, setIsCorrect1] = useState(false);
  const [isCorrect2, setIsCorrect2] = useState(false);
  const [isCorrect3, setIsCorrect3] = useState(false);
  const [isCorrect4, setIsCorrect4] = useState(false);

  const [loading, setLoading] = useState(false);

  function nfetChange(e) {
    if (e.target.value === nfet) {
      setIsCorrect1(true);
    }
  }

  function þfetChange(e) {
    if (e.target.value === þfet) {
      setIsCorrect2(true);
    }
  }

  function þgfetChange(e) {
    if (e.target.value === þgfet) {
      setIsCorrect3(true);
    }
  }

  function efetChange(e) {
    if (e.target.value === efet) {
      setIsCorrect4(true);
    }
  }

  function cheater() {
    setIsCorrect1(true);
    setIsCorrect2(true);
    setIsCorrect3(true);
    setIsCorrect4(true);
  }

  async function fetchData() {
    setLoading(true);
    setIsCorrect1(false);
    setIsCorrect2(false);
    setIsCorrect3(false);
    setIsCorrect4(false);
    let myWord = await getNafnord();
    if (myWord.length > 1) {
      myWord = await getNafnordById(myWord[0].guid);
    }
    setwordINFO(myWord);
    for (var i = 0; i < myWord[0].bmyndir.length; i++) {
      if (myWord[0].bmyndir[i].g === 'NFET') {
        setNFET(myWord[0].bmyndir[i].b);
      }
      if (myWord[0].bmyndir[i].g === 'ÞFET') {
        setÞFET(myWord[0].bmyndir[i].b);
      }
      if (myWord[0].bmyndir[i].g === 'ÞGFET') {
        setÞGFET(myWord[0].bmyndir[i].b);
      }
      if (myWord[0].bmyndir[i].g === 'EFET') {
        setEFET(myWord[0].bmyndir[i].b);
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
        <div className="mainDIVN">
          <h1>Orð: {currentWord}</h1>
          <div className="subDIVSN">
            <p>NFET</p>
            {isCorrect1 &&
              <input onChange={nfetChange} value={nfet} className="inputN correct" type="text"></input>
            }
            {!isCorrect1 &&
              <input onChange={nfetChange} className="inputN" type="text"></input>
            }
          </div>
          <div className="subDIVSN">
            <p>ÞFET</p>
            {isCorrect2 &&
              <input onChange={þfetChange} value={þfet} className="inputN correct" type="text"></input>
            }
            {!isCorrect2 &&
              <input onChange={þfetChange} className="inputN" type="text"></input>
            }
          </div>
          <div className="subDIVSN">
            <p>ÞGFET</p>
            {isCorrect3 &&
              <input onChange={þgfetChange} value={þgfet} className="inputN correct" type="text"></input>
            }
            {!isCorrect3 &&
              <input onChange={þgfetChange} className="inputN" type="text"></input>
            }
          </div>
          <div className="subDIVSN">
            <p>EFET</p>
            {isCorrect4 &&
              <input onChange={efetChange} value={efet} className="inputN correct" type="text"></input>
            }
            {!isCorrect4 &&
              <input onChange={efetChange} className="inputN" type="text"></input>
            }
          </div>
          <div className="subDIVSN">
            <button onClick={fetchData} className="newWordButton">Nýtt orð</button>
            <button onClick={cheater} className="newWordButton">Sjá lausn</button>
            <Link className="linkN" to="/"><button>Forsíða</button></Link>
          </div>
        </div>
      )}
    </Fragment>
  );
}


