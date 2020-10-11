import React from 'react';

const CombinationsContainer = ({combinations, showCombinations}) => (
  <ul>
    {combinations.map((combination, i) => (
      <li
        key={i}
        onClick={() => {
          showCombinations(combination.positions);
        }}
      >
        {combination.values.join(' ')}
      </li>
    ))}
  </ul>
);

export default CombinationsContainer;
