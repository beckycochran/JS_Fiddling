const Storytime = () => {
    return <>
        <label for="foods">Choose a food group:</label>
        <select aria-placeholder="" name="foods">
            <option value="unselected" disabled selected hidden></option>
            <option value="fruit">Fruit</option>
            <option value="veg">Veggies</option>
        </select>
    </>
}

export default Storytime