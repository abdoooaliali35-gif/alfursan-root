/**
 * Lovable Tagger - Local Implementation for Al Fursan Project
 * Professional Vite plugin stub that provides compatibility
 * @version 1.1.9
 */

/**
 * Creates a Vite plugin for component tagging (development mode only)
 * @param {Object} options - Plugin configuration options
 * @returns {Object} Vite plugin object
 */
export function componentTagger(options = {}) {
  const pluginName = 'lovable-tagger-local';
  
  return {
    name: pluginName,
    enforce: 'pre',
    
    /**
     * Configure development server
     */
    configureServer(server) {
      if (process.env.NODE_ENV === 'development') {
        // Log only once during startup
        if (!global.__LOVABLE_TAGGER_LOGGED) {
          console.log(`✓ ${pluginName}: Component tagging enabled (local implementation)`);
          global.__LOVABLE_TAGGER_LOGGED = true;
        }
      }
    },
    
    /**
     * Transform code during development
     */
    transform(code, id) {
      // Only process in development mode
      if (process.env.NODE_ENV !== 'development') {
        return null;
      }
      
      // Stub implementation - passes through original code
      return null;
    },
    
    /**
     * Configure plugin settings
     */
    config(config, { mode }) {
      // Only active in development mode
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
    
    /**
     * Build start hook
     */
    buildStart() {
      if (process.env.NODE_ENV === 'production') {
        // Silent in production
        return;
      }
    }
  };
}

// Default export for compatibility
export default componentTagger;