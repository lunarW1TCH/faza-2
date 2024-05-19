import type {
  GraphData,
  StrategApiURL,
  StrategResponseBody,
  VoivodeshipID,
} from '~/types/api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher, voivodeships } from '~/lib/api';
import { SEMANTIC_COLORS } from '~/styles/colors';
import cardRecipe from '~/styles/recipes/card';
import { MEDIA_QUERY } from '~/styles/tokens/breakpoints';
import SPACING from '~/styles/tokens/spacing';

import linkRecipe from '../../styles/recipes/link';
import VStack from '../containers/v-stack';
import LoadingFallback from '../loading-fallback';
import BarGraph from './bar-graph';
import ErrorFallback from './error-fallback';

const FetchContainer = (props: FetchContainerProps) => {
  const { url } = props;
  const pathname = useLocation().pathname as AppPathname;

  const [graphData, setGraphData] = useState<GraphData>([]);
  const { data, isLoading, error } = useSWR<StrategResponseBody<string>>(
    url,
    fetcher,
    {
      isPaused: () => false,
    }
  );

  useEffect(() => {
    console.log(data);
    if (isLoading || !data || error || 'message' in data) return;

    const data2021 = Object.entries(data?.real_values['2021']).map((entry) => ({
      name: voivodeships[entry[0] as VoivodeshipID],
      value: parseFloat(entry[1]),
    }));

    setGraphData(data2021);
  }, [isLoading, data, error]);

  if (isLoading) return <LoadingFallback />;
  if (error || (data && 'message' in data)) return <ErrorFallback />;

  return (
    <VStack css={{ marginTop: SPACING['4'], marginBottom: SPACING['4'] }}>
      <div
        css={[
          cardRecipe.root,
          {
            minWidth: '280px',
            maxWidth: '550px',
            [MEDIA_QUERY.smDown]: {
              maxWidth: '410px',
            },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
      >
        <div css={[cardRecipe.header]}>
          <h3
            css={[
              cardRecipe.title,
              {
                textWrap: 'wrap',
                fontSize: '16px',
                marginLeft: SPACING['3'],
              },
            ]}
          >
            {getTitle(pathname)}
          </h3>
        </div>
        <div css={[cardRecipe.body]}>
          <BarGraph graphData={graphData} />
        </div>
      </div>
      <span css={{ fontSize: '10px', color: SEMANTIC_COLORS.fg.default }}>
        Źródło:{' '}
        <a css={linkRecipe} href='https://strateg.stat.gov.pl/#/'>
          strateg.stat.gov.pl
        </a>
      </span>
    </VStack>
  );
};

export default FetchContainer;

type FetchContainerProps = {
  url: StrategApiURL;
};

const getTitle = (pathname: AppPathname) => {
  switch (pathname) {
    case '/indicator-1':
      return 'Odsetek gospodarstw domowych posiadających szerokopasmowy dostęp do Internetu w domu - 2021';
    case '/indicator-2':
      return 'Odsetek osób korzystających z Internetu w celu wyszukiwania informacji o towarach lub usługach - 2021';
    case '/indicator-3':
      return 'Przedsiębiorstwa (powyżej 9 pracujących) posiadające własną stronę internetową - 2021';
  }
};

type AppPathname = `/indicator-${1 | 2 | 3}`;
