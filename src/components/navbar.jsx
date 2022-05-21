import React, { Component } from 'react';

// Stateless Functional Component

// using object destructuring
const NavBar = ({ totalItems, uniqueItems }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        Total-Items : {" "}
        <span className="badge badge-pill badge-secondary bg-dark">
          {totalItems}
        </span>
      </a>
      <a className="navbar-brand">
        Unique-Items : {" "}
        <span className="badge badge-pill badge-secondary bg-dark">
          {uniqueItems}
        </span>
      </a>
    </nav>
  );
}
// const NavBar = (props) => {
//   return (
//     <nav className="navbar navbar-light bg-light">
//       <a className="navbar-brand">
//         NavBar{" "}
//         <span className="badge badge-pill badge-secondary">
//           {props.totalItems}
//         </span>
//       </a>
//     </nav>
//   );
// }

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand">
//           NavBar{" "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalItems}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }
export default NavBar;
