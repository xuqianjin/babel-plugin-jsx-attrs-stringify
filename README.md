# babel-plugin-jsx-attrs-stringify

## Example

Converts

```javascript
let bb = { ff: 1 };
let ss = <div data-bb={{ afsf: 11 }}></div>;
let dd = <label data-bb={bb}>Test</label>;
```

(roughly) to

```javascript
let bb = { ff: 1 };
let ss = <div data-bb={JSON.stringify({ afsf: 11 })}></div>;
let dd = <label data-bb={JSON.stringify(bb)}>Test</label>;
```

## Installation & Usage

Install the plugin:

```
npm install --save-dev babel-plugin-jsx-attrs-stringify
```

Then edit your `.babelrc` to include `jsx-attrs`:

```json
{
  "plugins": [["jsx-attrs-stringify",options]]
}
```

### options

`options` must be object.

```javascript
{
  "attr":['data-bb']
}
```
