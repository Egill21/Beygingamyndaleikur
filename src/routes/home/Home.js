import React, { Component, Fragment } from 'react';

import { getLectureList } from '../../api';

import Header from '../../components/header/Header';
import Practices from '../../components/practices/Practices';

export default function Home() {
  const handleClick = gamli  => {
    console.log('whaat')
  }

  return (
    <Fragment>
      <Practices />
    </Fragment>
  )
}
