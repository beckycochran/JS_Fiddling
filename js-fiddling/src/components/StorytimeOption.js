const StorytimeOption = ({ name,  options, arrOfAnswers, setArrOfAnswers }) => {
    const handleSelect = e => {
        setArrOfAnswers([...arrOfAnswers, e.target.value])
    }

    return <>
        <select defaultValue="" onChange={handleSelect} name={name}>
            <option value="" disabled hidden></option>
            {options.map((e, i) => <option key={i} value={e} >{e}</option>)}
        </select>
    </>
}

export default StorytimeOption