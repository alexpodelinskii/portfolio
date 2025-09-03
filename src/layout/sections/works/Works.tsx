import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Work} from "./work/Work.tsx";
import workImage from "./../../../assets/images/work.jpg"
import {Container} from "../../../components/Container.tsx";

const worksMenuItems = ['ALL', 'landing page', 'react', 'spa']

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksMenuItems}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    <Work imgSrc={workImage} title={'Social Network'}
                          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                          demoSrc={'#'} codeSrc={'#'}/>
                    <Work imgSrc={workImage} title={'Timer'}
                          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                          demoSrc={'#'} codeSrc={'#'}/>
                </FlexWrapper>
            </Container>

        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    ${FlexWrapper} {
    gap: 30px;
    }
`
