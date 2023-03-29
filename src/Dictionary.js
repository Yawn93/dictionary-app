import React, {useState} from "react";
import axios from "axios";
import Results from "./Results.js";
import './Dictionary.css';

function Dictionary() {
    let [word, setWord] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data);
    }

    function handleKeywordChange(event) {
        setWord(event.target.value);
    }

    function search(event) {
        event.preventDefault();
        let api = "b8453383f75c0afafd7ft88f33789o5a"
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${api}`;
        axios.get(apiUrl).then(handleResponse);
    }

    return (
        <div className="Dictionary">
            <h1>What's the word of today?</h1>
                <form onSubmit={search}>
                    <input type="search" onChange={handleKeywordChange} />
                    <br/>
                    <span>example: sunset, light, sky...</span>
                 </form>
                 <Results results={results}/>
        </div>
    );
};

export default Dictionary;