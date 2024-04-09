const StorytimeOption = ({ name,  options }) => {
    return <>
        <select defaultValue="" name={name}>
            <option value="" disabled hidden></option>
            {options.map((e, i) => <option key={i} value={e}>{e}</option>)}
        </select>
    </>
}

export default StorytimeOption