import MathQuestion from "./MathQuestion";

const Math = () => {
    const questionsAndAnswers = [
        ["1 + 1", 2],
        ["1 + 2", 3],
        ["2 + 2", 4]
    ];

    return Object.values(questionsAndAnswers).map((qAndA, index) => <MathQuestion key={index} qAndA={qAndA}/>)    
}

export default Math