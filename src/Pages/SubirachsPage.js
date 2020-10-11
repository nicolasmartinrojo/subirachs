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
  const [matchedCombinations, setMatchedCombinations] = useState(combinations);

  const [hoveredCombinations, setHoveredCombinations] = useState([]);
  const [matchedPositions, setMatchedPositions] = useState({});
  const [selectedPositions, setSelectedPositions] = useState([]);

  const toggleElement = (array, element) => {
    return !array.includes(element) ? [...array, element] : array.filter(e => e !== element);
  };
  const searchOcurrences = position => {
    const positions = toggleElement(selectedPositions, position);
    const _matchedCombinations = combinations.filter(c =>
      positions.every(d => c.positions.includes(d))
    );
    const _matchedPositions = {};

    // clear selected combination, if any
    setHoveredCombinations([]);

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
    setMatchedCombinations(_matchedCombinations);
  };

  const reset = () => {
    setMatchedCombinations(combinations);
    setSelectedPositions([]);
    setMatchedPositions({});
  };

  return (
    <div style={{display: 'flex'}}>
      <TileContainer>
        {numbers.map((number, index) => (
          <Tile
            key={index}
            className={classNames({
              hovered: hoveredCombinations.includes(index),
              selected: selectedPositions.includes(index)
            })}
            click={() => searchOcurrences(index)}
          >
            {number}
            {matchedPositions[index] ? `(${matchedPositions[index]})` : null}
          </Tile>
        ))}
      </TileContainer>
      <CombinationsContainer
        combinations={matchedCombinations}
        showCombinations={positions => setHoveredCombinations(positions)}
        resetCombinations={() => reset()}
      />
    </div>
  );
};

export default SubirachsPage;
