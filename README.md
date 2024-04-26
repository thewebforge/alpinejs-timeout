# Timeout plugin for Alpine.js

TheWebForge’s Timeout plugin for Alpine.js allows you to easily add a timeout to your Alpine.js components.

## Installation

You can use this plugin by either including it from a `<script>` tag or installing it via NPM:

### Via CDN

You can include the CDN build of this plugin as a `<script>` tag, just make sure to include it BEFORE Alpine’s core JS file.

```html
<!-- Alpine Plugins -->
<script defer src="https://unpkg.com/@thewebforge/alpinejs-timeout@1.x.x/dist/cdn.min.js"></script>
 
<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### Via NPM

You can install Timeout from NPM for use inside your bundle like so:

```bash
npm install @thewebforge/alpinejs-timeout
```

Then initialize it from your bundle:

```js
import Alpine from 'alpinejs'
import timeout from '@thewebforge/alpinejs-timeout'
 
Alpine.plugin(timeout)
 
...
```

## x-timeout

### Value

The value of `x-timeout` should be the number of milliseconds you want to wait before the expression is executed.

```html
<div x-data="{ show: false }">
    <button @click="show = true">Show</button>
    <div x-show="show" x-timeout:2000="show = false">This will disappear after 2 seconds</div>
</div>
```

### Modifier

#### .repeat

The `.repeat` modifier will repeat the timeout every time the expression is executed.

```html
<div  x-data x-timeout:1000.repeat="$el.innerText=new Date().toLocaleString()"></div>
```
