import StyledError from "./StyledError"

const Error = ({ error }) => {
    return (
        <StyledError>
            {error}
        </StyledError>
    )
}
export default Error