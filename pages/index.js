import Container from '../components/container'
import Image from 'next/image'

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">Hello, Fetudy's Blog.</h1>
        </div>
      </Container>

      <div className="container max-w-4xl m-auto px-4 mt-20">
        <Image
          src="/images/fetudyLogo.png"
          alt="FETUDY LOGO"
          width={1500 / 2}
          height={1500 / 2}
        />
      </div>
    </>
  )
}

export default HomePage
