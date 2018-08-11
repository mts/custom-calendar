// number utility to get a range of numbers

export const getRange = ({range, indexSeed, valueSeed}) => Array(range).fill().map((_, index) => valueSeed + index + indexSeed);
