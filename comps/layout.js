import Header from '../comps/header'

const Layout = ({children}) => {
    return ( 
        <div className='content'>
            <Header />
                {children}
        </div>
     );
}
 
export default Layout;