import React from 'react';
import styled from 'styled-components';

const TileContainer = styled.div`
  width: 25%;
  height: 25%;
  padding: 9px;
  box-sizing: border-box;
  div {
    background-color: ${props => props.theme.tileColor};
    font-size: 2em;
    height: 100%;
    border-radius: 6px;
    color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.3s ease all;
    &:hover {
      background-color: ${props => props.theme.tileColorHover};
    }
  }
  &.hovered div {
    background-color: red;
  }
`;
const Tile = ({children, click, ...rest}) => {
  return (
    <TileContainer {...rest}>
      <div onClick={click}>{children}</div>
    </TileContainer>
  );
};
export default Tile;
