/**
 * @fileoverview 不要使用正则反向预查
 * @author regular-reverse-prefetch
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/regular-reverse-prefetch"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("regular-reverse-prefetch", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: `${function decomposeValue() {
        var rgx = "1"// handles exponents notation
        let regExp = new RegExp("(?<!\\d*\\.\\d*)(\\d)(?=(\\d{3})+(?!\\d))", 'g');
        var value = ''
        return {
          original: value,
          numbers: value.match(rgx) ? value.match(regExp).map(Number) : [0],
        }
      }}`,
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
