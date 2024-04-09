const StorytimeOption = ({ name,  options }) => {
    const handleSelect = e => {
        console.log(e.target)
        console.log("select val", e.target.value)
    }

    return <>
        <select defaultValue="" onChange={handleSelect} name={name}>
            <option value="" disabled hidden></option>
            {options.map((e, i) => <option key={i} value={e} >{e}</option>)}
        </select>
    </>
}

export default StorytimeOption