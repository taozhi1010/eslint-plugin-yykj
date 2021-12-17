/**
 * @fileoverview not use finally
 * @author no-finally
 */
"use strict";
const isPromise = require('./utils/is-promise')

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "not use finally",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: 'code', // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
      CallExpression(node) {
        if (isPromise(node)) {
          if (
            node.callee &&
            node.callee.property &&
            node.callee.property.name === 'finally'
          ) {
            let finallyLoc = node.callee.property.loc
            let promiseLoc = node.loc
            context.report({
              loc: {
                start: finallyLoc.start,
                end: promiseLoc.end
              },
              message: 'not use finally in Promise',
            })
          }
        }
      },
      TryStatement(node) {
        if (!node.finalizer) return
        let tryLoc = node.loc
        //有catch
        if (node.handler) {
          let catchLoc = node.handler.loc
          context.report({
            loc: {
              start: catchLoc.end,
              end: tryLoc.end
            },
            message: 'not use finally in try',
          })
        } else {
          let blocLoc = node.block.loc
          context.report({
            loc: {
              start: blocLoc.end,
              end: tryLoc.end
            },
            message: 'not use finally in try',
          })
        }

      }
    };
  },
};
