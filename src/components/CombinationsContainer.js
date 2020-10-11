import React from 'react';
import styled from 'styled-components';

const CombinationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CombinationsContainer = ({combinations, showCombinations, resetCombinations}) => (
  <CombinationsWrapper>
    <button onClick={resetCombinations}>Reset combinaciones</button>
    <h3>Possible combinations:</h3>
    <ul>
      {combinations.map((combination, i) => (
        <li
          key={i}
          onClick={() => {
            showCombinations(combination.positions);
          }}
        >
          {combination.values.join('-')}
        </li>
      ))}
    </ul>
  </CombinationsWrapper>
);

export default CombinationsContainer;
