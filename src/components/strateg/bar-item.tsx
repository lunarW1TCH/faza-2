import { SEMANTIC_COLORS } from '~/styles/colors';
import { MEDIA_QUERY } from '~/styles/tokens/breakpoints';
import CONDITIONS from '~/styles/tokens/conditions';
import RADII from '~/styles/tokens/radii';

const BarItem = (props: BarItemProps) => {
  const { name, value } = props;

  return (
    <div
      css={{
        height: '600px',
        paddingLeft: '3px',
        paddingRight: '3px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        [CONDITIONS._hover]: hoverActiveStyles,
        [CONDITIONS._active]: hoverActiveStyles,
      }}
    >
      <div
        className='barBg'
        css={{
          width: '20px',
          [MEDIA_QUERY.smDown]: {
            width: '10px',
          },
          backgroundColor: SEMANTIC_COLORS.fg.default,
          zIndex: 10,
          borderRadiusTop: RADII.sm,
          transition:
            'background-color 0.3s ease-in-out, width 0.3s ease-in-out',
          position: 'relative',
          justifyContent: 'center',
          display: 'flex',
          marginBottom: '200px',
        }}
        style={{ height: value * 4 }}
      />
      <span
        className='barValue'
        css={{
          display: 'none',
          opacity: 0,
          position: 'absolute',
          textAlign: 'center',
          transition: 'opacity 0.5s, width 0.5s',
          bottom: '170px',
          fontSize: '14px',
          [MEDIA_QUERY.smDown]: {
            fontSize: '12px',
          },
        }}
      >{`${value.toString().replace('.', ',')}%`}</span>
      <span
        css={{
          position: 'absolute',
          rotate: '270deg',
          bottom: '110px',
          textWrap: 'nowrap',
          textAlign: 'start',
          width: '200px',
          fontSize: '14px',
          [MEDIA_QUERY.smDown]: {
            fontSize: '12px',
          },
        }}
      >
        {name}
      </span>
    </div>
  );
};

export default BarItem;

type BarItemProps = {
  name: string;
  value: number;
};

const hoverActiveStyles = {
  '& .barBg': {
    backgroundColor: SEMANTIC_COLORS.accent[9],
    width: '100px',
    [MEDIA_QUERY.smDown]: {
      width: '60px',
    },
  },
  '& .barValue': {
    display: 'flex',
    opacity: 1,
  },
};
