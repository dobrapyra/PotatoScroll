# PotatoScroll
Custom scrollbar but still native scroll engine.

Demo: [https://dobrapyra.github.io/PotatoScroll/](https://dobrapyra.github.io/PotatoScroll/)

---

## Usage

### JS

#### Standalone library

```html
<script src="./dist/potato-scroll.min.js"></script>
```

#### ES6 module

##### Install
```bash
npm install --save potatoscroll
```

##### Import
```js
import PotatoScroll from 'potatoscroll';
```

---

#### Initialize

##### Global create multiple instances
```js
PotatoScroll.create({ selector: '.scroll' });
```
##### Individual create of each instance
```js
new PotatoScroll({ el: document.querySelector('.scroll--main') });
new PotatoScroll({ el: document.querySelector('.scroll--nested') });
```

---

### HTML
Example HTML

```html
<div class="scroll scroll--main">
  <div class="innerBox">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus voluptatem, dicta fuga saepe vitae vel autem repudiandae, suscipit quae id aliquid voluptate, reprehenderit explicabo dolorum adipisci eaque perferendis sapiente. Ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus voluptatem, dicta fuga saepe vitae vel autem repudiandae, suscipit quae id aliquid voluptate, reprehenderit explicabo dolorum adipisci eaque perferendis sapiente. Ipsum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus voluptatem, dicta fuga saepe vitae vel autem repudiandae, suscipit quae id aliquid voluptate, reprehenderit explicabo dolorum adipisci eaque perferendis sapiente. Ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus voluptatem, dicta fuga saepe vitae vel autem repudiandae, suscipit quae id aliquid voluptate, reprehenderit explicabo dolorum adipisci eaque perferendis sapiente. Ipsum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus voluptatem, dicta fuga saepe vitae vel autem repudiandae, suscipit quae id aliquid voluptate, reprehenderit explicabo dolorum adipisci eaque perferendis sapiente. Ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus voluptatem, dicta fuga saepe vitae vel autem repudiandae, suscipit quae id aliquid voluptate, reprehenderit explicabo dolorum adipisci eaque perferendis sapiente. Ipsum.</p>
    <div class="scroll scroll--nested">
      <div class="innerBox">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus voluptatem, dicta fuga saepe vitae vel autem repudiandae, suscipit quae id aliquid voluptate, reprehenderit explicabo dolorum adipisci eaque perferendis sapiente. Ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus voluptatem, dicta fuga saepe vitae vel autem repudiandae, suscipit quae id aliquid voluptate, reprehenderit explicabo dolorum adipisci eaque perferendis sapiente. Ipsum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus voluptatem, dicta fuga saepe vitae vel autem repudiandae, suscipit quae id aliquid voluptate, reprehenderit explicabo dolorum adipisci eaque perferendis sapiente. Ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus voluptatem, dicta fuga saepe vitae vel autem repudiandae, suscipit quae id aliquid voluptate, reprehenderit explicabo dolorum adipisci eaque perferendis sapiente. Ipsum.</p>
      </div>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus voluptatem, dicta fuga saepe vitae vel autem repudiandae, suscipit quae id aliquid voluptate, reprehenderit explicabo dolorum adipisci eaque perferendis sapiente. Ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus voluptatem, dicta fuga saepe vitae vel autem repudiandae, suscipit quae id aliquid voluptate, reprehenderit explicabo dolorum adipisci eaque perferendis sapiente. Ipsum.</p>
  </div>
</div>
```
---

### CSS
Example CSS

```css
.potatoScroll__mask {
  z-index: 0; }

.potatoScroll__track {
  background-color: rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s; }
  .potatoScroll__track--v {
    width: 4px;
    top: 0;
    bottom: 0;
    right: 0;
    transition: width 0.2s, background-color 0.2s; }
    .potatoScroll__track--v:hover {
      width: 12px; }
    .potatoScroll--arrows .potatoScroll__track--v {
      top: 12px;
      bottom: 12px; }
    [dir=rtl] .potatoScroll__track--v {
      right: auto;
      left: 0; }
  .potatoScroll__track--h {
    height: 4px;
    left: 0;
    right: 0;
    bottom: 0;
    transition: height 0.2s, background-color 0.2s; }
    .potatoScroll__track--h:hover {
      height: 12px; }
    .potatoScroll--arrows .potatoScroll__track--h {
      left: 12px;
      right: 12px; }

.potatoScroll__bar {
  z-index: 1;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.2s; }
  .potatoScroll__bar:hover {
    background-color: rgba(0, 0, 0, 0.8); }
  .potatoScroll__bar--v {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: width 0.2s, background-color 0.2s; }
  .potatoScroll__bar--h {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transition: height 0.2s, background-color 0.2s; }

.potatoScroll__arrow {
  z-index: 1;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.2s; }
  .potatoScroll__arrow:hover {
    background-color: rgba(0, 0, 0, 0.8); }
  .potatoScroll__arrow--disabled {
    cursor: default; }
    .potatoScroll__arrow--disabled:hover {
      background-color: rgba(0, 0, 0, 0.2); }
  .potatoScroll__arrow--t, .potatoScroll__arrow--b {
    left: 0;
    width: 100%;
    height: 12px; }
  .potatoScroll__arrow--t {
    top: -12px; }
  .potatoScroll__arrow--b {
    bottom: -12px; }
  .potatoScroll__arrow--l, .potatoScroll__arrow--r {
    top: 0;
    height: 100%;
    width: 12px; }
  .potatoScroll__arrow--l {
    left: -12px; }
  .potatoScroll__arrow--r {
    right: -12px; }
```

### SCSS
Example SCSS

```scss
.potatoScroll{
  $rootEl: &;
  $arrowSize: 12px;

  &__mask {
    z-index: 0;
  }

  &__track{
    background-color: rgba(0,0,0,0.1);
    transition: background-color 0.2s;

    &--v{
      width: 4px;
      top: 0;
      bottom: 0;
      right: 0;
      transition: width 0.2s, background-color 0.2s;

      &:hover{
        width: 12px;
      }

      #{$rootEl}--arrows & {
        top: $arrowSize;
        bottom: $arrowSize;
      }

      [dir=rtl] & {
        right: auto;
        left: 0;
      }
    }

    &--h{
      height: 4px;
      left: 0;
      right: 0;
      bottom: 0;
      transition: height 0.2s, background-color 0.2s;

      &:hover{
        height: 12px;
      }

      #{$rootEl}--arrows & {
        left: $arrowSize;
        right: $arrowSize;
      }
    }
  }

  &__bar{
    z-index: 1;
    position: absolute;
    background-color: rgba(0,0,0,0.2);
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover{
      background-color: rgba(0,0,0,0.8);
    }

    &--v{
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transition: width 0.2s, background-color 0.2s;
    }

    &--h{
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      transition: height 0.2s, background-color 0.2s;
    }
  }

  &__arrow {
    z-index: 1;
    position: absolute;
    background-color: rgba(0,0,0,0.2);
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover{
      background-color: rgba(0,0,0,0.8);
    }

    &--disabled {
      cursor: default;

      &:hover{
        background-color: rgba(0,0,0,0.2);
      }
    }

    &--t,
    &--b {
      left: 0;
      width: 100%;
      height: $arrowSize;
    }

    &--t {
      top: -$arrowSize;
    }

    &--b {
      bottom: -$arrowSize;
    }

    &--l,
    &--r {
      top: 0;
      height: 100%;
      width: $arrowSize;
    }
    
    &--l {
      left: -$arrowSize;
    }
    
    &--r {
      right: -$arrowSize;
    }
  }
}
```

### Default styles file
```html
<link rel="stylesheet" type="text/css" media="screen" href="./dist/potato-scroll.css" />
```

---

## Options

All available options with their default values:

```js
// global create
PotatoScroll.create({
  selector: undefined, // required, String - CSS selector string
  // ... // all single instance options exclude el
});

// or / and

// single instance create
new PotatoScroll({
  el: undefined, // required, Element
  cssClass: 'potatoScroll', // custom css class name for scrollbar styling
  forceCustom: false, // forces to use custom scrollbar on touch devices and macOS
  forceSize: 20, // offset for forceCustom to hide native scrollbar
  withArrows: false, // add arrow buttons to the tracks
  arrowMove: 40, // offset triggered by single click of arrow button
  onNativeScroll: function(element) {}, // on scroll event
  onScroll: function(progress, element) {}, // throttled on scroll event (progress is in range 0 - 1)
  onTop: function(element) {}, // on top event
  onBottom: function(element) {}, // on bottom event
  onLeft: function(element) {}, // on left event
  onRight: function(element) {}, // on right event
});
```

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `selector` | String | `undefined` | Only for `create()` method |
| `el` | Element | `undefined` | Only for single instance constructor (`new PotatoScroll()`) |
| `cssClass` | String | `"potatoScroll"` | Custom css class, all classes are generate in BEM |
| `forceCustom` | Boolean | `false` | Forces to use custom scrollbar on touch devices and macOS |
| `forceSize` | Number | `20` | Offset value used by forceCustom to hide native scrollbar |
| `withArrows` | Boolead | `false` | Enables arrow buttons on the tracks |
| `arrowMove` | Number | `40` | Offset value triggered by single click of arrow button |

---

## Constructors
| Method | Return | Description |
| --- | --- | --- |
| `new PotatoScroll(options)` | single PotatoScroll instance | The `el` property is required in the options object. |
| `PotatoScroll.create(options)` | array of PotatoScroll instances | Creates multiple instances by css selector.<sup>1</sup><br />The `selector` property is required in the options object. |

1. A single instance for each element catched by css selector

---

## Methods

| Method | Return | Description |
| --- | --- | --- |
| `refresh()` | undefined | Recalculates content size and set scrollbars size |
| `destroy()` | undefined | Destroys the instance and restore original html |
| `initialize()` | undefined | Reinitializes the instance after destroy |

---

## Events

| Event | Arguments | Triggered by |
| --- | --- | --- |
| `onNativeScroll(e, el)` | `e` {Event} native scroll event<br />`el` {Element} the instance's root element | Native scroll event. |
| `onScroll(progressObj, el)` | `progressObj` {Object} progress of the scroll in two axis as object `{v, h}`.<sup>1</sup> Each value {Number} is in range 0 - 1<br />`el` {Element} the instance's root element | Throttled scroll event.<sup>2</sup> |
| `onTop(el)` | `el` {Element} the instance's root element | Scroll to top edge | 
| `onBottom(el)` | `el` {Element} the instance's root element | Scroll to bottom edge | 
| `onLeft(el)` | `el` {Element} the instance's root element | Scroll to left edge | 
| `onRight(el)` | `el` {Element} the instance's root element | Scroll to right edge | 

1. The v is vertical axis value & this h is horizontal axis value.
2. This event is throttled using requestAnimationFrame.

---

> by dobrapyra
