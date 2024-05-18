import FetchContainer from '~/components/strateg/fetch-container';
import { getStrategApiUrl } from '~/lib/api';

import VStack from '../../components/containers/v-stack';

const Indicator3 = () => {
  const fetchUrl = getStrategApiUrl(1508, 1948);

  return (
    <VStack>
      <FetchContainer url={fetchUrl} />
    </VStack>
  );
};

export default Indicator3;
