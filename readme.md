# Sheetify-json
> Use sheetify prefixes anywhere.

## Install
```shell
npm install sheetify-json
```

## Usage
```shell
browserify -t [sheetify -u sheetify-json] index.js > bundle.js
```
index.js
```javascript
var css = require('sheetify')
css('./styles.css')
```
This will generate styles.css.json containing the following:
```json
{
    "prefix": "._123123"
}
```

## Tests
```shell
npm test
```

## License
MIT
