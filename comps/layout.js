import Header from '../comps/header'
import Footer from './footer';

const Layout = ({children}) => {
    return ( 
        <div className='content'>
            <Header />
                {children}
        </div>
     );
}
 
export default Layout;