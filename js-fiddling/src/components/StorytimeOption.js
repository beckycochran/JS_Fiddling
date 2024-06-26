const StorytimeOption = ({ ind, name, options, arrOfAnswers }) => {
    const handleSelect = e => {
        arrOfAnswers[ind] = e.target.value
    }

    return <>
        <select defaultValue="" onChange={handleSelect} name={name}>
            <option value="" disabled hidden></option>
            {options.map((e, i) => <option key={i} value={e} >{e}</option>)}
        </select>
    </>
}

export default StorytimeOption