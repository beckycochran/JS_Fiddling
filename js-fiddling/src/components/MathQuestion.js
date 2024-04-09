import { useRef, useState } from "react"

const MathQuestion = ({ qAndA }) => {
    const q = qAndA[0]
    const a = qAndA[1]
    const inputRef = useRef()
    const [result, setResult] = useState("unsubmitted")

    const handleSubmit = e => {
        e.preventDefault()
        inputRef.current.focus();
        inputRef.current.valueAsNumber === a ?
            setResult("correct") :
            setResult("incorrect")
    }

    return (
        <>
            <div>Question: {q}</div>
            <form onSubmit={handleSubmit}>
                <input type="number" ref={inputRef} />
                <button type="submit">Submit</button>
            </form>
            {result === "correct" && <div>Correct</div>}
            {result === "incorrect" && <div>Incorrect</div>}
        </>
    )
}

export default MathQuestion
