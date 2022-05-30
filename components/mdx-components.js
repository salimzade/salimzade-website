import styled from '@emotion/styled';

const H1 = styled.h1({
  fontSize: '40px',
  fontWeight: 700,
  color: '#1A202C',
  marginTop: '20px',
  marginBottom: '20px',
});

const H2 = styled.h2({
  fontSize: '32px',
  fontWeight: 700,
  color: '#1A202C',
  marginTop: '20px',
  marginBottom: '20px',
});

const H3 = styled.h3({
  fontSize: '28px',
  fontWeight: 700,
  color: '#1A202C',
  marginTop: '20px',
  marginBottom: '20px',
});

const H4 = styled.h4({
  fontSize: '24px',
  fontWeight: 700,
  color: '#1A202C',
  marginTop: '20px',
  marginBottom: '20px',
});

const H5 = styled.h5({
  fontSize: '20px',
  fontWeight: 700,
  color: '#1A202C',
  marginTop: '20px',
  marginBottom: '20px',
});

const H6 = styled.h6({
  fontSize: '16px',
  fontWeight: 700,
  color: '#1A202C',
  marginTop: '20px',
  marginBottom: '20px',
});

const Paragraph = styled.p({
  fontSize: '16px',
  fontWeight: 400,
  color: '#1A202C',
  marginTop: '20px',
  marginBottom: '20px',
});

const Code = styled.pre({
  display: 'block',
  fontFamily: 'Roboto Mono',
  fontSize: '16px',
  backgroundColor: '#011627',
  borderRadius: '5px',
  color: '#D6DEEB',
  padding: '20px',
  overflow: 'auto',
});

const Link_ = styled.a({
  color: '#3182CE',
});

const UL = styled.ul({
  marginLeft: '20px',
});

const OL = styled.ol({
  marginLeft: '20px',
});

const BLOCKQUOTE = styled.blockquote({
    border: '1px solid #805AD5',
    borderLeft: '4px solid #805AD5',
    p: {
        fontSize: '14px',
        fontStyle: 'italic',
        textTransform:'uppercase',
        color: '#805AD5',
        marginLeft: '16px'
    }
});

export const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: Paragraph,
  a: Link_,
  pre: Code,
  ul: UL,
  ol: OL,
  blockquote: BLOCKQUOTE,
};
