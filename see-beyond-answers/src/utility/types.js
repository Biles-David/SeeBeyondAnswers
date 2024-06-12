export const simpleShapes = {
  TRIANGLE: 'TRIANGLE',
  SQUARE: 'SQUARE',
  CIRCLE: 'CIRCLE',
}

export const complexShapes = {
  CYLINDER: [simpleShapes.SQUARE, simpleShapes.CIRCLE],
  CONE: [simpleShapes.CIRCLE, simpleShapes.TRIANGLE],
  PYRAMID: [simpleShapes.SQUARE, simpleShapes.TRIANGLE],
  ORB: [simpleShapes.CIRCLE, simpleShapes.CIRCLE],
  CUBE: [simpleShapes.SQUARE, simpleShapes.SQUARE],
  PRISM: [simpleShapes.TRIANGLE, simpleShapes.TRIANGLE],
}

const simpleShapeConversion = {
  [simpleShapes.TRIANGLE]: complexShape.CYLINDER,
  [simpleShapes.SQUARE]: complexShape.CONE,
  [simpleShapes.CIRCLE]: complexShape.PYRAMID
}

// Converting to a Map with simpleShapes as keys
export const simpleShapeConversionMap = new Map(
  Object.entries(simpleShapes).map(([key, value]) => [key, simpleShapeConversion.get(value)])
);