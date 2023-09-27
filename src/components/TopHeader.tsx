const TopHeader = () => {
    return (
        <header className="bg-white">
        <nav className="navbar navbar-expand-lg" style={{paddingLeft: '1.3rem'}}>
            <div className="container-fluid">
              <a className="navbar-brand" href="javascript:void(0)"><img src={process.env.PUBLIC_URL+'/assets/SVGS/logo.svg'} /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="mynavbar" style={{paddingLeft: '8rem'}}>
                <div className="input-group" style={{width: '35%'}}>
                    <input type="text" className="form-control" placeholder="Search for anything" style={{borderTopLeftRadius: '13px', borderBottomLeftRadius: '13px'}} />
                    <button className="btn" style={{backgroundColor: '#39CDCC', color: 'white', borderTopRightRadius: '13px', borderBottomRightRadius:'13px'}}  type="submit"><i className="fa fa-search" style={{margin:'auto 10px auto 10px'}}></i></button>
                </div>
                <ul className="navbar-nav ms-auto" style={{paddingRight: '5%'}} >
                  <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0)">Docs</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0)"><img src={process.env.PUBLIC_URL+'/assets/bell.png'} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0)"><img src={process.env.PUBLIC_URL+'/assets/SVGS/avatar.svg' } /></a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link nav" href="javascript:void(0)">Ayodeji  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                      </button>
                    </a>
                   </li>
                </ul>
               
              </div>
            </div>
          </nav>
        </header>
    )
}

export default TopHeader