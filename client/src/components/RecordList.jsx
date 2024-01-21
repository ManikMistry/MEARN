import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
// RECORD COMPONENT
function Record(props) {
  return (
    <>
      <tr>
        <td>{props.record.VendorName}</td>
        <td>{props.record.BankAccountNo}</td>
        <td>{props.record.BankName}</td>
        <td>
          <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link>
          <button className="btn btn-link" onClick={()=>{
            props.deleteRecord(props.record._id)
          }}>Delete</button>
        </td>
      </tr>
    </>
  );
}

function RecordList() {
  const [records, setRecords] = useState([]);
  async function getRecords() {
    try {
      const response = await fetch("http://localhost:3002/record");
      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const data = await response.json();
      setRecords(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getRecords();
  }, []);

  async function deleteRecord(id){
    await fetch(`http://localhost:3002/record/${id}`,{
      method:"DELETE"
    })
    const newRecords=records.filter((el)=>el._id!==id);
    setRecords(newRecords);
  }
  const recordList = records.map(record => (
    <Record
      record={record}
      key={record._id}
      deleteRecord={()=>deleteRecord(record._id)}
    />
  ));
  
  return (
    <>
      <div>Vendor List</div>
      <table className="table table-striped" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Vendor name</th>
            <th>Bank A/C No.</th>
            <th>Bank Name</th>
            <th>Action</th>
          </tr>  
        </thead>
        <tbody>{recordList}</tbody>
      </table>
    </>
  );
}

export default RecordList;
