import photo from './../../../assets/images/Photo.png'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/Common.ts";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align='center' justify={'space-around'} wrap={'wrap'}>
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
    ${font({family: "'Josefin Sans', sans-serif", Fmax: 50, Fmin: 36, weight: 700})}
    text-align: left;
    letter-spacing: 0.05em;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 2;
        white-space: nowrap;
        
        &::before {
            content: '';
            display: block;
            height: 20px;
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: ${theme.colors.fontColorAccent};
            z-index: -1;
        }
@media ${theme.media.mobile} {
    margin: 15px 0 22px;
}
    }
`
const MainTitle = styled.h1`
    ${font({Fmax: 27, Fmin: 20, weight: 400})}
    text-align: left;
    
        
    }
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right: 41px;
    
    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;


    }

`
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 2;
    margin-top: 65px;
    
    &::before {
        content: '';
        display: block;
        width: 384px;
        height: 470px;
        border: 5px solid ${theme.colors.fontColorAccent};
        position: absolute;
        left: 24px;
        top: -24px;
        
        z-index: -1;
        @media ${theme.media.mobile} {
            width: 314px;
            height: 414px;
            top: -17px;
            left: 20px;
            
        }
       
            
        }
    }


`