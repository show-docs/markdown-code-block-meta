# markdown-code-block-meta

A library to parse/stringify metadata of markdown code block.

[![npm][npm-badge]][npm-url]
[![github][github-badge]][github-url]
![node][node-badge]

[npm-url]: https://www.npmjs.com/package/markdown-code-block-meta
[npm-badge]: https://img.shields.io/npm/v/markdown-code-block-meta.svg?style=flat-square&logo=npm
[github-url]: https://github.com/nice-move/markdown-code-block-meta
[github-badge]: https://img.shields.io/npm/l/markdown-code-block-meta.svg?style=flat-square&colorB=blue&logo=github
[node-badge]: https://img.shields.io/node/v/markdown-code-block-meta.svg?style=flat-square&colorB=green&logo=node.js

## Installation

```bash
npm install markdown-code-block-meta --save
```

## Usage

Parsing markdown with [remark](https://remark.js.org).

````markdown
```js title="Here is an example"

```
````

A Code block will turn into:

```json
{
  "lang": "js",
  "meta": "title=\"Here is an example\""
}
```

Parsing metadata like this:

```js
import { getValue, parse, stringify } from 'markdown-code-block-meta';

const input =
  '-8=。是 ==0 ===f=5 =9 dd k=dsds op="s 7" d-p="" sss=`7 u-` rj= lp=\' ds ds\' t="`"';

const result = parse(input);
/* result = Map {
  '-8' => '。是',
  '==0' => undefined,
  '===f=5' => undefined,
  '=9' => undefined,
  'dd' => undefined,
  'k' => 'dsds',
  'op' => '"s 7"',
  'd-p' => '""',
  'sss' => '`7 u-`',
  'rj=' => undefined,
  'lp' => '\' ds ds\'',
  't' => '"`"'
} */

stringify(result); // same as input

getValue('"abc"'); // abc
getValue('`abc`'); // abc
getValue("'abc'"); // abc
```

## Related

- [remark-kroki](https://github.com/nice-move/remark-kroki)
- [remark-code-example](https://github.com/nice-move/remark-code-example)
