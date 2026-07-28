import { useState } from "react";
import "./index.css";

import ComplaintForm from "./components/ComplaintForm";
import AIAssistant from "./components/AIAssistant";

function App() {
  const [formData, setFormData] = useState({
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
  });

  const [aiStatus, setAiStatus] = useState("Waiting for complaint...");
  const [uploadedText, setUploadedText] = useState("");

  return (
    <div className="app">

      <header className="header">

        <div>
          <h1>Log Customer Complaint</h1>
          <p className="subtitle">
            AI Powered Customer Complaint Intake
          </p>
        </div>

        <div className="status-badge">
          Pending Triage
        </div>

      </header>

      <div className="container">

        <ComplaintForm
          formData={formData}
          setFormData={setFormData}
        />

        <AIAssistant
          formData={formData}
          setFormData={setFormData}
          aiStatus={aiStatus}
          setAiStatus={setAiStatus}
          uploadedText={uploadedText}
          setUploadedText={setUploadedText}
        />

      </div>

    </div>
  );
}

export default App;