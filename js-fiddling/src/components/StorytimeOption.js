const StorytimeOption = ({ name,  options }) => {
    return <>
        <select name={name}>
            <option value="unselected" disabled selected hidden></option>
            {options.map((e, i) => <option key={i} value={e}>{e}</option>)}
        </select>
    </>
}

export default StorytimeOption