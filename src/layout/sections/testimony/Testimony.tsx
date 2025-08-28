import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Slider} from "../../../components/slider/Slider.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {IconWrapper} from "../../../components/IconWrapper.tsx";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'}>

                   <IconWrapper>
                       <Icon iconId={'quote'}/>
                   </IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>

        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 100vh;
    background-color: #9fca68;
    
    ${IconWrapper}{
        margin-top: 40px;
        margin-bottom: 72px;
    }
`
