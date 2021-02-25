import Option from "./Option"

const Select = ({ setSelect, options, type }) => {
    return (
        <>
            <select onChange={(e) => setSelect(e.target.value)}>
                <option value=''>All {type}</option>
                {options.map(opt => <Option key={opt} opt={opt} />)}
            </select>
        </>
    )
}

export default Select