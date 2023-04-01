import React, {useState} from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";
import './Dictionary.css';

function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data);
    }

    function handlePhotoResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        let api = "b8453383f75c0afafd7ft88f33789o5a"
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${api}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let photoApiKey = "b8453383f75c0afafd7ft88f33789o5a"
        let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photoApiKey}`;
        axios.get(photoApiUrl).then(handlePhotoResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function load() {
        setLoaded(true);
        search();
    }

    if(loaded) {
        return (
            <div className="Dictionary">
                <h1>What's the word of today?</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="search" onChange={handleKeywordChange} />
                        <br/>
                        <span>example: sunset, light, sky...</span>
                     </form>
                     <Results results={results}/>
                     <Photos photos={photos}/>
            </div>
        );
    } else {
        load();
        return "Loading";
    }
};

export default Dictionary;