import { SuitHeart, Person, Bag } from 'react-bootstrap-icons'


export default function Header(){

    const paramValue = window.location.pathname;
    // console.log(paramValue);

    return(
        <>
            <section id="header" className="pb-3">
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    {/* Togeller */}
                    <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navMenu"
                    >
                    <span className="navbar-toggler-icon" />
                    </button>
                    {/* Brand  */}
                    <a href="/" className="navbar-brand">
                        <img src={require("../images/Logo-Header.png")} width="100%" alt="Company Logo" />
                    </a>
                    {/* Profile  */}
                    <div className="profile">
                    <a href='/account' className={paramValue == '/account' ? 'btn position-relative active' : 'btn position-relative'} id='user-account'>
                        <Person/>
                        <span className="account"> Account</span>
                    </a>
                    <a href='/favourites' className={paramValue == '/favourites' ? 'btn position-relative active' : 'btn position-relative'} id='favourites'>
                        <SuitHeart />
                        {/* <span className="position-absolute start-60 translate-items badge bg-color bag-user">2</span> */}
                        <span className="favourites"> Favourites</span>
                    </a>
                    <a href='/bag' className={paramValue == '/bag' ? 'btn position-relative active' : 'btn position-relative'} id='bag'>
                        <Bag />
                        <span className="position-absolute start-60 translate-items badge bg-color bag-user">2</span>
                        <span className="bag ps-md-2"> Bag</span>
                    </a>
                    </div>
                </div>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    {/* Menu  */}
                    <div className="collapse navbar-collapse" id="navMenu">
                    <ul className="navbar-nav">
                        {/* mx-auto text-center */}
                        <li className="nav-item">
                        <a href="/" className={paramValue === '/' ? 'nav-link active' : 'nav-link'}>Home</a>
                        </li>
                        <li className="nav-item">
                        <a href="/about" className={paramValue === '/about' ? 'nav-link active' : 'nav-link'}>About</a>
                        </li>
                        <li className="nav-item">
                        <a href="/shop" className={paramValue === '/shop' ? 'nav-link active' : 'nav-link'}>Shop</a>
                        </li>
                        <li className="nav-item">
                        <a href="/contact" className={paramValue === '/contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
                        </li>
                    </ul>
                    </div>
                    {/* Search Bar */}
                    <div className="serch-bar ">
                    <input
                        className="search icon"
                        type="text"
                        placeholder="Search for products"
                    />
                    </div>
                </div>
                </nav>
            </section>
        </>
    )
}









// import * as React from "react";
  
// // importing material UI components
// import AppBar from "@mui/material/AppBar";
// // import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// // import MenuIcon from "@mui/icons-material/Menu";
// import { GiHamburgerMenu } from 'react-icons/gi'
  
// export default function Header() {
//   return (
//       <AppBar position="static">
//         <Toolbar>
//           {/*Inside the IconButton, we 
//            can render various icons*/}
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             {/*This is a simple Menu 
//              Icon wrapped in Icon */}
//             {/* <MenuIcon /> */}
//             <GiHamburgerMenu />
//           </IconButton>
//           {/* The Typography component applies 
//            default font weights and sizes */}
  
//           <Typography variant="h6" 
//             component="div" sx={{ flexGrow: 1 }}>
//             GeeksforGeeks Header
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//   );
// }






