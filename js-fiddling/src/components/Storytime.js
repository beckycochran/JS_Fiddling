import { useState } from "react"
import StorytimeOption from "./StorytimeOption"

const Storytime = () => {
    const [isPublished, setIsPublished] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        setIsPublished(true)
    }

    return <>
        <form onSubmit={handleSubmit}>
            <StorytimeOption name={"mainChar"} options={["Paul", "Peter", "Priscilla"]}/>
            <button type="submit">Publish!</button>
        </form>
        {isPublished && <div>Your story here</div>}
    </>
}

export default Storytime