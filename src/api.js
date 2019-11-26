/**
 * "Gervi" API sem skilar statískum gögnum fyrir fyrirlestra. Gætum hæglega
 * tengt hérna við "alvöru" API.
 * Sameinar statísk gögn við gögn geymd í localStorage.
 */


// Lykill sem við geymum vistaðar færslur undir.
// const LOCALSTORAGE_KEY = 'saved_lectures';

import data from './ord.json';

const baseurl = 'https://bin.arnastofnun.is/api/ord/';

const nafnord = ['hestur', 'maður', 'kona', 'hundur', 'flaska', 'glas'];

async function getNafnordById(id) {
  const url = new URL(id, baseurl);
  const response = await fetch(url.href);

  if (response.status === 200) {
    return response.json();
  }

  if (response.status === 404) {
    return 'Not Found';
  }

  return 'Error';
}

async function getNafnord() {
  const word = data.ord.nafnord[Math.floor(Math.random()*data.ord.nafnord.length)];
  console.log(word);

  const url = new URL(word, baseurl);
  const response = await fetch(url.href);

  if (response.status === 200) {
    return response.json();
  }

  if (response.status === 404) {
    return 'Not Found';
  }

  return 'Error';
}

async function getLysingarordById(id) {
  const url = new URL(id, baseurl);
  const response = await fetch(url.href);

  if (response.status === 200) {
    return response.json();
  }

  if (response.status === 404) {
    return 'Not Found';
  }

  return 'Error';
}

async function getLysingarord() {
  const word = data.ord.lysingarord[Math.floor(Math.random()*data.ord.lysingarord.length)];
  const url = new URL(word, baseurl);
  const response = await fetch(url.href);

  if (response.status === 200) {
    return response.json();
  }

  if (response.status === 404) {
    return 'Not Found';
  }

  return 'Error';
}

async function getRightSagnord(words) {
  let id = '';
  for (var i = 0; i < words.length; i++) {
    if (words[i].ofl === 'so') {
      id = words[i].guid;
    }
  }

  const url = new URL(id, baseurl);
  const response = await fetch(url.href);

  if (response.status === 200) {
    return response.json();
  }

  if (response.status === 404) {
    return 'Not Found';
  }

  return 'Error';

}

async function getSagnord() {
  const word = data.ord.sagnord[Math.floor(Math.random()*data.ord.sagnord.length)];
  const url = new URL(word, baseurl);
  const response = await fetch(url.href);

  if (response.status === 200) {
    return response.json();
  }

  if (response.status === 404) {
    return 'Not Found';
  }

  return 'Error';
}


export {
  getNafnord,
  getNafnordById,
  getLysingarord,
  getLysingarordById,
  getSagnord,
  getRightSagnord,
}
