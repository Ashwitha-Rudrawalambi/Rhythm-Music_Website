import React from "react";
import HeadPhone from '../assets/img/headphones.svg';
import LogoImage from '../../Homepage1.png'; // Provide the correct relative path to the image
import './css/Login.scss';
import {Link} from "react-router-dom";

class Login extends React.Component{
    render() {
        return(
            <section id="main">
                <div className="main-row">
                    <div className="main-row-img">
                        <img className="logo-img" src={LogoImage} alt="Logo" />
                    </div>
                    <div className="main-row-text">
                        <h1>Unlock the melody within</h1>
                        {/* <p>Music for you</p> */}
                        <Link to={"/home"} className="btn">
                            Start Listening
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default Login;


// import React from "react";
// import HeadPhone from '../assets/img/headphones.svg';
// import './css/Login.scss';
// import {Link} from "react-router-dom";

// class Login extends React.Component{
//     render() {
//         return(
//             <section id="main">
//                     <div className="nav-item">
//                         <a className="navbar-brand" href="/">Rhythm</a>
//                     </div>
//                     <div className="main-row">
//                         <div className="main-row-img">
//                             <img className="head-phone-img" src={HeadPhone} alt=""/>
//                         </div>
//                         <div className="main-row-text">
//                             <h1>Rhythm</h1>
//                             <p>Music for you</p>
//                             <Link to={"/home"} className="btn">
//                                 Start Listening
//                             </Link>
//                         </div>
//                     </div>
//             </section>
//         );
//     }
// }

// export default Login;