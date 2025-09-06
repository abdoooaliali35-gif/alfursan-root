# Lovable Tagger - Local Implementation

Local implementation of the lovable-tagger Vite plugin for the Al Fursan Quadruple Factory project.

## Features

- 🔧 **Development Mode Only**: Only active during development, completely disabled in production
- 🚀 **Zero Dependencies**: No external dependencies required
- 📦 **TypeScript Support**: Full TypeScript definitions included
- 🔄 **Hot Reload Compatible**: Works seamlessly with Vite's hot reload
- 🎯 **Production Safe**: Automatically disabled in production builds

## Usage

This package is automatically used by the project's Vite configuration. No manual setup required.

```typescript
import { componentTagger } from 'lovable-tagger';

// Used in vite.config.ts
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  // ... other config
}));
```

## Version

Current version: 1.1.9

## License

MIT License - Al Fursan Development Team