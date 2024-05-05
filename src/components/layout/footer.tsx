import { SEMANTIC_COLORS } from '~/styles/colors';
import FONT_SIZES from '~/styles/tokens/font-sizes';

const Footer = () => {
  return (
    <footer
      css={{
        width: '100%',
        textAlign: 'center',
        borderTop: '1px solid',
        borderTopColor: SEMANTIC_COLORS.border.subtle,
        backgroundColor: SEMANTIC_COLORS.bg.default,
      }}
    >
      <span
        css={{
          fontSize: FONT_SIZES.sm,
        }}
      >
        &copy; 2024 Adrian Żegnałek
      </span>
    </footer>
  );
};

export default Footer;
