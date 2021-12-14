/**
 * @fileoverview 禁止console
 * @author no-console
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
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "禁止console",
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
      // 返回事件钩子
      CallExpression: node => {
        if (node.callee.object.name !== 'console') return; // 不是log过滤
        context.report({
          node,
          message: '禁止使用console 请删除',
          fix(fixer) {
            return [
              // 删除console
              fixer.removeRange(node.range)
            ];
          }
        });
      }
    };
  },
};
