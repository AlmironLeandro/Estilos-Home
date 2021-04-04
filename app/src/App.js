import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';

// import ItemListContainer from './components/ItemListContainer';
// import NavBar from './components/NavBar';

const App = () =>
(
  <div>
  <NavBar></NavBar>
  <ItemListContainer greeting="Saludos chicos de coderhouse"></ItemListContainer>
  </div>
)










export default App;




//<------------USO DE LIBRERIA MATERIAL UI------------>
// import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';
//import Breadcrumbs from '@material-ui/core/Breadcrumbs';
//import React, { Fragment } from "react";


// function handleClick(event) {
//     event.preventDefault();
//     console.info('You clicked a breadcrumb.');
//   }
  
  
// const App =() => (
//     <div>
//         <Fragment>
//         <Breadcrumbs aria-label="breadcrumb">
//         <Link color="inherit" href="/" onClick={handleClick}>
//         Material-UI
//         </Link>
//         <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
//             Core
//          </Link>
//     <Link
//     color="textPrimary"
//     href="/components/breadcrumbs/"
//     onClick={handleClick}
//     aria-current="page"
//   >
//     Breadcrumb
//     </Link>
//     </Breadcrumbs>
//     </Fragment>
    
//     </div>
//     );




