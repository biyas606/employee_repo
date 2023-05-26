import React from 'react'
import NavBar from './NavBar'

const AddEmployee = () => {
    return (
        <div>
            <NavBar />
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><p align="center" style={{ backgroundColor: "lightblue", padding: '10px', fontSize: '24px' }}><b>Employee Dashboard</b></p></div>
            <div className="container">
                    <div className="row g-3" >
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Designation</label>
                            <input type="text" className="form-control" name="designation" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Location </label>
                            <input type="text" className="form-control" name="location" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Salary </label>
                            <input type="text" className="form-control" name="salary" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default AddEmployee
