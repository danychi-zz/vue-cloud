export function generateEqualStepsKeyframes(values, property) {
  const keyFrames = values.map(
    (value, i, values) =>
      `${getPercentage(i, values.length)}% {
            ${property}: ${value};
           }`
  );
  // To have a solid animation
  const lastKeyFrame = `100% {
      ${property}: ${values[0]};
      }`;
  return [...keyFrames, lastKeyFrame].join(" ");
}

export function getPercentage(index, arraySize) {
  return index / arraySize * 100;
}

export function generateScaleTransform(value) {
  return `scale(${value})`;
}
