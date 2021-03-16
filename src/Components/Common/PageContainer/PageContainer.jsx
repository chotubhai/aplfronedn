import React from 'react'
import './PageContainer.css'
import Sidebar from '../../Sidebar/Sidebar'
import Header from '../../Header/Header'
function PageContainer(props){

    return(
        <div className={`row page-container ${props.className}`}>
            <div className="col-lg-1 col-md-2">
                <Sidebar />
            </div>
            <div className="col-lg-11">
                <Header pageHeader={props.pageHeader}/>
                {props.children}
            </div>
        </div>
    )
}
export default PageContainer