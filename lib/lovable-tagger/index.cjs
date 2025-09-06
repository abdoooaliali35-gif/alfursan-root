/**
 * Lovable Tagger - Local Stub Implementation (CommonJS)
 */

function componentTagger(options = {}) {
  return {
    name: 'lovable-tagger',
    enforce: 'pre',
    configureServer(server) {
      if (process.env.NODE_ENV === 'development') {
        console.log('Lovable Tagger: Component tagging enabled (stub)');
      }
    },
    transform(code, id) {
      if (process.env.NODE_ENV !== 'development') {
        return null;
      }
      return null;
    },
    config(config, { mode }) {
      if (mode !== 'development') {
        return;
      }
      return {
        define: {
          __LOVABLE_TAGGER__: true
        }
      };
    }
  };
}

module.exports = { componentTagger };
module.exports.componentTagger = componentTagger;
module.exports.default = componentTagger;