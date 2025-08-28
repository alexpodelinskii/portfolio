import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";
import {theme} from "../../styles/Theme.ts";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores aspernatur
                        blanditiis
                        cumque delectus dolorem doloremque eum, eveniet ex explicabo impedit iste iure laborum nesciunt
                        nobis suscipit tempore velit veniam.</Text>
                    <Name>@ivan ivanow</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span className={'active'}></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};
const StyledSlider = styled.div`
    max-width: 500px;
`
const Slide = styled.div`
    text-align: center;`
const Text = styled.p``
const Name = styled.span`
    display: inline-block;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-top: 22px;
    margin-bottom: 42px;
`
const Pagination = styled.div`
    span {
        background: rgba(255, 255, 255, 0.5);
        display: inline-block;
        width: 7px;
        height: 7px;
        border-radius: 7px;
        &+ span{
            margin-left: 5px;
        }
        
        &.active{
            background-color: ${theme.colors.fontColorAccent};
            width: 20px;
        }
    }
    
`