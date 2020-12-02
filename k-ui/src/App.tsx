import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled>Hello World</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello World</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Hello World</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>百度 Link</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com">百度 Link</Button>
      </header>
    </div>
  );
}

export default App;
