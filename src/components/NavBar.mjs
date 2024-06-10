export {NavBar};
// export default NavBar1;

// function NavBar1(params) {
//     return(
//         <>
//           <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             {params.name}
//           </a>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">
//                   About
//                 </a>
//               </li>
//               <ul className="dropdown-menu">
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Action
//                   </a>
//                 </li>
//               </ul>
//             </ul>
//             <form className="d-flex" role="search">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button className="btn btn-outline-success" type="submit">
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//       </nav>
//         </>
//     )
// }
function NavBar (params) {
    return(
        <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {params.TitleName}
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {params.HomeAtt}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
              </ul>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
        </>
    )
}