import React, { useContext } from 'react'
import { multiData } from '../UseContext'
import axios from 'axios'

const DisplayData = () => {
    const { finaldata } = useContext(multiData)

    
    return (
        <div className='container'>
            
            <table className="table table-bordered">
                <thead>
                    <tr>

                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Contact</th>
                        <th>District</th>
                        <th>State</th>
                        <th>Postal Code</th>
                    </tr>
                </thead>
                <tbody>
                    {finaldata.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.first}</td>
                                <td>{item.last}</td>
                                <td>{item.email}</td>
                                <td>{item.age}</td>
                                <td>{item.address}</td>
                                <td>{item.contact}</td>
                                <td>{item.district}</td>
                                <td>{item.state}</td>
                                <td>{item.pin}</td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default DisplayData
