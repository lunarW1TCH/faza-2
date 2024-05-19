import cardRecipe from '~/styles/recipes/card';
import FONT_SIZES from '~/styles/tokens/font-sizes';
import FONT_WEIGHTS from '~/styles/tokens/font-weights';

import linkRecipe from '../../styles/recipes/link';
import VStack from '../containers/v-stack';

const ErrorFallback = () => {
  return (
    <VStack>
      <div css={[cardRecipe.root, { maxWidth: '400px' }]}>
        <div css={cardRecipe.header}>
          <h1
            css={{
              fontSize: FONT_SIZES.xl,
              fontWeight: FONT_WEIGHTS.semibold,
            }}
          >
            Pobieranie danych nie powiodło się
          </h1>
        </div>
        <div css={cardRecipe.body}>
          <p css={{ textAlign: 'justify' }}>
            API{' '}
            <a href='https://strateg.stat.gov.pl/apidocs' css={linkRecipe}>
              strateg.stat.gov
            </a>{' '}
            posiada ograniczenie wykonywanych zapytań: do 10 żądań na sekundę
            oraz do 500 żądań na 15 minut. Jeżeli widzisz tę wiadomość spróbuj
            ponownie za kilkanaście minut. Przepraszam za opóźnienia!
          </p>
        </div>
      </div>
    </VStack>
  );
};

export default ErrorFallback;
