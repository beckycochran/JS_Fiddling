// import { useState } from "react";
import MathQuestion from "./MathQuestion";

const Math = () => {
    // const [ans, setAns] = useState(undefined)
    // const [result, setResult] = useState(undefined)

    const questionsAndAnswers = [
        ["1 + 1", 2],
        ["1 + 2", 3],
        ["2 + 2", 4]
    ];

    // const handleChange = e => {
    //     setAns(e.target.value)
    // }

    // const handleSubmit = (a) => {
    //     setResult(ans == a)
    // }

    return (<div>
        {Object.values(questionsAndAnswers).map((qAndA, index) => <MathQuestion key={index} qAndA={qAndA}/>)}
    </div>)

}

export default Math