
const navHeaderStyle ={
    fontSize: '12px',
    fontWeight: '600'
   
}

const SideNav = () => {
    return( 
        <div className=" col-md-3 col-xl-2 px-sm-4 bg-white" >
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-5 text-white min-vh-100">
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link align-middle px-0">
                        <img src={process.env.PUBLIC_URL+'/assets/SVGS/briefcase.svg' } /> <span className="ms-1 d-none d-sm-inline">Switch Organization</span>
                        </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link inactive align-middle px-0">
                        <img src={process.env.PUBLIC_URL+'/assets/SVGS/home.svg' } /> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <span className="ms-1 d-none d-sm-inline" style={navHeaderStyle}>CUSTOMERS</span> </a>
                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0 inactive"> <img src={process.env.PUBLIC_URL+'/assets/SVGS/user-friends.svg' } /> <span className="d-none d-sm-inline">Users</span>  </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 inactive"> <img src={process.env.PUBLIC_URL+'/assets/SVGS/guarantors.svg' } /> <span className="d-none d-sm-inline">Guarantors</span> </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 inactive"> <img src={process.env.PUBLIC_URL+'/assets/SVGS/loans.svg' } /> <span className="d-none d-sm-inline">Loans</span> </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 inactive"> <img src={process.env.PUBLIC_URL+'/assets/SVGS/decision.svg' } /> <span className="d-none d-sm-inline">Decision Models</span> </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 inactive"> <img src={process.env.PUBLIC_URL+'/assets/SVGS/piggy.svg' } /> <span className="d-none d-sm-inline">Savings</span> </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 inactive"> <img src={process.env.PUBLIC_URL+'/assets/SVGS/loan-request.svg' } /> <span className="d-none d-sm-inline">Loan Request</span> </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 inactive"> <img src={process.env.PUBLIC_URL+'/assets/SVGS/whitelist.svg' } /> <span className="d-none d-sm-inline">Whitelist</span> </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 inactive"> <img src={process.env.PUBLIC_URL+'/assets/SVGS/karma.svg' } /> <span className="d-none d-sm-inline">Karma</span> </a>
                            </li>
                        </ul>
                    </li>
                    <li className="mt-2">
                        <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <span className="ms-1 d-none d-sm-inline" style={navHeaderStyle}>BUSINESSES</span> </a>
                        <ul className="collapse show nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0 inactive"> <img src={process.env.PUBLIC_URL+'/assets/SVGS/briefcase.svg' }/> <span className="d-none d-sm-inline">Organization</span>  </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 inactive"> <img src={process.env.PUBLIC_URL+'/assets/SVGS/loan-request.svg' } /> <span className="d-none d-sm-inline">Loan Products</span> </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 inactive"> <img src={process.env.PUBLIC_URL+'/assets/SVGS/saving-products.svg' } /> <span className="d-none d-sm-inline">Savings Products</span> </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 inactive"> <img src={process.env.PUBLIC_URL+'/assets/SVGS/coin.svg' } /> <span className="d-none d-sm-inline">Fees and Charges</span> </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0  inactive"> <img src={process.env.PUBLIC_URL+'/assets/SVGS/transactions.svg' } /> <span className="d-none d-sm-inline">Transactions</span> </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 inactive"> <img src={process.env.PUBLIC_URL+'/assets/SVGS/services.svg' } /> <span className="d-none d-sm-inline">Services</span> </a>
                            </li>
                            <li>
                        
                                <a href="#" className="nav-link px-0 inactive"> <img src={process.env.PUBLIC_URL+'/assets/SVGS/service-account.svg' } /> <span className="d-none d-sm-inline">Service Account</span> </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 inactive"> <img src={process.env.PUBLIC_URL+'/assets/SVGS/reports.svg' } /> <span className="d-none d-sm-inline">Report</span> </a>
                            </li>
                        </ul>
                    </li>

                    <li className="mt-2">
                        <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <span className="ms-1 d-none d-sm-inline"  style={navHeaderStyle}>SETTINGS</span> </a>
                        <ul className="collapse show nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0 inactive"> <img src={process.env.PUBLIC_URL+'/assets/SVGS/preferences.svg' } /> <span className="d-none d-sm-inline">Preferences</span>  </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 inactive"> <img src={process.env.PUBLIC_URL+'/assets/SVGS/fees.svg' } /> <span className="d-none d-sm-inline">Fees and Pricing</span> </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 inactive"> <img src={process.env.PUBLIC_URL+'/assets/SVGS/audit-logs.svg' } /> <span className="d-none d-sm-inline">Audit Logs</span> </a>
                            </li>
                        
                        </ul>
                    </li>
                
                </ul>
                <hr />
            </div>
        </div>
    )
}

export default SideNav