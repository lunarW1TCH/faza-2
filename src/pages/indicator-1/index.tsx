import FetchContainer from '~/components/strateg/fetch-container';
import { getStrategApiUrl } from '~/lib/api';

import VStack from '../../components/containers/v-stack';

const Indicator1 = () => {
  const fetchUrl = getStrategApiUrl(635, 490);

  return (
    <VStack>
      <FetchContainer url={fetchUrl} />
    </VStack>
  );
};

export default Indicator1;
