import { useState } from "react"
import StorytimeOption from "./StorytimeOption"

const Storytime = () => {
    const [isPublished, setIsPublished] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(e)
        setIsPublished(true)
    }

    return <>
        <form onSubmit={handleSubmit}>
            <section>
                There once was a prince named <StorytimeOption name={"mainChar"} options={["Paul", "Peter", "Patrick"]}/>,
                who loved to <StorytimeOption name={"mainCharMov"} options={["prance", "somersault", "stumble"]}/>
                into the woods and <StorytimeOption name={"mainCharJob"} options={["whittle toy trains", "pickle peppers", "yodel"]}/>.
            </section>
            <button type="submit">Publish!</button>
        </form>
        {isPublished && <div>Your story here</div>}
    </>
}

export default Storytime