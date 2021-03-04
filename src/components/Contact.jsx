const Contact = ({ visible, setVisible }) => {

    return visible ? (
        <>
            <div className="modal">
                <button className="btn--close-modal" onClick={() => {
                    setVisible(false)
                }}>&times;</button>
                <h2 className="modal-header">
                    Ask me anything <br />
        in just a <span className="highlight">few seconds</span>
                </h2>
                <form className="modal-form">
                    <input type="text" placeholder="Your name..." />
                    <input type="email" placeholder="Your email adress..." />
                    <textarea cols="10" rows="10" placeholder="Your question, sugestion..."></textarea>
                    <input type="submit" className="btn" value="Submit" />
                </form>
            </div>
            <div className="overlay" onClick={() => {
                setVisible(false)
            }}></div>
        </>
    )
        :
        (
            <>
            </>
        )
}
export default Contact