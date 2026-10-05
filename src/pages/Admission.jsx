import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../index.css";

const Admission = () => {
  const formRef = useRef();
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: "", message: "" });

    emailjs
      .sendForm(
        "service_3nzm19d",     // ✅ Your Service ID
        "template_utsgk9v",    // ✅ Your Template ID
        formRef.current,
        "uo4tkay-QnOQmXvEW"    // ✅ Your Public Key
      )
      .then(() => {
        setStatus({
          type: "success",
          message: "✅ Application submitted successfully! We will contact you shortly.",
        });
        formRef.current.reset();
        setSending(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus({
          type: "error",
          message: "❌ Failed to send. Please check your connection and try again.",
        });
        setSending(false);
      });
  };

  return (
    <div className="admission-page">
      <div className="admission-container">
       <div className="admission-header">
  <img
    src="/images/logo.webp"
    alt="Africa Elite Schools"
    className="admission-logo"
  />
  <h1>AFRICA ELITE SCHOOLS</h1>
  <p className="tagline">"Excellence Our Priority"</p>
  <p>+254 (0)741 666 966 | +254 (0)701 666 966 | +254 (0)736 666 966</p>
  <p>admin@africaelite.org</p>
</div>
        <h2 className="admission-title">SCHOOL ADMISSION FORM</h2>

        <form ref={formRef} onSubmit={handleSubmit}>
          {/* CHILD'S DETAILS */}
          <h3 className="section-heading">Child's Details</h3>

          <div className="row">
            <div className="field">
              <label>Date of Admission</label>
              <input type="date" name="date_of_admission" required />
            </div>
            <div className="field">
              <label>Name of Child</label>
              <input type="text" name="child_name" required />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>Sex</label>
              <select name="sex" required>
                <option value="">-- Select --</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="field">
              <label>Date of Birth</label>
              <input type="date" name="dob" required />
            </div>
            <div className="field">
              <label>Place of Birth</label>
              <input type="text" name="place_of_birth" />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>Nationality</label>
              <input type="text" name="nationality" />
            </div>
            <div className="field">
              <label>Previous School</label>
              <input type="text" name="previous_school" />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>NEMIS No.</label>
              <input type="text" name="nemis_no" />
            </div>
            <div className="field">
              <label>Assessment No.</label>
              <input type="text" name="assessment_no" />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>Grade / Class</label>
              <input type="text" name="grade_class" />
            </div>
            <div className="field">
              <label>Certificate No.</label>
              <input type="text" name="certificate_no" />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>Any Existing Condition</label>
              <input type="text" name="existing_condition" />
            </div>
            <div className="field">
              <label>Allergies</label>
              <input type="text" name="allergies" />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>Any Personal Doctor</label>
              <input type="text" name="personal_doctor" />
            </div>
            <div className="field">
              <label>Any Insurance Cover</label>
              <input type="text" name="insurance_cover" />
            </div>
          </div>

          {/* FATHER */}
          <h3 className="section-heading">Father's / Guardian's Details</h3>

          <div className="row">
            <div className="field">
              <label>Father's Name</label>
              <input type="text" name="father_name" required />
            </div>
            <div className="field">
              <label>ID No.</label>
              <input type="text" name="father_id" />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>Occupation</label>
              <input type="text" name="father_occupation" />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>Telephone (Office)</label>
              <input type="tel" name="father_phone_office" />
            </div>
            <div className="field">
              <label>Telephone (Home)</label>
              <input type="tel" name="father_phone_home" />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>Email</label>
              <input type="email" name="father_email" required />
            </div>
          </div>

          {/* MOTHER */}
          <h3 className="section-heading">Mother's Details</h3>

          <div className="row">
            <div className="field">
              <label>Mother's Name</label>
              <input type="text" name="mother_name" />
            </div>
            <div className="field">
              <label>ID No.</label>
              <input type="text" name="mother_id" />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>Occupation</label>
              <input type="text" name="mother_occupation" />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>Telephone (Office)</label>
              <input type="tel" name="mother_phone_office" />
            </div>
            <div className="field">
              <label>Telephone (Home)</label>
              <input type="tel" name="mother_phone_home" />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>Email</label>
              <input type="email" name="mother_email" />
            </div>
          </div>

          {/* NEXT OF KIN */}
          <h3 className="section-heading">Next of Kin</h3>

          <div className="row">
            <div className="field">
              <label>Next of Kin Name</label>
              <input type="text" name="kin_name" />
            </div>
            <div className="field">
              <label>Relationship</label>
              <input type="text" name="kin_relationship" />
            </div>
            <div className="field">
              <label>ID No.</label>
              <input type="text" name="kin_id" />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>Telephone (Office)</label>
              <input type="tel" name="kin_phone_office" />
            </div>
            <div className="field">
              <label>Telephone (Home)</label>
              <input type="tel" name="kin_phone_home" />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>Email</label>
              <input type="email" name="kin_email" />
            </div>
          </div>

          {/* DECLARATION */}
          <h3 className="section-heading">Declaration</h3>
          <div className="declaration-box">
            <div className="row">
              <div className="field">
                <label>Parent / Guardian Name (signing)</label>
                <input type="text" name="parent_name" required />
              </div>
            </div>
            <p className="agreement">
              <input type="checkbox" name="agreement" required />
              I agree to abide by the regulations of the school.
            </p>
          </div>

          <button type="submit" disabled={sending} className="submit-btn">
            {sending ? "Sending..." : "Submit Admission Form"}
          </button>

          {status.message && (
            <div className={`status-box ${status.type}`}>{status.message}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Admission;