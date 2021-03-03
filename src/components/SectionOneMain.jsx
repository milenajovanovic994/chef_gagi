const SectionOneMain = () => {
    return (
        <section className="section">
            <div className="section-title">
                <h2 className="section-description">About me</h2>
            </div>
            <div className="features">
                <img
                    src="#"
                    alt="Gagi"
                    className="features-img lazy-img"
                />
                <div className="features-feature">
                    <h5 className="features-header">My biography</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
                        sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
                                debitis ducimus.</p>
                </div>

                <div className="features-feature">
                    <h5 className="features-header">Competitions</h5>
                    <p>
                        Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
                        inventore ab? Nulla incidunt eius numquam sequi iste pariatur
                                quibusdam!</p>
                </div>
                <img
                    src="img/grow-lazy.jpg"
                    alt="Plant"
                    className="features-img lazy-img"
                />

                <img
                    src="img/card-lazy.jpg"
                    alt="Credit card"
                    className="features-img lazy-img"
                />
                <div className="features-feature">
                    <h5 className="features-header">Vision</h5>
                    <p>
                        Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
                        eveniet consequatur odit quam quos possimus assumenda dicta fuga
                                inventore ab.</p>
                </div>
            </div>
        </section >
    )
}
export default SectionOneMain