import Image from 'next/image'

const Header = () => {
  return (
    <header className="flex items-center justify-center bg-black py-4">
      <Image
        src={'/assets/logo.svg'}
        alt={'Logo Smart Fit'}
        width={150}
        height={100}
      />
    </header>
  )
}

export default Header
