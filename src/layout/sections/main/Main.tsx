import photo from './../../../assets/images/Photo.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align='center' justify={'space-around'}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Svetlana Dyablo</Name>
                    <MainTitle>A Web Developer. </MainTitle>
                </div>

                <Photo src={photo} alt='My photo'/>
            </FlexWrapper>
        </StyledMain>

    );
};
const StyledMain = styled.div`
    min-height: 100vh;
    background-color: aqua;
`
const MainTitle = styled.h1`

`
const Name = styled.h2`

`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`