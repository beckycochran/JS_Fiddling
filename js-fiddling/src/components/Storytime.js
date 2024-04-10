import { useState } from "react"
import StorytimeOption from "./StorytimeOption"

const Storytime = () => {
    const [isPublished, setIsPublished] = useState(false)
    const [arrOfAnswers, setArrOfAnswers] = useState([])
    const [theStory, setTheStory] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        // check for any empty values
        if (Object.values(arrOfAnswers).length !== arrOfAnswers.length || arrOfAnswers.length < 6) {
            console.log("empty element")
            alert("you need to fill in all values")
        } else {
            const innerTextArr = e.target.innerText.split("  ")
            const arrWOBadChars = innerTextArr.map((element) => element.replace(/\n/g, '').replace("Publish!", ""))
            const completeStoryArr = arrWOBadChars.map((element, index) => `${element} ${arrOfAnswers[index]} `)
            const finalStory = completeStoryArr.join('').replace(" .", ".").replace(" ,", ",").replace("undefined", "")

            setTheStory(finalStory)
            setIsPublished(true)
        }
    }

    const handleReset = e => {
        setIsPublished(false)
        setTheStory("")
        setArrOfAnswers([])
    }


    return <>
        {!isPublished &&
            <form onSubmit={handleSubmit}>
                <section>
                    There once was a prince named <StorytimeOption ind={0} name={"mainChar"} options={["Paul", "Peter", "Patrick"]} arrOfAnswers={arrOfAnswers} /> ,
                    who loved to <StorytimeOption ind={1} name={"mainCharMov"} options={["prance", "somersault", "stumble"]} arrOfAnswers={arrOfAnswers} /> into the woods
                    and <StorytimeOption ind={2} name={"mainCharJob"} options={["whittle toy trains", "pickle peppers", "yodel"]} arrOfAnswers={arrOfAnswers} /> .
                </section>
                <section>
                    The prince encountered a fair maiden named <StorytimeOption ind={3} name={"princess"} options={["Delilah", "Diane", "Deanna"]} arrOfAnswers={arrOfAnswers} /> ,
                    whose hair was <StorytimeOption ind={4} name={"princessHair"} options={["brown as burgundy", "soft as a tortoses' shell", "long as a gnat's wings"]} arrOfAnswers={arrOfAnswers} /> .
                    They took to <StorytimeOption ind={5} name={"dateActivity"} options={["making pumpernickel sandwiches", "watching hulu", "rock climbing in Yosemite"]} arrOfAnswers={arrOfAnswers} /> together,
                    and fell wildly in love.
                </section>
                <button type="submit">Publish!</button>
            </form>
        }
        {isPublished && (
            <>
                <div>{theStory}</div>
                <button onClick={handleReset}>Reset</button>
            </>
        )}
    </>
}

export default Storytime