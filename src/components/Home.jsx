import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Home = () => {

 
    const [data, setdata] = useState(
        []
    )

    const fetchdata = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            (response) => {
                setdata(response.data)
            }
        )
    }

    React.useEffect(
        () => {
            fetchdata()
        }, []                 //array used only for calling once
    )
  return (
    <div>
      <NavBar/>
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><p align="center" style={{ backgroundColor: "lightblue", padding: '10px', fontSize: '24px' }}><b>Employee Dashboard</b></p></div>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">User ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(
                            (value, index) => {
                                return <tr>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                </tr>
                            }
                        )}

                    </tbody>
                </table>

            </div>
    </div>
  )
}

export default Home
