import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    <Skill iconId={'html5'} title={'html5'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dignissimos dolore officia. Ad alias architecto aspernatur, distinctio exercitationem fuga inventore, magni non obcaecati officia, quam sit soluta tempore vitae voluptatem?'}/>
                    <Skill iconId={'css3'} title={'css3'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dignissimos dolore officia. Ad alias architecto aspernatur, distinctio exercitationem fuga inventore, magni non obcaecati officia, quam sit soluta tempore vitae voluptatem?'}/>
                    <Skill iconId={'react'} title={'react'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dignissimos dolore officia. Ad alias architecto aspernatur, distinctio exercitationem fuga inventore, magni non obcaecati officia, quam sit soluta tempore vitae voluptatem?'}/>
                    <Skill iconId={'typescript'} title={'typescript'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dignissimos dolore officia. Ad alias architecto aspernatur, distinctio exercitationem fuga inventore, magni non obcaecati officia, quam sit soluta tempore vitae voluptatem?'}/>
                    <Skill iconId={'styled-components'} title={'styled components'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dignissimos dolore officia. Ad alias architecto aspernatur, distinctio exercitationem fuga inventore, magni non obcaecati officia, quam sit soluta tempore vitae voluptatem?'}/>
                    <Skill iconId={'figma'} title={'WEB DESIgN '}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dignissimos dolore officia. Ad alias architecto aspernatur, distinctio exercitationem fuga inventore, magni non obcaecati officia, quam sit soluta tempore vitae voluptatem?'}/>
                </FlexWrapper>
            </Container>

        </StyledSkills>
    );
};
const StyledSkills = styled.section`

`






