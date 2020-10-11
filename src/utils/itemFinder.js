const numbers = [1, 14, 14, 4, 11, 7, 6, 9, 8, 10, 10, 5, 13, 2, 3, 15];
const magic_number = 33;

const recursiveSum = positions =>
  positions.map(element => numbers[element]).reduce((partial_sum, a) => partial_sum + a);

const prepareCombination = (...positions) => ({
  positions: positions,
  values: positions.map(position => numbers[position])
});

const findCombinations = (positions = [], pInicial = 0, combinations = []) => {
  for (let position = pInicial; position <= numbers.length - 1; position++) {
    const currPositions = positions.concat(position);
    if (recursiveSum(currPositions) === magic_number) {
      combinations.push(prepareCombination(...currPositions));
    } else if (recursiveSum(currPositions) < magic_number) {
      findCombinations(currPositions, position + 1, combinations);
    }
  }
  return combinations;
};

export {findCombinations, numbers};
