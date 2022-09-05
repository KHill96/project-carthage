import Header from '../comps/header'
import Head from 'next/head'
import carthage from '../public/favicon.ico'

const Layout = ({children}) => {
    return ( 
        <div className='content'>
            <Header />
                {children}
        </div>
     );
}
 
export default Layout;