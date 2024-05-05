import buttonRecipe from '~/styles/recipes/button';
import inputRecipe from '~/styles/recipes/input';

import VStack from '../../components/containers/v-stack';

const Klient = () => {
  return (
    <VStack>
      <button css={[buttonRecipe.base, buttonRecipe.solid]}>Akceptuj</button>
      <input css={inputRecipe} />
    </VStack>
  );
};

export default Klient;
