import Head from 'next/head'
import Header from '@components/Header'
import Navbar from '../components/Navbar';

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Summers Ridge CG</title>
            </Head>
            <Navbar/>
            <main>
                <Header title="Welcome to Summers Ridge Community Group Home Page"/>
            </main>
        </div>
    )
}
