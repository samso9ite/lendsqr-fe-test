import SideNav from "../SideNav"
import TopHeader from "../TopHeader"
import {componentType} from "../../types/BasicTypes"

const MainLayout = (props:componentType) => {
    return(
        <>
            <TopHeader />
            <div className="row flex-nowrap">
            <SideNav />
            <div className="mt-5"  style={{paddingLeft: '4rem'}}>
                {props.children}
            </div>
            </div>
        </>
    )
}

export default MainLayout