/**
 * Type definitions for lovable-tagger local implementation
 */

export interface ComponentTaggerOptions {
  /**
   * Enable/disable component tagging
   * @default true
   */
  enabled?: boolean;
  
  /**
   * Custom prefix for component tags
   */
  prefix?: string;
  
  /**
   * Additional configuration options
   */
  [key: string]: any;
}

export interface VitePlugin {
  name: string;
  enforce?: 'pre' | 'post';
  configureServer?: (server: any) => void;
  transform?: (code: string, id: string) => any;
  config?: (config: any, options: { mode: string }) => any;
  buildStart?: () => void;
}

/**
 * Creates a Vite plugin for component tagging (development mode only)
 */
export function componentTagger(options?: ComponentTaggerOptions): VitePlugin;

/**
 * Default export
 */
export default componentTagger;