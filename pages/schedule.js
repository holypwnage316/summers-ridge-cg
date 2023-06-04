import Head from 'next/head'
import Navbar from '../components/Navbar';

export default function Schedule() {
    return (
        <div>
            <Navbar/>
            <Head>
                <title>Summers Ridge CG Schedule</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <br/>
            <center>
            <h1>General</h1>
            <br/>
                <div className="center-screen">
                    <p>
                        The Summers Ridge Community Group will soft launch for the months of June & July 2023 with the hopes of hard launching in August 2023.
                        <br/>
                        <br/>
                        The calendar below shows our current soft launch schedule of alternating between the Whitakers meeting and the Coxes meeting.
                        <br/>
                        <br/>
                        Discipleship circles will merge together starting in July 2023.
                    </p>
                </div>
                <br/>
                <iframe src="https://calendar.google.com/calendar/embed?src=2cae81169a257671f05380ebb9d9edf83567e1e03564cdd308478c444d46f04d%40group.calendar.google.com&ctz=America%2FNew_York"
                    style={
                        {
                            width: 1000,
                            height: 800
                        }
                }></iframe>
            </center>
        </div>
    )
}
