import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Web3 Portfolio
        </SectionTitle>
        <SectionText>
          I have been in the crypto space since 2017. Passionate about blockchain technology and niches in crypto like DeFi and NFTs. Self taught blockchain developer with 1+ year of experience with Solidity.
        </SectionText>
        <Button onClick={() => window.location = "mailto:theim11@hotmail.com"}> Hire me now!</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;