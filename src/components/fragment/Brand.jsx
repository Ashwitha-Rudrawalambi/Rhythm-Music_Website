import React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/Brand.scss";
import LogoImage from "../../logo.png"; // Import the LogoImage
import Logo from "../assets/img/headphonesLogo.svg";

class Brand extends React.Component {
  render() {
    return (
    <div className={"brand"}>
      <Link to={"/home"}>
        {/* Replace the existing h1 with the LogoImage */}
        <img src={LogoImage} width={"80px"} height={"80px"} alt="Logo" />
      </Link>
    </div>
    );
  }
}

export default Brand;


// import React from "react";
// import {Link} from "react-router-dom";
// import "../assets/scss/Brand.scss";
// import LogoImage from '../../Homepage1.png'; 
// import Logo from "../assets/img/headphonesLogo.svg"

// class Brand extends React.Component {
//     render() {
//         return (
//             <div  className={"brand"}>
//                 <Link to={"/home"}>
//                     <h1>
//                         V
//                         <img src={Logo} width={"24px"} alt=""/>
//                         sic
//                     </h1>
//                 </Link>
//             </div>
//         );
//     }
// }

// export default Brand;