### 添加Button基本样式
### _style.scss
src/components/Button/_style.scss
``` scss
.btn {
  position: relative;
  display: inline-block;
  font-weight: $btn-font-weight;
  line-height: $btn-line-height;
  color: $body-color;
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  background-image: none;
  border: $btn-border-width solid transparent;
  box-shadow: $btn-box-shadow;
  cursor: pointer;
  transition: $btn-transition;

  &.disabled,
  &[disabled] {
    cursor: not-allowed;
    opacity: $btn-disabled-opacity;
    box-shadow: none;

    >* {
      pointer-events: none;
    }
  }
}
```
src/styles/index.scss
``` scss
// config
@import "variables";

// layout
@import "reboot";

// button
@import "../components/Button/style";

```