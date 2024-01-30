import { resolvedTheme, useTheme } from 'next-themes'
import Image from "next/image";
import LogoInverted from '../../public/images/knokd-logo-xl-inverted.png';
import LogoNoBg from '../../public/images/knokd-logo-xl.png';

export function KnokdLogo () {
  const { resolvedTheme } = useTheme();
  const imageStyle = {
    minWidth: '124px'
  }
  
  return (
    <picture>
      {resolvedTheme === 'dark' ? (
        <source srcSet={LogoInverted.src} />
      ) : (
        <source srcSet={LogoNoBg.src} />
      )}
      <Image
        priority={true}
        src={LogoNoBg}
        width={124}
        style={imageStyle}
        height={undefined}
        alt="Knokd's company logo"
      />
    </picture>
  );
}