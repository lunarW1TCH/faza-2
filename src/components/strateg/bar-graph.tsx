import { SEMANTIC_COLORS } from '~/styles/colors';
import { MEDIA_QUERY } from '~/styles/tokens/breakpoints';
import RADII from '~/styles/tokens/radii';

import BarItem from './bar-item';
import BarLines from './bar-lines';
import BarYAxis from './bar-y-axis';

import type { GraphData } from '~/types/api';
const BarGraph = (props: BarGraphProps) => {
  const { graphData } = props;

  return (
    <div
      css={{
        width: '480px',
        [MEDIA_QUERY.smDown]: {
          maxWidth: '320px',
        },
        height: '600px',
        border: '1px solid',
        borderColor: SEMANTIC_COLORS.border.default,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: RADII.md,
      }}
    >
      <div
        css={{
          width: '100%',
          height: '600px',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'flex-end',
          position: 'relative',
        }}
      >
        <BarLines />
        <BarYAxis />
        {graphData.map((d) => (
          <BarItem key={d.name} name={d.name} value={d.value} />
        ))}
      </div>
    </div>
  );
};

export default BarGraph;

type BarGraphProps = {
  graphData: GraphData;
};
