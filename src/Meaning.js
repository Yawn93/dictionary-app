import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
    return (
        <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <div>
            <span>
                Definition: {props.meaning.definition}
                <br />
                Example: <em>{props.meaning.example}</em>
                <br />
                <Synonyms synonyms={props.meaning.synonyms} />
            </span>
        </div>
        </div>
    );
}