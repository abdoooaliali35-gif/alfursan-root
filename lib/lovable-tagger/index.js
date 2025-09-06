/**
 * Lovable Tagger - Local Stub Implementation
 * This is a local implementation to satisfy import requirements
 */

export function componentTagger(options = {}) {
  return {
    name: 'lovable-tagger',
    enforce: 'pre',
    configureServer(server) {
      // Only active in development mode
      if (process.env.NODE_ENV === 'development') {
        // Stub implementation for development mode
        console.log('Lovable Tagger: Component tagging enabled (stub)');
      }
    },
    transform(code, id) {
      // Only process in development mode
      if (process.env.NODE_ENV !== 'development') {
        return null;
      }
      
      // Stub transformation - just return the original code
      return null;
    },
    config(config, { mode }) {
      // Only active in development mode
      if (mode !== 'development') {
        return;
      }
      
      // Stub configuration
      return {
        define: {
          __LOVABLE_TAGGER__: true
        }
      };
    }
  };
}

export default componentTagger;