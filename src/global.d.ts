import 'react';

declare module 'react' {
  interface CSSProperties {
    '--duration'?: string;
    '--delay'?: string;
  }
}
