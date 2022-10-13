import React from 'react';
import * as s from './styled-Footer'

import instagram from './../../assets/images/instagram.png';
import facebook from './../../assets/images/facebook.png';
import youtube from './../../assets/images/youtube.png';

export default function Footer() {
  return (
    <s.Footer>
      <s.Left>
        +55 11 3661-1712 | contato@shopper.com.br
      </s.Left>

      <s.Center>
        Shopper Comércio Alimentício LTDA | CNPJ 24.583.557/0001-60 | São Paulo - SP
      </s.Center>

      <s.Right>
        <s.TextFollow>Sigam-nos nas redes sociais:</s.TextFollow>
        <s.SocialMidias>
          <a href="https://www.instagram.com/shopper.com.br/" target="_blank" rel="noopener noreferrer"><s.ImageSocialMidia src={instagram} /></a>
          <a href="https://www.youtube.com/channel/UC8lKcjNoanFo-kEi2w9mWaA" target="_blank" rel="noopener noreferrer"><s.ImageSocialMidia src={youtube} /></a>
          <a href="https://www.facebook.com/shopper.com.br" target="_blank" rel="noopener noreferrer"><s.ImageSocialMidia src={facebook} /></a>
        </s.SocialMidias>
      </s.Right>
    </s.Footer>
  )
};