const t = require("babel-types");

module.exports = function () {
  return {
    visitor: {
      JSXAttribute: function (path, state) {
        if (!state || !state.opts || !state.opts.attr) {
          return;
        }
        if (state.opts.attr.includes(path.node.name.name)) {
          const expressionNode = path.node.value.expression;
          const parserNode = t.callExpression(
            t.memberExpression(t.identifier("JSON"), t.identifier("stringify")),
            [expressionNode]
          );
          path.node.value = parserNode;
        }
      },
    },
  };
};
