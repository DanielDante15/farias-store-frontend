import NavBar from '@/components/navbar'
import HomeScreen from './home'

export default function Home() {
  return (
    <>
      <div className="absolute w-full">
        <header className='fixed top-0 left-0 w-full z-10 bg-white shadow-md'>
          <NavBar />
        </header>
        <div className="relative h-[100vh] mt-16"> {/* mt-16 para criar espaço para a NavBar */}
          <HomeScreen />
        </div>
      </div>
    </>

  )
}
