import { resolvedTheme, useTheme } from 'next-themes'
import Image from "next/image";
import LogoInverted from '../../public/images/firstlist-logo-dark-background.png';
import LogoNoBg from '../../public/images/firstlist-logo.png';

export function KnokdLogo () {
  const { resolvedTheme } = useTheme();
  
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
        width={undefined}
        style={{minWidth: 79}}
        height={28}
        alt="FirstList's logo"
      />
    </picture>
  );
}
