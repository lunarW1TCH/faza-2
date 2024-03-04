// BASED ON RADIX GRAY COLOR

export const COLORS = {
  1: '#FCFCFC',
  2: '#F9F9F9',
  3: '#F0F0F0',
  4: '#E8E8E8',
  5: '#E0E0E0',
  6: '#D9D9D9',
  7: '#CECECE',
  8: '#BBBBBB',
  9: '#8D8D8D',
  10: '#838383',
  11: '#646464',
  12: '#202020',
  a1: '#00000003',
  a2: '#00000006',
  a3: '#0000000F',
  a4: '#00000017',
  a5: '#0000001F',
  a6: '#00000026',
  a7: '#00000031',
  a8: '#00000044',
  a9: '#00000072',
  a10: '#0000007C',
  a11: '#0000009B',
  a12: '#000000DF',
};

export const SEMANTIC_COLORS = {
  bg: {
    canvas: COLORS[1],
    default: 'white',
    subtle: COLORS[2],
    muted: COLORS[3],
    emphasized: COLORS[4],
    disabled: COLORS[3],
  },
  fg: {
    default: COLORS[12],
    muted: COLORS[11],
    subtle: COLORS[10],
    disabled: COLORS[7],
  },
  border: {
    default: COLORS[7],
    muted: COLORS[6],
    subtle: COLORS[4],
    disabled: COLORS[5],
    outline: COLORS.a9,
  },
};
