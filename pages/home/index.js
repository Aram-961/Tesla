import 'bulma/css/bulma.css';
import './home.module.css'

import Nav from '../../src/components/Navbar';
import Footer from '../../src/components/footer';

const Home = () => {
    return (
        <div className="hero is-fullheight">
        {/* <img src="https://media.discordapp.net/attachments/1040205791686316072/1054810312420900944/teslaroadster.jpg?width=759&height=427" alt="" /> */}
            <Nav />
            <div className='hero-body'>
                <div className='is-overlay has-text-centered single-spaced' style={{ top: '82px' }}>
                    <h1 className='subtitle has-text-weight-light is-4 has-text-black'>Tesla</h1>
                    <h2 className='title is-1 has-text-black'>Roadster</h2>
                </div>
            </div>
            <Footer />
        </div>
    )
}

Home.getLayout = page => getPageTitleLayout(page, 'Home');

export default Home;