import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
    const countries=[
        "UAE","Argentina","Austria","Australia","Belgium","Bulgaria",
        "Brazil","Canada","Switzerland","China","Colombia","Cuba","Czechia","Germany",
        "Egypt","France","United-Kingdom","Greece","Honkong","Hungary","Indonesia","Ireland",
        "Israel","India","Italy","Japan","South-Korea","Lithuania","Latvia","Morocco","Mexico",
        "Malaysia","Nigeria","Netherlands","Norway","New-Zealand","Poland",
        "Portugal","Romania","Serbia","Russia","Saudi-Arabia","Sweden","Singapore",
        "Slovenia","Slovakia","Thailand","Turkiye","Taiwane","Ukraine","US","Venezuela","South-Africa"            
    ]

    const pathArray = window.location.pathname.split('/');
    const countryName=pathArray[1];
    var flag=countries.includes(countryName);

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={(countryName.length===0 || flag===false ? "" : "/" + countryName) + "/Entertainment"} className="nav-link active">Entertainment</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={(countryName.length===0 || flag===false ? "" : "/" + countryName) + "/General"} className="nav-link active">General</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={(countryName.length===0 || flag===false ? "" : "/" + countryName) + "/Health"} className="nav-link active">Health</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={(countryName.length===0 || flag===false ? "" : "/" + countryName) + "/Science"} className="nav-link active">Science</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={(countryName.length===0 || flag===false ? "" : "/" + countryName) + "/Sports"} className="nav-link active">Sports</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={(countryName.length===0 || flag===false ? "" : "/" + countryName) + "/Technology"} className="nav-link active">Technology</Link>
                    </li>

                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle active right" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Countries
                        </Link>
                        <ul className="dropdown-menu scrollable-menu" aria-labelledby="dropdownMenu1">
                            { countries.map((element,idx)=>{
                               return <li key={idx}><Link className="dropdown-item" to={`/${element}`} >{element}</Link></li>  
                            })}
                        </ul>
                    </li>
                </ul>
                
                </div>
                
            </div>
        </nav>
      </div>
    )
}

export default Navbar
