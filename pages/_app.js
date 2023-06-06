import 'bootstrap/dist/css/bootstrap.css';
import '@styles/globals.css'

function Application({Component, pageProps}) {
    useEffect(() => {
        import ("bootstrap/dist/js/bootstrap");
    }, []);

    return <Component {...pageProps} />
}

export default Application
