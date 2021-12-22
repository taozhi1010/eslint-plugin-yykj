/**
 * @fileoverview 不要使用正则反向预查
 * @author regular-reverse-prefetch
 */
"use strict";

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
      description: "不要使用正则反向预查",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
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
      Literal(node) {
        if (node.regex && node.regex.pattern) {
          let pattern = node.regex.pattern
          if ((pattern.indexOf("?<=") > -1) || (pattern.indexOf("?<!") > -1)) {
            context.report({
              node,
              message: '不要使用正则反向预查 ?<= , ?<! 这将导致在safari浏览器中报错!',
            })
          }
        }
      },
      NewExpression(node) {
        if (node.callee.name === 'RegExp' && node.arguments && node.arguments[0]) {
          let regexNode = node.arguments[0]
          let value = regexNode.value + ''
          if ((value.indexOf("?<=") > -1) || (value.indexOf("?<!")) > -1) {
            context.report({
              node: regexNode,
              message: '不要使用正则反向预查 ?<= , ?<! 这将导致在safari浏览器中报错!',
            })
          }
        }
      }
    };
  },
};
