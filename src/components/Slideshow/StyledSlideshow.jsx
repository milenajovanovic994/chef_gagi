import styled from 'styled-components'

const StyledSlideshow = styled.div`
    height: 150px;
    text-align: center;
    .wrap {
        position: relative;
    }
    button {
        position: absolute;
        left: 700px;
        width: 20px;
        height: 150px;
        /* margin: 0px;
        padding: 0px; */
    }
    img {
        position: absolute;
        left: 500px;
        width: 200px;
        height: 150px;
        /* margin: 0px;
        padding: 0px; */
    }
`

export default StyledSlideshow