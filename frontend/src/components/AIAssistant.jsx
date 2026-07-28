import { useState } from "react";
import api from "../services/api";

function AIAssistant({
  formData,
  setFormData,
  aiStatus,
  setAiStatus,
  uploadedText,
  setUploadedText,
}) {
  const [selectedFile, setSelectedFile] = useState(null);

  const uploadFile = async () => {
    if (!selectedFile) return;

    const data = new FormData();
    data.append("file", selectedFile);

    try {
      setAiStatus("Uploading complaint...");

      const uploadResponse = await api.post(
        "/complaint/upload",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setUploadedText(uploadResponse.data.text);

      setAiStatus("Running AI analysis...");

      const analyseResponse = await api.post(
        "/complaint/analyze",
        {
          complaint_text: uploadResponse.data.text,
        }
      );

      setFormData(analyseResponse.data);

      setAiStatus("Complaint analysed successfully.");
    } catch (error) {
      console.error(error);
      setAiStatus("Failed to process complaint.");
    }
  };

  return (
    <div className="card ai-card">

      <h2>AI Complaint Intake Assistant</h2>

      <div className="upload-box">

        <input
          type="file"
          accept=".pdf,.txt,.doc,.docx"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />

        <button
          className="primary-btn upload-btn"
          onClick={uploadFile}
        >
          Analyse Complaint
        </button>

      </div>

      <div className="status-box">

        <h3>Status</h3>

        <p>{aiStatus}</p>

      </div>

      <div className="assistant-box">

        <h3>Extracted Complaint</h3>

        <textarea
          value={uploadedText}
          readOnly
          rows={14}
        />

      </div>

    </div>
  );
}

export default AIAssistant;