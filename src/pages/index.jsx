import NavBar from '@/components/navbar'
import HomeScreen from './home'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <div className="absolute w-full bg-[#222]">
        <header className='fixed top-0 left-0 w-full z-10 bg-white shadow-md'>
          <NavBar />
        </header>
        <div className=" mt-40">
          <HomeScreen />

        </div>
        <Footer />
      </div>
    </>

  )
}
