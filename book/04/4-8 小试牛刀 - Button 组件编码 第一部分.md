### Button 组件编码
#### Button组件
安装classnames
``` shell
yarn add classnames
```
src/components/Button/index.tsx
``` javascript
import React from 'react';
import classNames from 'classnames';

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode,
  href?: string;
}

const Button: React.FC<BaseButtonProps> = (props) => {
  const {
    btnType,
    disabled,
    size,
    children,
    href
  } = props;
  // btn, btn-lg, btn-primary
  const classes = classNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled
  });
  if (btnType === ButtonType.Link && href) {
    return (
      <a
        className={classes}
        href={href}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button 
        className={classes}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button
```
App.tsx
``` javascript
import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled>Hello World</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello World</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>百度 Link</Button>
      </header>
    </div>
  );
}

export default App;

```