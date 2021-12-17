/**
 * @fileoverview not use finally
 * @author no-finally
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-finally"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 9, // 默认支持语法为es5 
  },
}); ruleTester.run("no-finally", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: `new Promise().then((data)=>{
        console.log('2')
      
      }).finally((res)=>{
      console.log('2')
      })`,
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
