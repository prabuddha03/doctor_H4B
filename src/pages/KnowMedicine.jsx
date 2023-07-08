import React from 'react';
import Entry from '../components/Entry';
import emojipedia from '../constants/index';
import NavbarSec from '../components/NavbarSec';
import '../styles/medicineStyle.css';
import Footer from '../components/Footer'

function createEntry(emojiTerm) {
    return (
      <Entry
        key={emojiTerm.id}
        emoji={emojiTerm.emoji}
        name={emojiTerm.name}
        description={emojiTerm.meaning}
      />
    );
  }

const KnowMedicine = () => {
  return (
    <div>
    <NavbarSec />
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
      <Footer />
    </div>
  )
}

export default KnowMedicine
