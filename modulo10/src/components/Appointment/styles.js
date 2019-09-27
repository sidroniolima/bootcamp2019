import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 20px;
  padding: 20px;
  background: #fff;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  opacity: ${props => (props.past ? 0.5 : 1)};
`;

export const Left = styled.View`
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Info = styled.View`
  flex: 1;
  margin-left: 15px;
`;

export const Name = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

export const Time = styled.Text`
  font-size: 13px;
  color: #eee;
  margin-top: 4px;
`;
