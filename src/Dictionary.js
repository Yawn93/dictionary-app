import React, {useState} from "react";
import './Dictionary.css';

function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function search(event) {
        event.preventDefault();
        alert(`searching for ${keyword}`);
    }

    return (
        <div className="Dictionary">
            <h2>What's the word of today?</h2>
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} />
        </form>
        </div>
    );
};

export default Dictionary;