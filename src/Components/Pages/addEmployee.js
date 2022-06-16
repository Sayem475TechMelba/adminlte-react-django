import React from 'react';
import { NavLink } from 'react-router-dom';

class AddEmployee extends React.Component{
    render(){
        return ( 
            <>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Employee Form</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                            <li className="breadcrumb-item active">Employee Form</li>
                            </ol>
                        </div>
                        </div>
                    </div>
                </section> 

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-info">
                                <div className="card-header">
                                    <h3 className="card-title">Add Employee Details</h3>
                                </div>
                                <form>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" className="form-control" id="name" placeholder="Enter Name"/>
                                        </div>
                                        <div className="form-group">
                                            <label >Contact</label>
                                            <input type="text" className="form-control" id="contact" placeholder="Contact Number"/>
                                        </div>

                                        <div className="form-group">
                                            <label >Upload Profile Picture</label>
                                            <input type="file" className="form-control-file" id="propic"/>
                                        </div>

                                        <div className="form-group">
                                            <label >Date</label>
                                            <input type="date" className="form-control" id="date"/>
                                        </div>

                                        <div className="form-group">
                                            <label >Designation</label>
                                            <select className="custom-select form-control-border" id="designation">
                                                <option>Software Developer</option>
                                                <option>Merchandiser</option>
                                                <option>Graphics Designer</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label >Language</label>
                                            <div className="form-group">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox"/>
                                                    <label className="form-check-label">Python</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="form-check-label">PHP</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="form-check-label">ASP.net</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="form-check-label">Laravel Framework</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="form-check-label">Django Framework</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label >Prefered Skill</label>
                                            <div className="form-group">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" id='frontend' name="radio"/>
                                                    <label className="form-check-label">Front-end Development</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" id='backend' name="radio" />
                                                    <label className="form-check-label">Backend Development</label>
                                                </div>
                                            
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label >Remarks</label>
                                            <textarea type="text" className="form-control" id="remarks"/>
                                        </div>
                                    </div>

                                    <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                                </div>
                            </div>
                            <div className="col-md-6">

                            </div>
                        </div>
                    </div>
                </section>
            </div>
                         
            
            </>
        )}
}
export default AddEmployee;