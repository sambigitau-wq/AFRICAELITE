import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
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
        "service_3nzm19d",
        "template_utsgk9v",
        formRef.current,
        "uo4tkay-QnOQmXvEW"
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
    <>
      <Menu />

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
                <label>Intended Admission Date</label>
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
                <label>Grade Applying For</label>
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

            {/* PARENT / GUARDIAN */}
            <h3 className="section-heading">Parent's / Guardian's Details</h3>

            <div className="row">
              <div className="field">
                <label>Parent's / Guardian's Name</label>
                <input type="text" name="parent_full_name" required />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>Telephone (Office)</label>
                <input type="tel" name="parent_phone_office" />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>Email</label>
                <input type="email" name="parent_email" required />
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

      <Footer />
    </>
  );
};

export default Admission;