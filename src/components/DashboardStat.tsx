const DashboardStat = () => {
    return (
        <section>
            <h4>Users</h4>
            <div className="row mt-4" >
                <div className="col-lg-2">
                    <div className="card">
                        <div className="card-body">
                            <img src="./assets/SVGS/card1_img.svg" />
                            <p className="mt-2" style={{fontWeight: 500}}>USERS</p>
                            <h3 className="mt-2">2,453</h3>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-2" style={{marginLeft: '0.5rem'}}>
                    <div className="card">
                        <div className="card-body">
                            <img src="./assets/SVGS/card2_img.svg" />
                            <p className="mt-2" style={{fontWeight: '500'}}>ACTIVE USERS</p>
                            <h3 className="mt-2">2,453</h3>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-2" style={{marginLeft: '0.5rem'}}>
                    <div className="card">
                        <div className="card-body">
                            <img src="./assets/SVGS/card3_img.svg" />
                            <p className="mt-2" style={{fontWeight: '500'}}>USERS WITH LOANS</p>
                            <h3 className="mt-2">2,453</h3>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-2" style={{marginLeft: '0.5rem'}}>
                    <div className="card">
                        <div className="card-body">
                            <img src="./assets/SVGS/card4_img.svg" />
                            <p className="mt-2" style={{fontWeight: '500'}}>USERS WITH SAVINGS</p>
                            <h3 className="mt-2">2,453</h3>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default DashboardStat