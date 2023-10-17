import test from 'ava';

import { getValue, parse, stringify } from '../index.js';

const text =
  '-8=。是 ==0 ===f=5 =9 dd k=dsds op="s 7" d-p="" sss=`7 u-` rj= lp=\' ds ds\' t="`"';

const object = new Map([
  ['-8', '。是'],
  ['==0'],
  ['===f=5'],
  ['=9'],
  ['dd'],
  ['k', 'dsds'],
  ['op', '"s 7"'],
  ['d-p', '""'],
  ['sss', '`7 u-`'],
  ['rj='],
  ['lp', "' ds ds'"],
  ['t', '"`"'],
]);

test('parse', (t) => {
  const result = parse(text);

  t.deepEqual(object, result);
  t.snapshot( result);
});

test('stringify', (t) => {
  const result = stringify(object);

  t.is(text, result);
});

test('getValue', (t) => {
  t.snapshot(getValue('"123"'), '123');
  t.snapshot(getValue('"123"'), '123');
  t.snapshot(getValue('`123`'), '123');
  t.snapshot(getValue('`123`'), '123');
  t.snapshot(getValue("'123'"), '123');
  t.snapshot(getValue("'123'"), '123');
  t.snapshot(getValue('123"'), '123"');
});
