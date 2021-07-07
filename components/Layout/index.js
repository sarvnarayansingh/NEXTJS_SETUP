import React, { Fragment } from 'react'

const Layout = (props) => {
    return (
        <Fragment>
            <div>
            <h4>header</h4>
            </div>
            {props.children}
            <div>
            <h4>Footer</h4>
            </div>
        </Fragment>
    )
}

export default Layout
