import styled, {css} from 'styled-components';

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  height: 100vh;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 25px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    line-height: 1.4;
    color: #666;
    width: 400px;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #7159c1;
  }
`;

export const IssueList = styled.ul`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #eee;

  padding-top: 30px;
  margin-top: 30px;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border: 2px solid #eee;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }
      }

      p {
        color: #999;
        font-size: 12px;
        margin-top: 5px;
      }
    }
  }
`;

export const Label = styled.span`
  font-size: 12px;
  height: 20px;
  color: #222;
  background: ${props => `#${props.color}`};
  margin-left: 10px;
  padding: 3px 4px;
  border-radius: 2px;
`;

export const Filters = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-end;
  height: 100%;
  margin-top: 15px;
  }
`

export const Filter = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  position: relative;
  margin-left: 10px;

  padding: 5px 15px;
  height: 100%;
  
  color: #222;
  font-size: 12px;

  cursor: pointer;

  ${props => props.active && css`&:after  {
    content: '';
    height: 2px;
    width: 100%;
    background: #9157c1;
    position: absolute;
    bottom: 0;
    left: 0;  
  }`}
  `