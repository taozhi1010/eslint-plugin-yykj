/**
 * @fileoverview 禁止console
 * @author no-console
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-console"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 7, // 默认支持语法为es5 
  },
});
ruleTester.run("no-console", rule, {
  valid: [
    // give me some code that won't trigger a warning

  ],

  invalid: [
    {
      code: "console.log(0000)",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
