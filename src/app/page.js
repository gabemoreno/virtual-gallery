import Image from 'next/image'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Main from './components/Main'
import CardContainer from './components/CardContainer'

export default function Home() {
  return (
    <div>
      <div className="p-12">
        <Header />
        <Main>
          <section className="prose">
            <CardContainer />
          </section>
        </Main>
      </div>
    </div>
  )
}
