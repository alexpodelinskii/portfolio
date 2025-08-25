import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";

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
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};
const StyledSlider = styled.div`
    background-color: #6887ca;
    border: 1px solid red;
    max-width: 500px;
`
const Slide = styled.div`
    text-align: center;`
const Text = styled.p``
const Name = styled.span``
const Pagination = styled.div`
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: red;
        border-radius: 100%;
        margin: 5px;
    }
`