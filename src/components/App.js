import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
        let arr = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"]
        const [str1, setStr1] = useState("");
        const [str2, setStr2] = useState("");
        const [error, setError] = useState(false);
        const [relation, setRelation] = useState("");

        const evaluateRelation = () =>{
            if(!str1 || !str2){
                setError(true);
            }
            let len = str1.length + str2.length;
            let common = 0;
            for(let i of str1){
                if(str2.includes(i)) common++;
            }
            let ans = (len - (2 * common)) % 6;
            setRelation(arr[ans]);
        }

        const clearInput = () =>{
            setStr1("");
            setStr2("");
        }

        return(
            <div id="main">
               {/* Do not remove the main div */}\
               <input data-testid="input1" value={str1} type="text"></input>
               <input data-testid="input2" value={str2} type="text"></input>
               <button data-testid="calculate_relationship" onClick={evaluateRelation}>Calculate Relationship Future</button>
               {error ? "Please Enter valid input" : <h3 data-testid="answer">{relation}</h3>}
               <button data-testid="clear" onClick={clearInput}>Clear</button>
            </div>
        )
    }
}


export default App;
