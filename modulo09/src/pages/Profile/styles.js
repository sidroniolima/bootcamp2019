import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    hr {
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
      margin: 10px 0 20px;
      border: 0;
    }

    span {
      margin: 0 0 10px;
      color: #fb6f91;
      align-self: flex-start;
      font-weight: bold;
    }

    input {
      height: 44px;
      background: rgba(0, 0, 0, 0.1);
      padding: 0 15px;
      border: 0;
      border-radius: 4px;
      margin: 0 0 10px;
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      border-radius: 4px;
      padding: 10px;
      color: #fff;
      border: 0;
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 14px;
      opacity: 0.8;
      transition: opacity 0.2s;

      &:hover {
        opacity: 1;
      }
    }
  }

  > button {
    width: 100%;
    border-radius: 4px;
    padding: 10px;
    color: #fff;
    border: 0;
    margin: 5px 0 0;
    height: 44px;
    background: #fb6f91;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.06, '#fb6f91')};
    }
  }
`;
