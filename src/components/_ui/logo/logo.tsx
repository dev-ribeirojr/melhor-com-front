import { ImgHTMLAttributes } from 'react'
import LogoImage from '../../../assets/images/logo.png'

type LogoProps = ImgHTMLAttributes<HTMLImageElement>

export function Logo({ ...rest }: LogoProps) {
  return <img src={LogoImage} alt="Logo da empresa" {...rest} />
}
