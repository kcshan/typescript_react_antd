### 升级Button组件样式
#### _mixin.scss
src/styles/_mixin.scss
``` scss
@mixin button-size($padding-y, $padding-x, $font-size, $border-raduis) {
  padding: $padding-y $padding-x;
  font-size: $font-size;
  border-radius: $border-raduis;
}

@mixin button-style(
  $background,
  $border,
  $color,
  $hover-background: lighten($background, 7.5%),
  $hover-border: lighten($border, 10%),
  $hover-color: $color,
) {
  color: $color;
  background: $background;
  border-color: $border;
  &:hover {
    color: $hover-color;
    background: $hover-background;
    border-color: $hover-border;    
  }
  &:focus,
  &.focus {
    color: $hover-color;
    background: $hover-background;
    border-color: $hover-border;    
  }
  &:disabled,
  &.disabled {
    color: $color;
    background: $background;
    border-color: $border;    
  }
}
```
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

.btn-lg {
  @include button-size($btn-padding-y-lg, $btn-padding-x-lg, $btn-font-size-lg, $btn-border-radius-lg);
}

.btn-sm {
  @include button-size($btn-padding-y-sm, $btn-padding-x-sm, $btn-font-size-sm, $btn-border-radius-sm);
}

.btn-primary {
  @include button-style($primary, $primary, $white)
}

.btn-danger {
  @include button-style($danger, $danger, $white)
}

.btn-default {
  @include button-style($white, $gray-400, $body-color, $white, $primary, $primary)
}

.btn-link {
  font-weight: $font-weight-normal;
  color: $btn-link-color;
  text-decoration: $link-decoration;
  box-shadow: none;

  &:hover {
    color: $btn-link-hover-color;
    text-decoration: $link-hover-decoration;
  }

  &:focus,
  &.focus {
    text-decoration: $link-hover-decoration;
    box-shadow: none;
  }

  &:disabled,
  &.disabled {
    color: $btn-link-disabled-color;
    pointer-events: none;
  }
}
```
src/styles/index.scss
``` scss
// config
@import "variables";

// layout
@import "reboot";

// mixin
@import "mixin";

// button
@import "../components/Button/style";
```
