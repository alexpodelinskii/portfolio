import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Menu} from "../../../components/Menu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Work} from "./work/Work.tsx";
import workImage from "./../../../assets/images/work.jpg"

const worksMenuItems = ['ALL', 'landing page', 'react', 'spa']

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksMenuItems}/>
            <FlexWrapper justify={'space-around'}>
                <Work imgSrc={workImage} title={'Social Network'}
                      text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                      demoSrc={'#'} codeSrc={'#'}/>
                <Work imgSrc={workImage} title={'Timer'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} demoSrc={'#'} codeSrc={'#'}/>
                </FlexWrapper>
                </StyledWorks>
                );
                };

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: indianred;
`
