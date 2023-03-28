import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
    return (
        <div className="Meaning">
        <h3>{props.meanings.partOfSpeech}</h3>
        {props.meanings.definitions.map(function(meanings, index) {
            return (
                <div key={index}>
                    <span>
                        Definition: {meanings.definition}
                        <br />
                        Example: <em>{meanings.example}</em>
                        <br />
                        <Synonyms synonyms={meanings.synonyms} />
                    </span>
                </div>
            );
        })}
        </div>
    );
}