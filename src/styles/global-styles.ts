import { css } from '@emotion/react';

import { SEMANTIC_COLORS } from './colors';

// based on preflight designed by tailwindcss teams

const styles = css({
  '*': {
    boxSizing: 'border-box',
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: 'currentColor',
    minWidth: 0,
  },
  html: {
    lineHeight: 1.5,
    WebkitTextSizeAdjust: '100%',
    MozTabSize: 4,
    tabSize: 4,
    fontFamily: 'Inter',
    fontFeatureSettings: 'normal',
    fontVariationSettings: 'normal',
    WebkitTapHighlightColor: 'transparent',
    minHeight: '100%',
    MozOsxFontSmoothing: 'grayscale',
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
  },
  body: {
    margin: 0,
    height: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: SEMANTIC_COLORS.bg.canvas,
    color: SEMANTIC_COLORS.fg.default,
  },
  hr: {
    height: 0,
    color: 'inherit',
    borderTopWidth: '1px',
  },
  'h1, h2, h3, h4, h5, h6': {
    fontSize: 'inherit',
    fontWeight: 'inherit',
  },
  a: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
  'code, kbd, samp, pre': {
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    fontFeatureSettings: 'normal',
    fontVariationSettings: 'normal',
    fontSize: '1em',
  },
  table: {
    textIndent: 0,
    borderColor: 'inherit',
    borderCollapse: 'collapse',
  },
  'button, input, optgroup, select, textarea': {
    fontFamily: 'inherit',
    fontFeatureSettings: 'inherit',
    fontVariationSettings: 'inherit',
    fontSize: '100%',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    color: 'inherit',
    margin: 0,
    padding: 0,
  },
  'button, select': {
    textTransform: 'none',
  },
  "button, [type='button'], [type='reset'], [type='submit']": {
    WebkitAppearance: 'button',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
  },
  ':-moz-focusring': {
    outline: 'auto',
  },
  ':-moz-ui-invalid': {
    boxShadow: 'none',
  },
  progress: {
    verticalAlign: 'baseline',
  },
  '::-webkit-inner-spin-button, ::-webkit-outer-spin-button': {
    height: 'auto',
  },
  "[type='search']": {
    WebkitAppearance: 'textfield',
    outlineOffset: '-2px',
  },
  '::-webkit-search-decoration': {
    WebkitAppearance: 'none',
  },
  '::-webkit-file-upload-button': {
    WebkitAppearance: 'button',
    font: 'inherit',
  },
  summary: {
    display: 'list-item',
  },
  'blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre': {
    margin: 0,
  },
  fieldset: {
    margin: 0,
    padding: 0,
  },
  legend: {
    padding: 0,
  },
  'ol, ul, menu': {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  dialog: {
    padding: 0,
  },
  textarea: {
    resize: 'vertical',
  },
  'input::placeholder, textarea::placeholder': {
    opacity: 1,
    color: '#9ca3af',
  },
  'button, [role="button"]': {
    cursor: 'pointer',
  },
  ':disabled': {
    cursor: 'default',
  },
  'img, svg, video, canvas, audio, iframe, embed, object': {
    display: 'block',
    verticalAlign: 'middle',
  },
  'img, video': {
    maxWidth: '100%',
    height: 'auto',
  },
  '[hidden]': {
    display: 'none',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: SEMANTIC_COLORS.bg.subtle,
  },
});

export default styles;
