const CONDITIONS = {
  _hover: '&:is(:hover, [data-hover])',
  _focus: '&:is(:focus, [data-focus])',
  _disabled: '&:is(:disabled, [disabled], [data-disabled])',
  _active: '&:is(:active, [data-active])',
  _selected: '&:is([aria-selected=true], [data-selected])',
  _focusVisible: '&:is(:focus-visible, [data-focus-visible])',
} as const;

export default CONDITIONS;
