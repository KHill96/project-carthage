import React, { ReactNode } from "react"
import { Header } from './'


interface Props {
    children?: ReactNode
    // any props that come into the component
}

const Layout:React.FC<Props>= (props) => {
    return(
        <>
            <Header />        
            {props.children}
        </>
    )
}
export default Layout