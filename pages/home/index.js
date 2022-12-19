import 'bulma/css/bulma.css';
import './home.module.css'
import Nav from '../../src/components/Navbar';

const Home = () => {
    return (
        <div className="hero is-fullheight">
            <Nav />
        </div>
    )
}

Home.getLayout = page => getPageTitleLayout(page, 'Home');

export default Home;