import React from 'react';
import {NavLink} from 'react-router-dom';

class Dashboard extends React.Component{
    render(){
        return ( 
            <>    
                <div className="content-wrapper">
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Dashboard</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><NavLink exact="true" to="/">Home</NavLink></li>
                                <li className="breadcrumb-item active">Dashboard</li>
                                </ol>
                            </div>
                            </div>
                        </div>
                    </div>

                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                    <div className="col-12 col-sm-6 col-md-3">
                                        <div className="info-box">
                                        <span className="info-box-icon bg-info elevation-1"><i className="fas fa-cog"></i></span>

                                        <div className="info-box-content">
                                            <span className="info-box-text">CPU Traffic</span>
                                            <span className="info-box-number">
                                            10
                                            <small>%</small>
                                            </span>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-3">
                                        <div className="info-box mb-3">
                                        <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-thumbs-up"></i></span>

                                        <div className="info-box-content">
                                            <span className="info-box-text">Likes</span>
                                            <span className="info-box-number">41,410</span>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="clearfix hidden-md-up"></div>
                                    <div className="col-12 col-sm-6 col-md-3">
                                        <div className="info-box mb-3">
                                        <span className="info-box-icon bg-success elevation-1"><i className="fas fa-shopping-cart"></i></span>

                                        <div className="info-box-content">
                                            <span className="info-box-text">Sales</span>
                                            <span className="info-box-number">760</span>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-3">
                                        <div className="info-box mb-3">
                                        <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-users"></i></span>

                                        <div className="info-box-content">
                                            <span className="info-box-text">New Members</span>
                                            <span className="info-box-number">2,000</span>
                                        </div>
                                        </div>
                                    </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header border-transparent">
                                        <h3 className="card-title">Latest Orders</h3>
                                        <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <button type="button" className="btn btn-tool" data-card-widget="remove">
                                            <i className="fas fa-times"></i>
                                        </button>
                                        </div>
                                    </div>
                                    <div className="card-body p-0">
                                        <div className="table-responsive">
                                        <table className="table table-border table-sm m-0">
                                            <thead>
                                            <tr>
                                            <th>Employee ID</th>
                                            <th>Name</th>
                                            <th>Contact</th>
                                            <th>Designation</th>
                                            <th>Language</th>
                                            <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>001</td>
                                                <td>Sayem</td>
                                                <td>001 001 001</td>
                                                <td>
                                                    Software Developer
                                                </td>
                                                <td>Python, Django</td>
                                                <td>
                                                    <NavLink to="javascript:void(0)" className="btn btn-sm btn-info "> <i className="fas fa-eye"></i></NavLink>
                                                    <NavLink to="javascript:void(0)" className="btn btn-sm btn-warning ml-2 mr-2"> <i className="fas fa-edit"></i> </NavLink>
                                                    <NavLink to="javascript:void(0)" className="btn btn-sm btn-danger "> <i className="fa fa-trash"></i> </NavLink>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>002</td>
                                                <td>Arman</td>
                                                <td>002 001 001</td>
                                                <td>
                                                    Software Developer
                                                </td>
                                                <td>PHP, CodeIgnator</td>
                                                <td>
                                                    <NavLink to="javascript:void(0)" className="btn btn-sm btn-info "> <i className="fas fa-eye"></i></NavLink>
                                                    <NavLink to="javascript:void(0)" className="btn btn-sm btn-warning ml-2 mr-2"> <i className="fas fa-edit"></i> </NavLink>
                                                    <NavLink to="javascript:void(0)" className="btn btn-sm btn-danger "> <i className="fa fa-trash"></i> </NavLink>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>003</td>
                                                <td>Sakib</td>
                                                <td>003 001 001</td>
                                                <td>
                                                    Software Developer
                                                </td>
                                                <td>ASP.net, C++</td>
                                                <td>
                                                    <NavLink to="javascript:void(0)" className="btn btn-sm btn-info "> <i className="fas fa-eye"></i></NavLink>
                                                    <NavLink to="javascript:void(0)" className="btn btn-sm btn-warning ml-2 mr-2"> <i className="fas fa-edit"></i> </NavLink>
                                                    <NavLink to="javascript:void(0)" className="btn btn-sm btn-danger "> <i className="fa fa-trash"></i> </NavLink>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>004</td>
                                                <td>Irfan</td>
                                                <td>004 001 001</td>
                                                <td>
                                                    Software Developer
                                                </td>
                                                <td>PHP, Laravel</td>
                                                <td>
                                                    <NavLink to="javascript:void(0)" className="btn btn-sm btn-info "> <i className="fas fa-eye"></i></NavLink>
                                                    <NavLink to="javascript:void(0)" className="btn btn-sm btn-warning ml-2 mr-2"> <i className="fas fa-edit"></i> </NavLink>
                                                    <NavLink to="javascript:void(0)" className="btn btn-sm btn-danger "> <i className="fa fa-trash"></i> </NavLink>
                                                </td>
                                            </tr>
                                            
                                            
                                            </tbody>
                                        </table>
                                        </div>
                                    </div>
                                    
                                    </div>

                                </div>
                            </div>
                        </div>  
                    </section>
                </div>  
            </>
        )}
}
export default Dashboard;