import Head from 'next/head'
import Footer from '../components/Footer'
import ImageHeader from '../components/ImageHeader'
import Movies from '../components/Movies'
import Navbar from '../components/Navbar'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Cinematic View</title>
        <meta name="description" content="My front end project" />
      </Head>
        <link rel="icon" href="/reel.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet"></link>
      <Navbar />
      <ImageHeader />
      <Movies />
      <Footer />
    </div>
  )
}
