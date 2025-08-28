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
                    <Skill iconId={'logo2'} title={'logo2'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dignissimos dolore officia. Ad alias architecto aspernatur, distinctio exercitationem fuga inventore, magni non obcaecati officia, quam sit soluta tempore vitae voluptatem?'}/>
                    <Skill iconId={'logo2'} title={'logo2'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dignissimos dolore officia. Ad alias architecto aspernatur, distinctio exercitationem fuga inventore, magni non obcaecati officia, quam sit soluta tempore vitae voluptatem?'}/>
                    <Skill iconId={'logo2'} title={'logo2'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dignissimos dolore officia. Ad alias architecto aspernatur, distinctio exercitationem fuga inventore, magni non obcaecati officia, quam sit soluta tempore vitae voluptatem?'}/>
                    <Skill iconId={'logo2'} title={'logo2'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dignissimos dolore officia. Ad alias architecto aspernatur, distinctio exercitationem fuga inventore, magni non obcaecati officia, quam sit soluta tempore vitae voluptatem?'}/>
                    <Skill iconId={'logo2'} title={'logo2'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dignissimos dolore officia. Ad alias architecto aspernatur, distinctio exercitationem fuga inventore, magni non obcaecati officia, quam sit soluta tempore vitae voluptatem?'}/>
                    <Skill iconId={'logo2'} title={'logo2'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dignissimos dolore officia. Ad alias architecto aspernatur, distinctio exercitationem fuga inventore, magni non obcaecati officia, quam sit soluta tempore vitae voluptatem?'}/>
                </FlexWrapper>
            </Container>

        </StyledSkills>
    );
};
const StyledSkills = styled.section`

`






