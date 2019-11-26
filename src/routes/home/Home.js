import React, { Component, Fragment } from 'react';

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
