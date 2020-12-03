import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button autoFocus onClick={(e) => { e.preventDefault();alert(123) }}>Hello World</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello World</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Hello World</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>百度 Link</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" target="_blank">百度 Link</Button>
      </header>
    </div>
  );
}

export default App;
