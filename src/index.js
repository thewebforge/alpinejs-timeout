/**
 * Adapted from the oficial Alpine.js file:
 * @see https://github.com/alpinejs/alpine/blob/main/packages/focus/src/index.js
 *
 * @param {*} Alpine The Alpine global object
 */
export default function (Alpine) {
  /**
   * Wait for a given duration and then execute the given function
   *
   * @param {*} fn The function to execute
   * @param {*} duration The duration in milliseconds
   */
  const wait = function (fn, duration, options = {}) {
    setTimeout(() => {
      fn();
      if (options.repeat) {
        wait(fn, duration, options);
      }
    }, duration);
  };

  /**
   * Custom Directive
   *
   * @see https://alpinejs.dev/advanced/extending#custom-directives
   * @see https://alpinejs.dev/advanced/extending#method-signature
   * @param {string} name The name of the directive. The name "mydirective" will be consumed as x-mydirective
   * @param {*} el The DOM element the directive is added to
   * @param {*} value If provided, the part of the directive after a colon. Ex: 'bar' in x-foo:bar
   * @param {*} modifiers An array of dot-separated trailing additions to the directive. Ex: ['baz', 'lob'] from x-foo.baz.lob
   * @param {*} expression The attribute value portion of the directive. Ex: law from x-foo="law"
   * @param {*} evaluateLater The Alpine evaluateLater API
   * @param {*} effect A function to create reactive effects that will auto-cleanup after this directive is removed from the DOM
   * @param {*} cleanup A function you can pass bespoke callbacks to that will run when this directive is removed from the DOM
   */
  Alpine.directive(
    "timeout",
    (
      el,
      { value, modifiers, expression },
      { evaluateLater, effect, cleanup }
    ) => {
      const duration = parseInt(value);
      const options = {
        repeat: modifiers.includes("repeat"),
      };
      let evaluator = evaluateLater(expression);
      if (typeof evaluator !== "function") {
        throw new Error("The value of x-timeout must be a function");
      }
      wait(() => {
        evaluator();
      }, duration, options);
    }
  );
}
