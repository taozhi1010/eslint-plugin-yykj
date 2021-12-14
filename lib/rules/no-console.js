/**
 * @fileoverview not use console
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
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "not use console",
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
      'CallExpression MemberExpression': node => {
        if (node.object.name !== 'console') return; // 不是console过滤
        if (node.property.name === 'log' && node.object.name === 'console') {
          context.report({
            node,
            message: 'not use console',
            fix(fixer) {
              return [
                // 修改数字为变量
                fixer.insertTextBeforeRange(node.range, '// '),
              ];
            }
          });
        }
      }
    }
  },
};
