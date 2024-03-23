import styled from 'styled-components';

const _Wrapper = styled.div`
  aspect-ratio: 16 / 9;
  width: 100%;
`;

const _Image = styled.img`
  display: inline-block;
  width: 100%;
`;

export const HeroImage: React.FC = () => {
  return (
    <_Wrapper>
      <_Image alt="Cyber TOON" src="https://res.cloudinary.com/dlibdyano/image/upload/v1711166854/hero.webp" />
    </_Wrapper>
  );
};
