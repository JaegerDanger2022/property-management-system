import { AddAPhoto, Close } from "@mui/icons-material";
import { Button, Fade, Modal, Typography, useTheme } from "@mui/material";
import React from "react";
import { CustomTextField } from "../components/CustomTextField";

export const AddTenantToPropertyModal = ({
  addTenantModalOpen,
  tenantFullName,
  setTenantFullName,
  tenantDOB,
  setTenantDOB,
  tenantAddress,
  setTenantAddress,
  tenantPhoneNumber,
  setTenantPhoneNumber,
  tenantECName,
  setTenantECName,
  tenantECRelationship,
  setTenantECRelationship,
  tenantECPhoneNumber,
  setTenantECPhoneNumber,
  tenantOccupation,
  setTenantOccupation,
  tenantPlaceOfWork,
  setTenantPlaceOfWork,
  tenantAccountInfo,
  setTenantAccountInfo,
  tenantSecurityDeposit,
  setTenantSecurityDeposit,
  handleTenantModalClose,
  handleSubmitTenantInfo,
  tenantUnitsToOccuppy,
  setTenantUnitsToOccuppy,
  tenantDependents,
  setTenantDependents,
  tenantPhoneNumberError,
  tenantECPhoneNumberError,
  tenantsDependentsNumberError,
  tenantsUnitsToOccupyNumberError,
}) => {
  const theme = useTheme();
  return (
    <Modal open={addTenantModalOpen}>
      <Fade in={addTenantModalOpen}>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            overflow: "scroll",
          }}
        >
          {/* CLOSE ICON */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
            onClick={handleTenantModalClose}
            className="close_icon"
          >
            <Close
              sx={{ fontSize: "5rem", color: theme.palette.text.primary }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {/* column 1 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "5dvh",
              }}
            >
              <Typography variant="h5">Personal Information</Typography>

              {/* name */}
              <div
                className="item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <div className="label">
                  <Typography variant="body1">Full Name</Typography>
                </div>
                <div className="input-field">
                  <CustomTextField
                    autoFocus={true}
                    value={tenantFullName}
                    placeholder="Full Name"
                    onchange={setTenantFullName}
                  />
                </div>
              </div>
              {/* Date of Birth */}
              <div
                className="item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <div className="label">
                  <Typography variant="body1">Date of Birth</Typography>
                </div>
                <div className="input-field">
                  <CustomTextField
                    value={tenantDOB}
                    placeholder="Date of Birth"
                    onchange={setTenantDOB}
                  />
                </div>
              </div>
              {/* Address */}
              <div
                className="item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <div className="label">
                  <Typography variant="body1">Address</Typography>
                </div>
                <div className="input-field">
                  <CustomTextField
                    value={tenantAddress}
                    placeholder="Address"
                    onchange={setTenantAddress}
                  />
                </div>
              </div>
              {/* Phone Number */}
              <div
                className="item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <div className="label">
                  <Typography variant="body1">Phone Number</Typography>
                </div>
                <div className="input-field">
                  <CustomTextField
                    value={tenantPhoneNumber}
                    placeholder="Phone Number"
                    onchange={setTenantPhoneNumber}
                    error={tenantPhoneNumberError}
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    helperText="Enter a valid phone number"
                  />
                </div>
              </div>

              {/* Emergency Contact Information*/}
              <Typography variant="h5">
                Emergency Contact Information
              </Typography>
              {/* Emergency Contact Name*/}
              <div
                className="item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <div className="label">
                  <Typography variant="body1">
                    Emergency Contact Name
                  </Typography>
                </div>
                <div className="input-field">
                  <CustomTextField
                    value={tenantECName}
                    placeholder="Emergency Contact Name"
                    onchange={setTenantECName}
                  />
                </div>
              </div>
              {/* Emergency Contact Relationship*/}
              <div
                className="item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <div className="label">
                  <Typography variant="body1">
                    Emergency Contact Relationship
                  </Typography>
                </div>
                <div className="input-field">
                  <CustomTextField
                    value={tenantECRelationship}
                    placeholder="Emergency Contact Relationship"
                    onchange={setTenantECRelationship}
                  />
                </div>
              </div>
              {/* Emergency Contact Phone Number*/}
              <div
                className="item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <div className="label">
                  <Typography variant="body1">
                    Emergency Contact Phone Number
                  </Typography>
                </div>
                <div className="input-field">
                  <CustomTextField
                    value={tenantECPhoneNumber}
                    placeholder="Emergency Contact Phone Number"
                    onchange={setTenantECPhoneNumber}
                    error={tenantECPhoneNumberError}
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    helperText="Enter a valid phone number"
                  />
                </div>
              </div>
              {/* Unit Occupancy */}
              <Typography variant="h5">Unit Occupancy</Typography>
              <div
                className="item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <div className="label">
                  <Typography variant="body1">Units to be Occupied:</Typography>
                </div>
                <div className="input-field">
                  <CustomTextField
                    value={tenantUnitsToOccuppy}
                    placeholder=" Units to be Occupied"
                    onchange={setTenantUnitsToOccuppy}
                    error={tenantsUnitsToOccupyNumberError}
                    helperText="Enter a valid number"
                  />
                </div>
              </div>
            </div>
            {/* column 2 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "5dvh",
              }}
            >
              {/*  Employment and Income: */}
              {/* Tenant Occupation*/}
              <Typography variant="h5">Employment and Income</Typography>
              <div
                className="item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <div className="label">
                  <Typography variant="body1">Tenant Occupation</Typography>
                </div>
                <div className="input-field">
                  <CustomTextField
                    value={tenantOccupation}
                    placeholder="Tenant Occupation"
                    onchange={setTenantOccupation}
                  />
                </div>
              </div>
              {/* Tenant Place of Work*/}
              <div
                className="item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <div className="label">
                  <Typography variant="body1">Tenant Place of Work</Typography>
                </div>
                <div className="input-field">
                  <CustomTextField
                    value={tenantPlaceOfWork}
                    placeholder="Tenant Place of Work"
                    onchange={setTenantPlaceOfWork}
                  />
                </div>
              </div>
              {/* Financial Information */}
              {/* Account Info */}
              <Typography variant="h5">Financial Information</Typography>

              <div
                className="item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <div className="label">
                  <Typography variant="body1">Tenant Account Info</Typography>
                </div>
                <div className="input-field">
                  <CustomTextField
                    value={tenantAccountInfo}
                    placeholder="Tenant Account Info"
                    onchange={setTenantAccountInfo}
                  />
                </div>
              </div>
              {/* Security Depost*/}
              <div
                className="item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <div className="label">
                  <Typography variant="body1">Security Depost</Typography>
                </div>
                <div className="input-field">
                  <CustomTextField
                    value={tenantSecurityDeposit}
                    placeholder="Security Depost"
                    onchange={setTenantSecurityDeposit}
                  />
                </div>
              </div>

              {/* Lease Agreement */}
              <div
                className="select-image"
                style={{
                  border: "2px dotted",
                  borderColor: theme.palette.primary.main,
                  width: "20dvw",
                  height: "10dvh",
                  display: "flex",
                  justifyContent: "center",
                  alignSelf: "center",
                  alignItems: "center",
                }}
                //   onClick={() => fileInputRef.current.click()}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyItems: "baseline",
                    gap: 10,
                  }}
                >
                  <AddAPhoto />
                  <Typography>Lease Agreement</Typography>
                </div>

                {/* ref input */}
                <div>
                  <input
                    type="file"
                    multiple
                    style={{ display: "none" }}
                    //   ref={fileInputRef}
                    //   onChange={handleFileChange}
                  />
                </div>
              </div>

              {/*  Dependants */}

              <Typography variant="h5">Dependants</Typography>
              <div
                className="item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <div className="label">
                  <Typography variant="body1">Number of Dependants</Typography>
                </div>
                <div className="input-field">
                  <CustomTextField
                    value={tenantDependents}
                    placeholder="Dependants"
                    onchange={setTenantDependents}
                    error={tenantsDependentsNumberError}
                    helperText="Enter a valid number"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* submit button */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" onClick={handleSubmitTenantInfo}>
              Submit
            </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};
