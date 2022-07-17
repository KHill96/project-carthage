import Header from '../comps/header'
import Footer from '../comps/footer'

const Layout = ({children}) => {
    return ( 
        <div className='content'>
            <Header />
                {children}
            <Footer/>
        </div>
     );
}
 
export default Layout;