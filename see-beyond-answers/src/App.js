import { simpleShapeConversion, complexShapes, simpleShapes } from './utility/types';
import { determineComplexShapeOrder } from './utility/helper';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>{console.log(findSwappedShapesToMatch([simpleShapes.TRIANGLE, simpleShapes.SQUARE], [simpleShapes.TRIANGLE, simpleShapes.SQUARE]))}</p>
    </div>
  );
}

export default App;
