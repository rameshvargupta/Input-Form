
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    refress()

  }, []);


  if (!loading) {
    return <div style={{ color: "red", textAlign: "center" }}><h1>Loading...</h1></div>;
  }




  function refress() {
    axios.get("https://648b509417f1536d65eac987.mockapi.io/selector")
      .then(resp => {
        setData(resp.data);
        setLoading(true);
      })
      .catch(err => console.log(err));
  }

  const handelDelete = (id) => {
    axios.delete("https://648b509417f1536d65eac987.mockapi.io/selector/" + id)
      .then(resp => {
        document.getElementById("alertBox2").style.display="block"
        setTimeout(() => {
          document.getElementById("alertBox2").style.display="none"
        }, 3000);
        refress()
      })
      .catch(err => console.log(err));
  }



  return (
    <div>
       <div style={{textAlign:"center"}} class="alert alert-danger" id='alertBox2' role="alert">
        <b>  Your data is Deleted Successfully</b>
      </div>
   
    <div className='container mt-5'>
     
      <h1 style={{ color: "red", textAlign: 'center' }}>All Data</h1>
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
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item["0"].first}</td>
              <td>{item["0"].last}</td>
              <td>{item["0"].email}</td>
              <td>{item["0"].age}</td>
              <td>{item["0"].address}</td>
              <td>{item["0"].contact}</td>
              <td>{item["0"].district}</td>
              <td>{item["0"].state}</td>
              <td>{item["0"].pin}</td>
              <td><button className='btn btn-danger' onClick={() => handelDelete(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default AllData;

