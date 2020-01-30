import React from 'react';
import styled from 'styled-components';
import { Card, Sheet } from './Layers';

const StyledContent = styled.div`
  grid-area: content;
  background: var(--bg-content);
`;

const StyledIntro = styled(Sheet)`
  background: var(--bg-content-intro);
  filter: var(--filter-darken);
:hover {
  filter:none;
}
`;

const StyledTopics = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
`;

const StyledTopic = styled(Card)`
  display: flex;
  align-items: center;
  animation-duration: var(--time-m);
  animation-name: slidein;
p {
    color: var(--color-text-accent);
}

@keyframes slidein {
  from {
    margin-left: 100%;
  }

  to {
    margin-left: 0%;
  }
}`;

const StyledPosts = styled.div`
  column-count: 1;
  column-gap: var(--margin);
`;
const StyledPost = styled(Sheet)`
  display: flex;
  flex-direction: column;
p {
  color: var(--color-text-accent);
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%; 
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
`;

/**
 * 1e5799
 * 00a7b5
 */
class Content extends React.Component {
  render() {
    var { content } = this.props;
    if (content) {
      return (
        <StyledContent>
          <StyledIntro><h1>{content.header.summary}</h1></StyledIntro>
          <StyledTopics>
            {content.topics.map((item) => (
              <StyledTopic key={item.title}>
                {item.title}
                <p className="summary">{item.summary}</p>
              </StyledTopic>
            ))}
          </StyledTopics>
          <StyledPosts>
            {content.posts.map((item) => (
              <StyledPost key={item.title}>
                {item.title}
                <p>{item.summary}</p>
              </StyledPost>
            ))}
          </StyledPosts>
        </StyledContent>
      );
    }
    return null;
  }
}
export default Content;
