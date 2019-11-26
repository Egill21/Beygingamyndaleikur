import React from 'react';
import { Link } from 'react-router-dom';

import "./Practices.scss";

import Nafnord from "../../routes/nafnord/Nafnord";
import Lysingarord from "../../routes/lysingarord/Lysingarord";
import Sagnord from "../../routes/sagnord/Sagnord";

export default function Practices(props) {

  return (
    <div className="divClass">
      <Link to="/nafnord" className="link">
        <p>Nafnorð</p>
      </Link>
      <Link to="/lysingarord" className="link">
        <p>Lýsingarorð</p>
      </Link>
      <Link to="sagnord" className="link">
        <p>Sagnorð</p>
      </Link>
    </div>
  );
}


