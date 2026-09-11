function ComplaintForm({ formData, setFormData }) {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveComplaint = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/complaint/save",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      await response.json();

      alert("Complaint saved successfully.");
    } catch (error) {
      console.error(error);
      alert("Failed to save complaint.");
    }
  };

  return (
    <div className="card complaint-card">

      <h2>Customer Complaint Form</h2>

      <div className="section">

        <h3>1. Origin & Customer Details</h3>

        <div className="form-grid">

          <div className="form-group">
            <label>Complaint Number</label>
            <input
              type="text"
              name="complaintNumber"
              value={formData.complaintNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Customer Name</label>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
            />
          </div>

        </div>

      </div>

      <div className="section">

        <h3>2. Product & Batch Identification</h3>

        <div className="form-grid">

          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Batch Number</label>
            <input
              type="text"
              name="batchNumber"
              value={formData.batchNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Manufacturing Date</label>
            <input
              type="date"
              name="manufacturingDate"
              value={formData.manufacturingDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Expiry Date</label>
            <input
              type="date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Quantity</label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>

        </div>

      </div>

      <div className="section">

        <h3>3. Complaint Details</h3>

        <div className="form-grid">

          <div className="form-group">
            <label>Complaint Type</label>
            <input
              type="text"
              name="complaintType"
              value={formData.complaintType}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Complaint Date</label>
            <input
              type="date"
              name="complaintDate"
              value={formData.complaintDate}
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="form-group">
          <label>Complaint Description</label>

          <textarea
            rows="6"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

      </div>

      <div className="section">

        <h3>4. Initial Assessment & Priority</h3>

        <div className="form-grid">

          <div className="form-group">
            <label>Severity</label>

            <select
              name="severity"
              value={formData.severity}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Critical</option>
            </select>

          </div>

          <div className="form-group">
            <label>Priority</label>

            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Urgent</option>
            </select>

          </div>

        </div>

      </div>

      <div className="button-group">

        <button
          type="button"
          className="secondary-btn"
          onClick={() =>
            setFormData({
              complaintNumber: "",
              customerName: "",
              productName: "",
              batchNumber: "",
              manufacturingDate: "",
              expiryDate: "",
              quantity: "",
              complaintType: "",
              complaintDate: "",
              description: "",
              severity: "",
              priority: "",
            })
          }
        >
          Reset
        </button>

        <button
          type="button"
          className="primary-btn"
          onClick={saveComplaint}
        >
          Save Complaint
        </button>

      </div>

    </div>
  );
}

export default ComplaintForm;
