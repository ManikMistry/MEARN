import { useEffect, useState } from "react";

function RecordList() {
  const [records, setRecords] = useState([]);

  async function getRecords() {
    try {
      const response = await fetch("http://localhost:3000/record");
      const data = await response.json();
      setRecords(data);
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  }

  useEffect(() => {
    getRecords();
  }, []);

  return (
    <>
      <div>RecordList</div>
      <table className="table table-striped" style={{ marginTop: "20px" }}>
        <thead className="thead-dark">
          <tr>
            <th>SL No.</th>
            <th>Name</th>
            <th>From</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{record.name}</td>
              <td>{record.address}</td>
              {/* <td>{record.}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default RecordList;
