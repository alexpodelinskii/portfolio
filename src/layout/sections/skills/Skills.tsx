import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                <Skill iconId={'logo2'} title={'logo2'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dignissimos dolore officia. Ad alias architecto aspernatur, distinctio exercitationem fuga inventore, magni non obcaecati officia, quam sit soluta tempore vitae voluptatem?'}/>
                <Skill iconId={'logo2'} title={'logo2'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dignissimos dolore officia. Ad alias architecto aspernatur, distinctio exercitationem fuga inventore, magni non obcaecati officia, quam sit soluta tempore vitae voluptatem?'}/>
                <Skill iconId={'logo2'} title={'logo2'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dignissimos dolore officia. Ad alias architecto aspernatur, distinctio exercitationem fuga inventore, magni non obcaecati officia, quam sit soluta tempore vitae voluptatem?'}/>
                <Skill iconId={'logo2'} title={'logo2'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dignissimos dolore officia. Ad alias architecto aspernatur, distinctio exercitationem fuga inventore, magni non obcaecati officia, quam sit soluta tempore vitae voluptatem?'}/>
                <Skill iconId={'logo2'} title={'logo2'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dignissimos dolore officia. Ad alias architecto aspernatur, distinctio exercitationem fuga inventore, magni non obcaecati officia, quam sit soluta tempore vitae voluptatem?'}/>
                <Skill iconId={'logo2'} title={'logo2'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dignissimos dolore officia. Ad alias architecto aspernatur, distinctio exercitationem fuga inventore, magni non obcaecati officia, quam sit soluta tempore vitae voluptatem?'}/>
                <Skill iconId={'logo2'} title={'logo2'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dignissimos dolore officia. Ad alias architecto aspernatur, distinctio exercitationem fuga inventore, magni non obcaecati officia, quam sit soluta tempore vitae voluptatem?'}/>
            </FlexWrapper>
        </StyledSkills>
    );
};
const StyledSkills = styled.div`
    background-color: #ffe5e4;
    min-height: 100vh;
`






