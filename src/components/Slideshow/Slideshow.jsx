import { useState } from "react"
import StyledSlideshow from "./StyledSlideshow"

const Slideshow = ({ recipes }) => {
    const [selected, setSelected] = useState(0)

    return (
        <>
            <StyledSlideshow className="wrap">
                <img src={recipes[selected]?.img} alt="Food" />
                <button onClick={() => setSelected((selected + 1) % recipes.length)}>&gt;</button>
            </StyledSlideshow>
            {/* <p>{recipes[selected]?.title}</p> */}
            {/* <button onClick={() => {
            selected > 0 ? 
            setSelected(selected - 1)
            :
            setSelected(selected.length - 1)
            }}>Previous</button> */}
        </>
    )
}

export default Slideshow