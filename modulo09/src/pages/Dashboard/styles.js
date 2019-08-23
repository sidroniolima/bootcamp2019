import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      background: none;
      border: 0;

      svg {
        vertical-align: middle;
      }
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Time = styled.li`
  background: #fff;
  padding: 20px;
  border-radius: 4px;

  opacity: ${props => (props.past ? '.6' : '1')};

  strong {
    display: block;
    font-size: 20px;
    color: ${props => (props.available ? '#999' : '#7159c1')};
    font-weight: normal;
  }

  span {
    margin-top: 3px;
    display: block;
    color: ${props => (props.available ? '#999' : '#666')};
  }
`;
