import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  position: relative;

  background: none;
  border: 0;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        top: 0;
        right: 0;
        content: '';
        background: #ff892e;
        border-radius: 50%;
        width: 8px;
        height: 8px;
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  top: calc(100% + 30px);
  left: calc(50% - 130px);
  background: rgba(0, 0, 0, 0.6);
  width: 260px;
  color: #fff;
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'block' : 'none')}

  &::before {
    position: absolute;
    width: 0;
    height: 0;
    content: '';
    top: 0;
    left: calc(50% - 20px);
    top: -20px;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  & + div {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 15px;
    padding-top: 15px;
  }

  color: #fff;
  p {
    line-height: 18px;
    font-size: 13px;
  }

  time {
    font-size: 12px;
    opacity: 0.6;
    display: block;
  }

  button {
    margin-top: 8px;
    font-size: 12px;
    background: none;
    border: 0;
    font-size: 12px;
    color: #fff;
    color: ${lighten(0.2, '#7159c1')};
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        display: inline-block;
        margin-left: 10px;
        bottom: 0;
        right: 0;
        content: '';
        background: #ff892e;
        border-radius: 50%;
        width: 8px;
        height: 8px;
      }
    `}
`;
