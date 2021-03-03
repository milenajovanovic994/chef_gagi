import Contact from "./Contact"
import { useState } from "react"

const SectionTwoMain = () => {
    const [visible, setVisible] = useState(false)

    return (
        <section className="section section-contact">
            <div className="section-title">
                <h3 className="section-header">
                    If you have any further questions, or need any kind of advice, feel free to contact me!</h3>
            </div>
            <button className="btn" onClick={() => {
                setVisible(true)
            }}>Contact me!</button>
            <Contact visible={visible} setVisible={setVisible} />
        </section>
    )
}
export default SectionTwoMain