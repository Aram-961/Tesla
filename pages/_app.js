import '../styles/globals.css'
import 'bulma/css/bulma.css';
import '/styles/helperFlex.css'
import '@fortawesome/fontawesome-free'
import '/styles/debugger.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
