import { useState } from "react";
const Math = () => {
    const [ans, setAns] = useState(undefined)
    const [result, setResult] = useState(undefined)
    
    const questionsAndAnswers = [
        ["1 + 1", 2],
        ["1 + 2", 3],
        ["2 + 2", 4]
    ];

    const selectedIndex = qaArray => {
        return Math.floor(Math.random() * qaArray.length);
    }

    const question = questionsAndAnswers[0][0];
    const answer = questionsAndAnswers[0][1];

    const handleChange = e => {
        setAns(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setResult(ans == 2)
    }

    return <>
        <div>{question}</div>
        <form onSubmit={handleSubmit}>
            <input type="number" onChange={handleChange} />
            <button>Submit</button>
        </form>
        {result &&
            <div>That's correct</div>
        }
        {result == false &&
            <div>That's incorrect</div>
        }
    </>
}

export default Math