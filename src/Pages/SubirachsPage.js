import React, {useState} from 'react';
import styled from 'styled-components';
import CombinationsContainer from '../components/CombinationsContainer';
import Tile from '../components/Tile';
import classNames from 'classnames';
import {findCombinations, numbers} from '../utils/itemFinder';

const TileContainer = styled.div`
  background: #147ad5;
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  height: 500px;
`;

const SubirachsPage = () => {
  const combinations = findCombinations();

  const [hoveredCombinations, setHoveredCombinations] = useState([]);
  const showCombinations = positions => {
    console.log(positions);
    setHoveredCombinations(positions);
  };
  const [matchedPositions, setMatchedPositions] = useState({});
  const [selectedPositions, setSelectedPositions] = useState([]);

  const searchOcurrences = position => {
    const positions = [...selectedPositions, position];
    const _matchedCombinations = combinations.filter(c =>
      positions.every(d => c.positions.includes(d))
    );
    const _matchedPositions = {};
    _matchedCombinations.forEach(c => {
      c.positions.forEach(p => {
        if (_matchedPositions[p]) {
          _matchedPositions[p]++;
        } else {
          _matchedPositions[p] = 1;
        }
      });
    });
    setMatchedPositions(_matchedPositions);
    setSelectedPositions(positions);
  };
  const checkIfIsIncluded = index => {
    console.log(hoveredCombinations.includes(index));
    return hoveredCombinations.includes(index);
  };
  return (
    <>
      <TileContainer>
        {numbers.map((number, index) => (
          <Tile
            key={index}
            className={classNames({hovered: checkIfIsIncluded(index)})}
            click={() => searchOcurrences(index)}
          >
            {number}({matchedPositions[index]})
          </Tile>
        ))}
      </TileContainer>
      <CombinationsContainer combinations={combinations} showCombinations={showCombinations} />
    </>
  );
};

export default SubirachsPage;
