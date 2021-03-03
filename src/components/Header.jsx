import StyledLinkBtn from "./Links/StyledLinkBtn"

const Header = () => {
    return (
        <div className="header-title">

            <h1>A place for&nbsp;
            <span className="highlight">
                    you
            </span><br />
             to fall in&nbsp;
             <span className="highlight">
                    love
            </span><br />
             in&nbsp;
            <span className="highlight">
                    cooking
            </span>
            </h1>
            <h4>Don't take my word for it, try it yourself!</h4>
            <StyledLinkBtn href="#target">Learn more &#8595;</StyledLinkBtn>
            <img src="https://res.cloudinary.com/milenajovanovic994/image/upload/v1613997870/sample.jpg" alt="Chef Gagi" className="header-img" />
        </div>
    )
}
export default Header