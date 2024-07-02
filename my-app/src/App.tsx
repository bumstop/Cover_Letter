import React from 'react';
import { CircleButton } from './components/button/CircleButton';

function App() {
  return (
    <div className="App">
      <CircleButton onClick={() => console.log('버튼 클릭')}>
        버튼
      </CircleButton>
    </div>
  );
}

export default App;
