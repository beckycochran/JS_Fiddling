import { useState } from "react";
const Math = () => {
    const [ans, setAns] = useState(undefined)
    const [result, setResult] = useState(undefined)

    const questionsAndAnswers = [
        ["1 + 1", 2],
        ["1 + 2", 3],
        ["2 + 2", 4]
    ];

    const handleChange = e => {
        setAns(e.target.value)
    }

    const handleSubmit = (a) => {
        setResult(ans == a)
    }

    return (<div>
        {questionsAndAnswers.map((qAndA) => {
            const q = qAndA[0]
            const a = qAndA[1]
            return <>
                <div>{q}</div>
                <form onSubmit={handleSubmit(a)}>
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
        })}
    </div>)

}

export default Math