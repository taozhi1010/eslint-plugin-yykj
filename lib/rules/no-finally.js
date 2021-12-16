/**
 * @fileoverview not use finally
 * @author no-finally
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
      TryStatement(node) {
        // 获取所有注释的节点
        if (!node.finalizer) return //无finally 返回
        context.report({
          node,
          message: 'not use finally',
          fix(fixer) {
            return [
              // 修改数字为变量
              fixer.insertTextBeforeRange(node.range, '// '),
            ];
          }
        });
      }
    };
  },
};
