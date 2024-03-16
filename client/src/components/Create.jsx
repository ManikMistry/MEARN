import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [form, setForm] = useState({
    VendorName: "",
    BankAccountNo: "",
    BankName: "",
    AddressLine1: "",
    AddressLine2: "",
    City: "",
    Country: "",
    ZipCode: "",
  });
  const navigate = useNavigate();
  console.log(form);
  const updateForm = (value) => {
    return setForm((prev) => ({ ...prev, ...value }));
  };

  async function onSubmit(e) {
    e.preventDefault();

    const newRecord = { ...form };
    await fetch("http://localhost:3002/record", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(newRecord),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({
      VendorName: "",
      BankAccountNo: "",
      BankName: "",
      AddressLine1: "",
      AddressLine2: "",
      City: "",
      Country: "",
      ZipCode: "",
    });
    navigate("/");
  }
  return (
    <div>
      <h3>Create a New Vendor</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group col-md-6">
          <label htmlFor="vendor_name">Vendor Name</label>
          <input
            type="text"
            className="form-control mt-1"
            id="VendorName"
            value={form.VendorName}
            onChange={(e) => updateForm({ VendorName: e.target.value })}
          />
        </div>
        <div className="from-group col-md-6">
          <label htmlFor="account_no" className="mt-2">
            Bank A/C no.
          </label>
          <input
            type="number"
            className="form-control mt-1"
            id="BankAccountNo"
            value={form.BankAccountNo}
            onChange={(e) => updateForm({ BankAccountNo: e.target.value })}
          />
        </div>

        <div className="from-group col-md-6">
          <label htmlFor="bank_name" className="mt-2">
            Bank Name
          </label>
          <input
            type="text"
            className="form-control mt-1"
            id="BankName"
            value={form.BankName}
            onChange={(e) => updateForm({ BankName: e.target.value })}
          />
        </div>

        <div className="from-group col-md-6">
          <label htmlFor="address_line_1" className="mt-2">
            Address Line 1
          </label>
          <input
            type="text"
            className="form-control mt-1"
            id="AddressLine1"
            value={form.AddressLine1}
            onChange={(e) => updateForm({ AddressLine1: e.target.value })}
          />
        </div>

        <div className="from-group col-md-6">
          <label htmlFor="address_line_2" className="mt-2">
            Address Line 2
          </label>
          <input
            type="text"
            className="form-control mt-1"
            id="AddressLine2"
            value={form.AddressLine2}
            onChange={(e) => updateForm({ AddressLine2: e.target.value })}
          />
        </div>

        <div className="from-group col-md-6">
          <label htmlFor="City" className="mt-2">
            City
          </label>
          <input
            type="text"
            className="form-control mt-1"
            id="City"
            value={form.City}
            onChange={(e) => updateForm({ City: e.target.value })}
          />
        </div>

        <div className="from-group col-md-6">
          <label htmlFor="country" className="mt-2">
            Country
          </label>
          <input
            type="text"
            className="form-control mt-1"
            id="Country"
            value={form.Country}
            onChange={(e) => updateForm({ Country: e.target.value })}
          />
        </div>

        <div className="from-group col-md-6">
          <label htmlFor="zip_code" className="mt-2">
            Zip Code
          </label>
          <input
            type="number"
            className="form-control mt-1"
            id="ZipCode"
            value={form.ZipCode}
            onChange={(e) => updateForm({ ZipCode: e.target.value })}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create a record"
            className="btn btn-primary mt-4"
          />
        </div>
      </form>
    </div>
  );
}

export default Create;
