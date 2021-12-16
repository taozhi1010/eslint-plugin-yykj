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

const ruleTester = new RuleTester();
ruleTester.run("no-finally", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: `try {
       
    } catch(e) {
      console.error(1)
    } finally {
      console.log('log')
    }`,
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
