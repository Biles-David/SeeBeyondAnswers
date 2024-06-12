// import { simpleShapeConversion, complexShapes, simpleShapes } from './types';

const simpleShapes = {
  TRIANGLE: 'TRIANGLE',
  SQUARE: 'SQUARE',
  CIRCLE: 'CIRCLE',
}

const complexShapes = {
  CYLINDER: [simpleShapes.SQUARE, simpleShapes.CIRCLE],
  CONE: [simpleShapes.CIRCLE, simpleShapes.TRIANGLE],
  PYRAMID: [simpleShapes.SQUARE, simpleShapes.TRIANGLE],
  ORB: [simpleShapes.CIRCLE, simpleShapes.CIRCLE],
  CUBE: [simpleShapes.SQUARE, simpleShapes.SQUARE],
  PRISM: [simpleShapes.TRIANGLE, simpleShapes.TRIANGLE],
}

const simpleShapeConversion = {
  [simpleShapes.TRIANGLE]: complexShapes.CYLINDER,
  [simpleShapes.SQUARE]: complexShapes.CONE,
  [simpleShapes.CIRCLE]: complexShapes.PYRAMID
}

function determineRotation(mirrorArray, mainArray) {
  let resultingSteps = [];
  let dissection = {};
  let currentShapes = mainArray.map((shape) => complexShapes[shape])
  let properShapes = [] 

  mirrorArray.forEach((shape) => {
    properShapes.push({mirrorShape: shape, answer: simpleShapeConversion[shape]})
  })

    currentShapes.forEach((shape) => {
      console.log(shape, properShapes[0].answer)
      const missingShapeFromStarting = shape.find(s => !properShapes[0].answer.includes(s));
      console.log(missingShapeFromStarting)
    })
  

  // mainArray.forEach((shape) => {
  //   const answer = properShapes[mainArray.indexOf(shape)].answer
  //   console.log(answer, complexShapes[shape])
  //   //HELP
  // })

  return properShapes
}

console.log(determineRotation(['SQUARE', 'CIRCLE', 'TRIANGLE'], ['ORB', 'CUBE', 'PRISM']))

// export function determineComplexShapeOrder(shapesArray) {
//   // Determine the complex shapes for each simple shape in the array
//   // const complexShapesArray = determineShapes(shapesArray);

//   // Check if any complex shape in complexShapes object matches the complexShapesArray
//   for (const complexShape in complexShapes) {
//       const requiredShapes = complexShapes[complexShape];
      
//       // Check if requiredShapes is a subset of complexShapesArray
//       if (requiredShapes.every(shape => complexShapesArray.includes(shape))) {
//           return complexShape;
//       }
//   }

//   // If no match found, return null or appropriate indication
//   return null; // or any other appropriate indication
// }

// Example usage:
// const shapesArray = ['SQUARE', 'CIRCLE', 'TRIANGLE'];
// const complexShape = determineComplexShapeOrder(shapesArray);
// console.log("Complex Shape:", complexShape);


// function findSwappedShapesToMatch(firstArray, secondArray) {
//   // Calculate the total composition from the first array
//   const actualShapes = firstArray.reduce((acc, shape) => {
//       acc[shape] = (acc[shape] || 0) + 1;
//       return acc;
//   }, {});

//   // Calculate the total composition from the second array
//   const requiredShapes = secondArray.reduce((acc, shape) => {
//       const simpleShapes = complexShapes[shape];
//       simpleShapes.forEach(simpleShape => {
//           acc[simpleShape] = (acc[simpleShape] || 0) + 1;
//       });
//       return acc;
//   }, {});

//   // Find the shapes that need to be swapped to match the required shapes
//   const swaps = [];
//   for (const shape in requiredShapes) {
//       const requiredCount = requiredShapes[shape];
//       const actualCount = actualShapes[shape] || 0;
//       const diff = requiredCount - actualCount;
//       if (diff > 0) {
//           for (let i = 0; i < diff; i++) {
//               swaps.push({ shape: shape, from: secondArray });
//           }
//       }
//   }

