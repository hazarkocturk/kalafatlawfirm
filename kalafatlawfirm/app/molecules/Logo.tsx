import logoImage from '../assets/logokalafat.png'
import Image from 'next/image'

const Logo = () => {
  return (
    <Image src={logoImage} alt="Logo" width={150} height={150} className='bg-cover' />
  )
}

export default Logo
