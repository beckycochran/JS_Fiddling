import { useState } from "react"
import StorytimeOption from "./StorytimeOption"

const Storytime = () => {
    const [isPublished, setIsPublished] = useState(false)
    const [arrOfAnswers, setArrOfAnswers] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
        const innerTextArr = e.target.innerText.split("  ")
        const arrWOBadChars = innerTextArr.map((element) => element.replace(/\n/g, '').replace("Publish!",""))
        // const completeStoryArr = arrOfAnswers.pu
        // if any selects are empty, return error/alert and highlight empty element. else, publish with timestamp using date-fns
        setIsPublished(true)
    }

    console.log(arrOfAnswers)

    return <>
        <form onSubmit={handleSubmit}>
            <section>
                There once was a prince named <StorytimeOption name={"mainChar"} options={["Paul", "Peter", "Patrick"]} arrOfAnswers={arrOfAnswers} setArrOfAnswers={setArrOfAnswers}/> ,
                who loved to <StorytimeOption name={"mainCharMov"} options={["prance", "somersault", "stumble"]} arrOfAnswers={arrOfAnswers} setArrOfAnswers={setArrOfAnswers}/> into the woods and <StorytimeOption name={"mainCharJob"} options={["whittle toy trains", "pickle peppers", "yodel"]} arrOfAnswers={arrOfAnswers} setArrOfAnswers={setArrOfAnswers}/> .
            </section>
            <section>
                The prince encountered a fair maiden named <StorytimeOption name={"princess"} options={["Delilah", "Diane", "Deanna"]} arrOfAnswers={arrOfAnswers} setArrOfAnswers={setArrOfAnswers}/> ,
                whose hair was <StorytimeOption name={"princessHair"} options={["brown as burgundy", "soft as a tortoses' shell", "long as a gnat's wings"]} arrOfAnswers={arrOfAnswers} setArrOfAnswers={setArrOfAnswers}/> .
                They took to <StorytimeOption name={"dateActivity"} options={["making pumpernickel sandwiches", "watching hulu", "rock climbing in Yosemite"]} arrOfAnswers={arrOfAnswers} setArrOfAnswers={setArrOfAnswers}/> together,
                and fell wildly in love.
            </section>
            <button type="submit">Publish!</button>
        </form>
        {isPublished && <div>Your story here</div>}
    </>
}

export default Storytime