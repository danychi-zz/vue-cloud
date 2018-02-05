import styled, { css } from "vue-styled-components";
import { generateEqualStepsKeyframes, generateScaleTransform } from "./utils";

export function changeColor(colors) {
  return css`
    @keyframes changeColor {
      ${generateEqualStepsKeyframes(colors, "background-color")};
    }
  `;
}

export function pulse(pulseValues) {
  return css`
    @keyframes pulse {
      ${generateEqualStepsKeyframes(
        pulseValues.map(value => generateScaleTransform(value)),
        "transform"
      )};
    }
  `;
}
