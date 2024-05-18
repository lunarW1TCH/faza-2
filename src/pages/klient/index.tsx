import clientExample from '/client-example.png';
import { useRef, useState } from 'react';
import { SEMANTIC_COLORS } from '~/styles/colors';
import buttonRecipe from '~/styles/recipes/button';
import inputRecipe from '~/styles/recipes/input';
import RADII from '~/styles/tokens/radii';
import SPACING from '~/styles/tokens/spacing';

import VStack from '../../components/containers/v-stack';

const Klient = () => {
  const [name, setName] = useState('');
  const nameRef = useRef<HTMLInputElement | null>(null);

  return (
    <VStack css={{ margin: SPACING['4'] }}>
      <input
        css={[
          inputRecipe,
          {
            width: '200px',
          },
        ]}
        placeholder='Wpisz swoje imię'
        ref={nameRef}
      />
      <button
        css={[
          buttonRecipe.base,
          buttonRecipe.solid,
          {
            width: '200px',
          },
        ]}
        onClick={() => {
          if (!nameRef.current) return;
          setName(nameRef.current.value);
          nameRef.current.value = '';
        }}
      >
        Akceptuj
      </button>
      {name && <p>Witaj {name}!</p>}
      <hr
        css={{
          marginTop: SPACING[2],
          marginBottom: SPACING[2],
          border: '1px solid',
          borderColor: SEMANTIC_COLORS.border.muted,
          width: '100%',
        }}
      />
      <img
        src={clientExample}
        alt='Kod implementujący powyższą funkcjonalność'
        css={{
          width: '500px',
          border: '1px solid',
          borderColor: SEMANTIC_COLORS.border.subtle,
          borderRadius: RADII.md,
        }}
      />
      <p
        css={{
          fontSize: '12px',
          fontStyle: 'italic',
          color: SEMANTIC_COLORS.fg.muted,
          textAlign: 'center',
        }}
      >
        Kod implementujący powyższą funkcjonalność z wyłączeniem zawartości
        poniżej horyzontalnej linii ({'<hr/>'})
      </p>
    </VStack>
  );
};

export default Klient;
