import './App.css';
import List from "./components/List";
import Details from "./components/Details";
import {useState} from "react";

function App() {
    const [id, setID] = useState('0')

    function UserOnClick(element) {
        setID(element.currentTarget.dataset.id)
    }

    return (
        <>
            <List cbFunc={UserOnClick}/>
            <Details id={id}/>
        </>
    );
}

export default App;
