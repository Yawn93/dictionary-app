import React from "react";
import Meaning from "./Meaning.js";

export default function Results(props) {
    if (props.results) {
        return(
            <div className="Results">
                <h2>{props.word}</h2>
                {props.meanings.map(function(meaning, index) {
                    return (
                        <div key={index}>
                            <Meaning meaning={meaning} />
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return null;
    }
}