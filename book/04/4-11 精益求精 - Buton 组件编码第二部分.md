### Button组件编码
#### 交叉类型 
src/components/Button
``` javascript
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = NativeButtonProps & AnchorButtonProps
```
#### Partial
有些属性在button上是必选的，但是在a链接上不是必选的，反之亦然<br/>
src/components/Button
``` javascript
import React, { AnchorHTMLAttributes } from 'react';
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

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
const Button: React.FC<ButtonProps> = (props) => {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props;
  // btn, btn-lg, btn-primary
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled
  });
  if (btnType === ButtonType.Link && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button 
        className={classes}
        disabled={disabled}
        {...restProps}
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
src/App.tsx
``` javascript
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
```