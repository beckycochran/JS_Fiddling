import { useContext, useEffect } from "react"
import { UserContext } from "../Context"

const Greeting = () => {
    const { user } = useContext(UserContext)

    useEffect(()=>{
        console.log("form submitted!")
    }, [user.name])
    return<div>Hi, {user.name}</div>
}

export default Greeting;
