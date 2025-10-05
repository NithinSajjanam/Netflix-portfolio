import React from 'react';
import './WorkPermit.css';

const WorkPermit: React.FC = () => {
  // ✅ Your personal work permit data (static)
  const workPermitData = {
    visaStatus: "Indian Passport – Open Work Permit",
    country: "India",
    issuedDate: "2024-01-15",
    expiryDate: "2034-01-15",
    sponsor: "Not Required (Independent)",
    conditions: "Eligible to work full-time in India without restrictions",
    additionalInfo: "This permit allows me to work with any employer across India in both IT and non-IT sectors."
  };

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">🛂 Work Permit (India)</h2>

        <p className="work-permit-summary">
          I currently hold an <strong>{workPermitData.visaStatus}</strong> in{" "}
          <strong>{workPermitData.country}</strong>.  
          Issued on <strong>{new Date(workPermitData.issuedDate).toLocaleDateString("en-IN")}</strong> 📅  
          and valid until <strong>{new Date(workPermitData.expiryDate).toLocaleDateString("en-IN")}</strong> ⏳.  
        </p>

        <p className="work-permit-detail">
          👔 <strong>Sponsor/Employer:</strong> {workPermitData.sponsor}
        </p>

        <p className="work-permit-detail">
          ⚖️ <strong>Conditions:</strong> {workPermitData.conditions}
        </p>

        <p className="additional-info">
          ℹ️ {workPermitData.additionalInfo}
        </p>
      </div>
    </div>
  );
};

export default WorkPermit;
