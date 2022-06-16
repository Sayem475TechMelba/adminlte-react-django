import React from 'react';
import { Route, BrowserRouter, NavLink, Routes} from 'react-router-dom';
import Dashboard from '../Pages/dashboard';
import AddEmployee from '../Pages/addEmployee';
import NotFound from '../Pages/notFound';

class Sidebar extends React.Component{
    render(){
        return ( 
            <>
            <BrowserRouter>  
                <nav className="main-header navbar navbar-expand navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" data-widget="pushmenu" to="#" role="button"><i className="fas fa-bars"></i></NavLink>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <NavLink to="#" className="nav-link">Contact</NavLink>
                        </li>
                    </ul>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" data-widget="navbar-search" to="#" role="button">
                            <i className="fas fa-search"></i>
                            </NavLink>
                            <div className="navbar-search-block">
                            <form className="form-inline">
                                <div className="input-group input-group-sm">
                                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
                                <div className="input-group-append">
                                    <button className="btn btn-navbar" type="submit">
                                    <i className="fas fa-search"></i>
                                    </button>
                                    <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                    <i className="fas fa-times"></i>
                                    </button>
                                </div>
                                </div>
                            </form>
                            </div>
                        </li>
                       
                        <li className="nav-item">
                            <NavLink className="nav-link" data-widget="fullscreen" to="#" role="button">
                            <i className="fas fa-expand-arrows-alt"></i>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" data-widget="control-sidebar" data-slide="true" to="#" role="button">
                            <i className="fas fa-th-large"></i>
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* MAIN SIDEBAR */}
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    <NavLink to="/" className="brand-link">
                    <img src="static/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}}/>
                    <span className="brand-text font-weight-light">Avengers</span>
                    </NavLink>

                    <div className="sidebar">
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="static/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>
                            </div>
                            <div className="info">
                                <NavLink to="#" className="d-block">Alexander Pierce</NavLink>
                            </div>
                        </div>

                        <div className="form-inline">
                            <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                <i className="fas fa-search fa-fw"></i>
                                </button>
                            </div>
                            </div>
                        </div>

                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                <li className="nav-item menu-open">
                                    <a href="#" className="nav-link active">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Dashboard
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <NavLink exact="true" to="/" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Home</p>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact="true" to="/addEmployee" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Add Employee</p>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>

                <Routes>
                    <Route exact path="/" element={<Dashboard/>} />  
                    <Route path="/addEmployee" element={<AddEmployee/>} />  
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </BrowserRouter> 
            </>
        )}
}
export default Sidebar;