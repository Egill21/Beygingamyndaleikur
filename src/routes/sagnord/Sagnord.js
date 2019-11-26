import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';


import "./Sagnord.scss";

import { getSagnord, getRightSagnord } from '../../api';

export default function Sagnord(props) {

  const [wordINFO, setwordINFO] = useState([]);
  const [currentWord, setCurrentWord] = useState('');

  const [nt_1p_et, setNT1PET] = useState(''); // eg..nutid
  const [þt_1p_et, setÞT1PET] = useState(''); // eg..thatid

  const [nt_2p_et, setNT2PET] = useState(''); // thu.. nutid
  const [þt_2p_et, setÞT2PET] = useState(''); // thu.. thatid

  const [nt_3p_et, setNT3PET] = useState(''); // thad.. nutid
  const [þt_3p_et, setÞT3PET] = useState(''); // thad.. thatid

  const [nt_1p_ft, setNT1PFT] = useState(''); // vid..nutid
  const [þt_1p_ft, setÞT1PFT] = useState(''); // vid..thatid

  const [nt_2p_ft, setNT2PFT] = useState(''); // thid.. nutid
  const [þt_2p_ft, setÞT2PFT] = useState(''); // thid.. thatid

  const [nt_3p_ft, setNT3PFT] = useState(''); // thau.. nutid
  const [þt_3p_ft, setÞT3PFT] = useState(''); // thau.. thatid
  
  const [isCorrect1, setIsCorrect1] = useState(false);
  const [isCorrect2, setIsCorrect2] = useState(false);
  const [isCorrect3, setIsCorrect3] = useState(false);
  const [isCorrect4, setIsCorrect4] = useState(false);
  const [isCorrect5, setIsCorrect5] = useState(false);
  const [isCorrect6, setIsCorrect6] = useState(false);
  const [isCorrect7, setIsCorrect7] = useState(false);
  const [isCorrect8, setIsCorrect8] = useState(false);
  const [isCorrect9, setIsCorrect9] = useState(false);
  const [isCorrect10, setIsCorrect10] = useState(false);
  const [isCorrect11, setIsCorrect11] = useState(false);
  const [isCorrect12, setIsCorrect12] = useState(false);

  const [loading, setLoading] = useState(false);

  function nt_1p_etChange(e) {
    if (e.target.value === nt_1p_et) {
      setIsCorrect1(true);
    }
  }

  function þt_1p_etChange(e) {
    if (e.target.value === þt_1p_et) {
      setIsCorrect2(true);
    }
  }

  function nt_2p_etChange(e) {
    if (e.target.value === nt_2p_et) {
      setIsCorrect3(true);
    }
  }

  function þt_2p_etChange(e) {
    if (e.target.value === þt_2p_et) {
      setIsCorrect4(true);
    }
  }

  function nt_3p_etChange(e) {
    if (e.target.value === nt_3p_et) {
      setIsCorrect5(true);
    }
  }

  function þt_3p_etChange(e) {
    if (e.target.value === þt_3p_et) {
      setIsCorrect6(true);
    }
  }

  function nt_1p_ftChange(e) {
    if (e.target.value === nt_1p_ft) {
      setIsCorrect7(true);
    }
  }

  function þt_1p_ftChange(e) {
    if (e.target.value === þt_1p_ft) {
      setIsCorrect8(true);
    }
  }

  function nt_2p_ftChange(e) {
    if (e.target.value === nt_2p_ft) {
      setIsCorrect9(true);
    }
  }

  function þt_2p_ftChange(e) {
    if (e.target.value === þt_2p_ft) {
      setIsCorrect10(true);
    }
  }

  function nt_3p_ftChange(e) {
    if (e.target.value === nt_3p_ft) {
      setIsCorrect11(true);
    }
  }

  function þt_3p_ftChange(e) {
    if (e.target.value === þt_3p_ft) {
      setIsCorrect12(true);
    }
  }

  function cheater() {
    setIsCorrect1(true);
    setIsCorrect2(true);
    setIsCorrect3(true);
    setIsCorrect4(true);
    setIsCorrect5(true);
    setIsCorrect6(true);
    setIsCorrect7(true);
    setIsCorrect8(true);
    setIsCorrect9(true);
    setIsCorrect10(true);
    setIsCorrect11(true);
    setIsCorrect12(true);
  }

  async function fetchData() {
    setLoading(true);
    setIsCorrect1(false);
    setIsCorrect2(false);
    setIsCorrect3(false);
    setIsCorrect4(false);
    setIsCorrect5(false);
    setIsCorrect6(false);
    setIsCorrect7(false);
    setIsCorrect8(false);
    setIsCorrect9(false);
    setIsCorrect10(false);
    setIsCorrect11(false);
    setIsCorrect12(false);
    let myWord = await getSagnord();
    if (myWord.length > 1) {
      myWord = await getRightSagnord(myWord);
    }
    setwordINFO(myWord);
    for (var i = 0; i < myWord[0].bmyndir.length; i++) {
      if (myWord[0].bmyndir[i].g === 'GM-FH-NT-1P-ET') {
        setNT1PET(myWord[0].bmyndir[i].b);
      } else if (myWord[0].bmyndir[i].g === 'GM-FH-ÞT-1P-ET') {
        setÞT1PET(myWord[0].bmyndir[i].b);
      } else if (myWord[0].bmyndir[i].g === 'GM-FH-NT-2P-ET') {
        setNT2PET(myWord[0].bmyndir[i].b);
      } else if (myWord[0].bmyndir[i].g === 'GM-FH-ÞT-2P-ET') {
        setÞT2PET(myWord[0].bmyndir[i].b);
      } else if (myWord[0].bmyndir[i].g === 'GM-FH-NT-3P-ET') {
        setNT3PET(myWord[0].bmyndir[i].b);
      } else if (myWord[0].bmyndir[i].g === 'GM-FH-ÞT-3P-ET') {
        setÞT3PET(myWord[0].bmyndir[i].b);
      } else if (myWord[0].bmyndir[i].g === 'GM-FH-NT-1P-FT') {
        setNT1PFT(myWord[0].bmyndir[i].b);
      } else if (myWord[0].bmyndir[i].g === 'GM-FH-ÞT-1P-FT') {
        setÞT1PFT(myWord[0].bmyndir[i].b);
      } else if (myWord[0].bmyndir[i].g === 'GM-FH-NT-2P-FT') {
        setNT2PFT(myWord[0].bmyndir[i].b);
      } else if (myWord[0].bmyndir[i].g === 'GM-FH-ÞT-2P-FT') {
        setÞT2PFT(myWord[0].bmyndir[i].b);
      } else if (myWord[0].bmyndir[i].g === 'GM-FH-NT-3P-FT') {
        setNT3PFT(myWord[0].bmyndir[i].b);
      } else if (myWord[0].bmyndir[i].g === 'GM-FH-ÞT-3P-FT') {
        setÞT3PFT(myWord[0].bmyndir[i].b);
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
        <div className="mainDIV">
          <h1>Orð: {currentWord}</h1>
          <div className="subDIVS">
            <p>Ég...(nútíð-eintala)</p>
            {isCorrect1 &&
              <input onChange={nt_1p_etChange} value={nt_1p_et} className="input correct" type="text"></input>
            }
            {!isCorrect1 &&
              <input onChange={nt_1p_etChange} className="input" type="text"></input>
            }
          </div>
          <div className="subDIVS">
            <p>Ég...(þátíð-eintala)</p>
            {isCorrect2 &&
              <input onChange={þt_1p_etChange} value={þt_1p_et} className="input correct" type="text"></input>
            }
            {!isCorrect2 &&
              <input onChange={þt_1p_etChange} className="input" type="text"></input>
            }
          </div>
          <div className="subDIVS">
            <p>Þú...(nútíð-eintala)</p>
            {isCorrect3 &&
              <input onChange={nt_2p_etChange} value={nt_2p_et} className="input correct" type="text"></input>
            }
            {!isCorrect3 &&
              <input onChange={nt_2p_etChange} className="input" type="text"></input>
            }
          </div>
          <div className="subDIVS">
            <p>Þú...(þátíð-eintala)</p>
            {isCorrect4 &&
              <input onChange={þt_2p_etChange} value={þt_2p_et} className="input correct" type="text"></input>
            }
            {!isCorrect4 &&
              <input onChange={þt_2p_etChange} className="input" type="text"></input>
            }
          </div>
          <div className="subDIVS">
            <p>Það...(nútíð-eintala)</p>
            {isCorrect5 &&
              <input onChange={nt_3p_etChange} value={nt_3p_et} className="input correct" type="text"></input>
            }
            {!isCorrect5 &&
              <input onChange={nt_3p_etChange} className="input" type="text"></input>
            }
          </div>
          <div className="subDIVS">
            <p>Það...(þátíð-eintala)</p>
            {isCorrect6 &&
              <input onChange={þt_3p_etChange} value={þt_3p_et} className="input correct" type="text"></input>
            }
            {!isCorrect6 &&
              <input onChange={þt_3p_etChange} className="input" type="text"></input>
            }
          </div>
          <div className="subDIVS">
            <p>Við...(nútíð-fleirtala)</p>
            {isCorrect8 &&
              <input onChange={nt_1p_ftChange} value={nt_1p_ft} className="input correct" type="text"></input>
            }
            {!isCorrect8 &&
              <input onChange={nt_1p_ftChange} className="input" type="text"></input>
            }
          </div>
          <div className="subDIVS">
            <p>Við...(þátíð-fleirtala)</p>
            {isCorrect8 &&
              <input onChange={þt_1p_ftChange} value={þt_1p_ft} className="input correct" type="text"></input>
            }
            {!isCorrect8 &&
              <input onChange={þt_1p_ftChange} className="input" type="text"></input>
            }
          </div>
          <div className="subDIVS">
            <p>Þið...(nútíð-fleirtala)</p>
            {isCorrect9 &&
              <input onChange={nt_2p_ftChange} value={nt_2p_ft} className="input correct" type="text"></input>
            }
            {!isCorrect9 &&
              <input onChange={nt_2p_ftChange} className="input" type="text"></input>
            }
          </div>
          <div className="subDIVS">
            <p>Þið...(þátíð-fleirtala)</p>
            {isCorrect10 &&
              <input onChange={þt_2p_ftChange} value={þt_2p_ft} className="input correct" type="text"></input>
            }
            {!isCorrect10 &&
              <input onChange={þt_2p_ftChange} className="input" type="text"></input>
            }
          </div>
          <div className="subDIVS">
            <p>Þau...(nútíð-fleirtala)</p>
            {isCorrect11 &&
              <input onChange={nt_3p_ftChange} value={nt_3p_ft} className="input correct" type="text"></input>
            }
            {!isCorrect11 &&
              <input onChange={nt_3p_ftChange} className="input" type="text"></input>
            }
          </div>
          <div className="subDIVS">
            <p>Þau...(þátíð-fleirtala)</p>
            {isCorrect12 &&
              <input onChange={þt_3p_ftChange} value={þt_3p_ft} className="input correct" type="text"></input>
            }
            {!isCorrect12 &&
              <input onChange={þt_3p_ftChange} className="input" type="text"></input>
            }
          </div>
          <div className="subDIVS">
            <button onClick={fetchData} className="newWordButton">Nýtt orð</button>
            <button onClick={cheater} className="newWordButton">Sjá lausn</button>
            <Link className="link" to="/"><button>Forsíða</button></Link>
          </div>
        </div>
      )}
    </Fragment>
  );
}


