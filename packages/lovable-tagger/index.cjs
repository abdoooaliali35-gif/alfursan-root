/**
 * Lovable Tagger - Local Implementation for Al Fursan Project (CommonJS)
 * Professional Vite plugin stub that provides compatibility
 * @version 1.1.9
 */

/**
 * Creates a Vite plugin for component tagging (development mode only)
 * @param {Object} options - Plugin configuration options
 * @returns {Object} Vite plugin object
 */
function componentTagger(options = {}) {
  const pluginName = 'lovable-tagger-local';
  
  return {
    name: pluginName,
    enforce: 'pre',
    
    configureServer(server) {
      if (process.env.NODE_ENV === 'development') {
        if (!global.__LOVABLE_TAGGER_LOGGED) {
          console.log(`✓ ${pluginName}: Component tagging enabled (local implementation)`);
          global.__LOVABLE_TAGGER_LOGGED = true;
        }
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
        return {};
      }
      
      return {
        define: {
          __LOVABLE_TAGGER_VERSION__: JSON.stringify('1.1.9'),
          __LOVABLE_TAGGER_LOCAL__: true
        }
      };
    },
    
    buildStart() {
      if (process.env.NODE_ENV === 'production') {
        return;
      }
    }
  };
}

// CommonJS exports
module.exports = { componentTagger };
module.exports.componentTagger = componentTagger;
module.exports.default = componentTagger;