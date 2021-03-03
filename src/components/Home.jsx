import Footer from "./Footer"
import Header from "./Header"
import SectionOneMain from "./SectionOneMain"
import SectionTwoMain from "./SectionTwoMain"
import StyledFooter from "./StyledFooter"
import StyledHeader from "./StyledHeader"
import StyledMain from "./StyledMain"
import StyledWrapper from "./StyledWrapper"

const Home = () => {
    return (
        <StyledWrapper>
            <StyledHeader>
                <Header />
            </StyledHeader>
            <StyledMain id="target">
                <SectionOneMain />
                <SectionTwoMain />
            </StyledMain >
            <StyledFooter>
                <Footer />
            </StyledFooter>
        </StyledWrapper >
    )
}
export default Home