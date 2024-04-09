import { useState } from "react"
import StorytimeOption from "./StorytimeOption"

const Storytime = () => {
    const [isPublished, setIsPublished] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(e.target.innerText)
        // if any selects are empty, return error/alert and highlight empty element. else, publish with timestamp using date-fns
        setIsPublished(true)
    }

    return <>
        <form onSubmit={handleSubmit}>
            <section>
                There once was a prince named <StorytimeOption name={"mainChar"} options={["Paul", "Peter", "Patrick"]} />,
                who loved to <StorytimeOption name={"mainCharMov"} options={["prance", "somersault", "stumble"]} /> into the woods and <StorytimeOption name={"mainCharJob"} options={["whittle toy trains", "pickle peppers", "yodel"]} />.
            </section>
            <section>
                The prince encountered a fair maiden named <StorytimeOption name={"princess"} options={["Delilah", "Diane", "Deanna"]} />,
                whose hair was <StorytimeOption name={"princessHair"} options={["brown as burgundy", "soft as a tortoses' shell", "long as a gnat's wings"]} />.
                They took to <StorytimeOption name={"dateActivity"} options={["making pumpernickel sandwiches", "watching hulu", "rock climbing in Yosemite"]} /> together,
                and fell wildly in love.
            </section>
            <button type="submit">Publish!</button>
        </form>
        {isPublished && <div>Your story here</div>}
    </>
}

export default Storytime