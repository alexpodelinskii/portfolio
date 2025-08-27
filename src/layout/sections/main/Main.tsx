import photo from './../../../assets/images/Photo.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.ts";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align='center' justify={'space-between'}>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Svetlana Dyablo</span></Name>
                        <MainTitle>A Web Developer. </MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt='My photo'/>
                    </PhotoWrapper>

                </FlexWrapper>
            </Container>

        </StyledMain>

    );
};
const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
`

const SmallText = styled.h2`
    font-size: 14px;
    font-weight: 400;
    text-align: left;
`
const Name = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 50px;
    text-align: left;

    span {
        position: relative;
        z-index: 2;

        &::before {
            content: '';
            display: block;
            height: 20px;
            width: 100%;
            position: absolute;
            bottom: 0px;
            left: 0;
            background-color: ${theme.colors.fontColorAccent};
            z-index: -1;
        }

    }
`
const MainTitle = styled.h1`
    font-weight: 400;
    font-size: 27px;
    text-align: left;

`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    
`
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 2;
    &::before{
        content: '';
        display: block;
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.fontColorAccent};
        position: absolute;
        left: 24px;
        bottom: 24px;
        z-index: -1;
    }
    

`