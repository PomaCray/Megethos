// Optional: declare the legacy <marquee> tag so TypeScript won't error if you keep using it.
// Prefer using the CSS-based marquee implemented in `Slide.tsx`.
declare namespace JSX {
  interface IntrinsicElements {
    marquee: any;
  }
}
