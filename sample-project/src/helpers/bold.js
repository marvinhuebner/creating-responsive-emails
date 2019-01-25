/**
 * Content inside the helper will be wrapped by a strong tag.
 *
 * @example
 * {{#bold}} here {{/bold}}
 */

module.exports = function(options) {
  return `<strong>${options.fn(this)}</strong>`;
};
