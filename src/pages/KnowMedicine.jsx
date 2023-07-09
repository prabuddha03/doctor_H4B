import React from "react";
import Entry from "../components/Entry";
import emojipedia from "../constants/index";
import NavbarSec from "../components/NavbarSec";
import "../styles/medicineStyle.css";
import Footer from "../components/Footer";

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

const KnowMedicine = () => {
  return (
    <div>
      <NavbarSec />
      <h1 className="pt-10">
        <span className="font-bold text-cyan-500 text-3xl">
          Know Your Medicine
        </span>
        <button className="btn btn-info my-5 w-full">
          Find The Cheapest Alternative From Our Recomendation
        </button>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
      <Footer />
    </div>
  );
};

export default KnowMedicine;
