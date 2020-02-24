# PotatoScroll
Custom scrollbar but still native scroll engine.

Demo: [https://dobrapyra.github.io/PotatoScroll/](https://dobrapyra.github.io/PotatoScroll/)

## Usage

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
    height: 100%;
    top: 0;
    right: 0;
    transition: width 0.2s, background-color 0.2s; }
    .potatoScroll__track--v:hover {
      width: 12px; }
  .potatoScroll__track--h {
    width: 100%;
    height: 4px;
    left: 0;
    bottom: 0;
    transition: height 0.2s, background-color 0.2s; }
    .potatoScroll__track--h:hover {
      height: 12px; }

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
```

### SCSS
Example SCSS

```scss
.potatoScroll{
  &__mask {
    z-index: 0;
  }

  &__track{
    background-color: rgba(0,0,0,0.1);
    transition: background-color 0.2s;

    &--v{
      width: 4px;
      height: 100%;
      top: 0;
      // left: 100%;
      right: 0;
      transition: width 0.2s, background-color 0.2s;

      &:hover{
        width: 12px;
      }
    }

    &--h{
      width: 100%;
      height: 4px;
      left: 0;
      // top: 100%;
      bottom: 0;
      transition: height 0.2s, background-color 0.2s;

      &:hover{
        height: 12px;
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
}
```

### JS

```js
// global create
PotatoScroll.create({ selector: '.scroll' });

// or/and

// single instance create
new PotatoScroll({ el: document.querySelector('.scroll--main') });
new PotatoScroll({ el: document.querySelector('.scroll--nested') });

```
  
## Options

All available options with their default values:

```js
// global create
PotatoScroll.create({
  selector: undefined, // required, String - CSS selector string
  // all single instance options exclude el
});

// or/and

// single instance create
new PotatoScroll({
  el: undefined, // required, Element
  cssClass: 'potatoScroll', // custom css class name for scrollbar styling
  forceCustom: false, // force to use custom scroll on touch devices and macOS
  forceSize: 20, // offset for forceCustom to hide native scroll
});
```