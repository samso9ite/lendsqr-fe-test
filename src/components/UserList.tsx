import {useState, useEffect} from 'react'
import Api from '../Api'
import {AxiosResponse} from 'axios'
import Pagination from '../utils/Pagination'
import {Link} from 'react-router-dom'


const UserList = () => {
    const [data, setData] = useState<any>(null)

    useEffect(() => {   
        Api.get('users')
        .then((res: AxiosResponse) => {
            setData(res.data)
            localStorage.setItem('users', JSON.stringify(res.data))
        })
    }, [])

    return(
        <table className="table">
            <thead>
                <tr>
                    <th>ORGANIZATION <img src="./assets/SVGS/filter.svg" className="pad"/> </th>
                    <th>USERNAME <img src="./assets/SVGS/filter.svg" className=""/> </th>
                    <th>EMAIL <img src="./assets/SVGS/filter.svg" className="pad"/></th>
                    <th>PHONE NUMBER <img src="./assets/SVGS/filter.svg" className="pad"/></th>
                    <th>DATE JOINED <img src="./assets/SVGS/filter.svg" className="pad"/></th>
                    <th>STATUS <img src="./assets/SVGS/filter.svg" /></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {data !== null && 
            <Pagination data={data} itemsPerPage={10}>
                {(currentPageData: any[]) =>
                    currentPageData.map((item) => (
                    // Render table rows for each item
                    <tr>
                        <td>{item.organization}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.createdAt}</td>
                        <td><span className="badge rounded-pill success-pill">Warning</span></td>
                        <td><Link to={`/user-details/${item.uuid}`}> <img src="./assets/SVGS/ellipsis.svg" /> </Link></td>
                    </tr> 
                    ))
                }
            </Pagination>
            
            }
            </tbody>
        </table>
    )
}

export default UserList