//   return swaps;
// }

// Example usage:
// const firstArray = ['SQUARE', 'CIRCLE', 'TRIANGLE'];
// const secondArray = ['ORB', 'CUBE', 'PRISM'];

// const swaps = findSwappedShapesToMatch(firstArray, secondArray);
// swaps.forEach(swap => {
//   console.log(`Swap ${swap.shape} from ${swap.from[0]} with ${Object.keys(complexShapes[swap.from[0]])[0]} from ${swap.from[0]}`);
// });













// function findSwappedShapes(startingComplexShape, resultingComplexShape) {
//   // Get the array of simple shapes for the starting complex shape
//   const startingSimpleShapes = complexShapes[startingComplexShape];
  
//   // Get the array of simple shapes for the resulting complex shape
//   const resultingSimpleShapes = complexShapes[resultingComplexShape];
  
//   console.log(startingComplexShape)

//   // Find the missing shapes in each complex shape
//   const missingShapeFromStarting = {[startingComplexShape]: startingSimpleShapes.find(shape => !resultingSimpleShapes.includes(shape))};
//   const missingShapeFromResulting = {[resultingComplexShape]: resultingSimpleShapes.find(shape => !startingSimpleShapes.includes(shape))};
  
//   return { from: missingShapeFromStarting, to: missingShapeFromResulting };
// }

// // Example usage:
// const startingComplexShape = 'PYRAMID';
// const resultingComplexShape = 'CONE';

// const swap = findSwappedShapes(startingComplexShape, resultingComplexShape);
// console.log(`Swap ${Object.values(swap.from)[0]} from ${Object.keys(swap.from)[0]} with ${Object.values(swap.to)[0]} from ${Object.keys(swap.to)[0]}`);


// function findSwappedShapes(startingComplexShapes, resultingComplexShape) {
//   // Initialize an empty object to accumulate the swaps
//   let accumulatedSwaps = {};

//   // Iterate over each starting complex shape
//   startingComplexShapes.forEach(startingComplexShape => {
//       // Get the array of simple shapes for the starting complex shape
//       const startingSimpleShapes = complexShapes[startingComplexShape];
      
//       // Get the array of simple shapes for the resulting complex shape
//       const resultingSimpleShapes = complexShapes[resultingComplexShape];

//       // Find the missing shapes in each complex shape
//       const missingShapeFromStarting = {[startingComplexShape]: startingSimpleShapes.find(shape => !resultingSimpleShapes.includes(shape))};
//       const missingShapeFromResulting = {[resultingComplexShape]: resultingSimpleShapes.find(shape => !startingSimpleShapes.includes(shape))};
      
//       // Find the corresponding shapes for the missing shapes
//       const missingShapeFromStartingCorresponding = {[startingComplexShape]: simpleShapeConversion[missingShapeFromStarting[startingComplexShape]]};
//       const missingShapeFromResultingCorresponding = {[resultingComplexShape]: simpleShapeConversion[missingShapeFromResulting[resultingComplexShape]]};

//       // Accumulate the swaps
//       accumulatedSwaps = {
//           ...accumulatedSwaps,
//           [startingComplexShape]: missingShapeFromStartingCorresponding,
//           [resultingComplexShape]: missingShapeFromResultingCorresponding
//       };
//   });

//   return accumulatedSwaps;
// }

// // Example usage:
// const startingComplexShapes = ['CUBE', 'ORB', 'CYLINDER'];
// const resultingComplexShape = 'PYRAMID';

// const swaps = findSwappedShapes(startingComplexShapes, resultingComplexShape);
// console.log(swaps);









// console.log(determineShapes([simpleShapes.TRIANGLE, simpleShapes.SQUARE, simpleShapes.CIRCLE]))