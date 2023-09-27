import DashboardStat from "../components/DashboardStat"
import UserList from "../components/UserList"
import MainLayout from "../components/layout/MainLayout"
import PaginationControl from "../utils/PaginationControl"
import { useSelector } from "react-redux"
import {useEffect, useState} from 'react'
import { Link, NavLink } from "react-router-dom"

const Dashboard = () => {
const [controls, setControls] = useState<any>({})

// This get the pagination controls stored in the localstorage
useEffect(() => {
    const fetchStoreData = setTimeout(() => {
        let data:any = localStorage.getItem('paginationControls')
        const storedData:any = JSON.parse(data)
        setControls(storedData)
    }, 3000); 
    
},[])


    return (
        <MainLayout>
            <DashboardStat />
            <section className="mt-5">
                <div className="row">
                    <div className="col-lg-10">
                        <div className="card" style={{width: '92%'}}>
                            <div className="card-body">
                                <UserList />
                            </div>
                        </div>
                       {/* {controls && <PaginationControl
                            currentPage={controls.currentPage}
                            totalPages={controls.totalPages}
                        />
                        } */}
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default Dashboard