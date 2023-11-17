import React from 'react'
import Layout from './layout'

const DrawerComponent = ({children}) => {
    return (
        <Layout>
            {children}
        </Layout>
    )
}

export default DrawerComponent