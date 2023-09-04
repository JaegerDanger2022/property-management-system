import { Button, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { CustomTextField } from "./CustomTextField";
import { AddAPhoto, Close } from "@mui/icons-material";

export const AddTenantToProperty = ({
  tenantFullName,
  setTenantFullName,
  tenantDOB,
  setTenantDOB,
  tenantAddress,
  setTenantAddress,
  tenantPnoneNumber,
  setTenantPnoneNumber,
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
}) => {
  const theme = useTheme();
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        overflow: "scroll",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
        onClick={handleTenantModalClose}
        className="close_icon"
      >
        <Close sx={{ fontSize: "5rem", color: theme.palette.text.primary }} />
      </div>

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
            <Typography variant="body1">Name</Typography>
          </div>
          <div className="input-field">
            <CustomTextField
              autoFocus={true}
              value={tenantFullName}
              placeholder="Name"
              onchange={(e) => setTenantFullName(e.target.value)}
            />
          </div>
        </div>
        {/* Date of Birth */}
        <div
          className="item"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
        >
          <div className="label">
            <Typography variant="body1">Date of Birth</Typography>
          </div>
          <div className="input-field">
            <CustomTextField
              value={tenantDOB}
              placeholder="Date of Birth"
              onchange={(e) => setTenantDOB(e.target.value)}
            />
          </div>
        </div>
        {/* Address */}
        <div
          className="item"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
        >
          <div className="label">
            <Typography variant="body1">Address</Typography>
          </div>
          <div className="input-field">
            <CustomTextField
              value={tenantAddress}
              placeholder="Address"
              onchange={(e) => setTenantAddress(e.target.value)}
            />
          </div>
        </div>
        {/* Phone Number */}
        <div
          className="item"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
        >
          <div className="label">
            <Typography variant="body1">Phone Number</Typography>
          </div>
          <div className="input-field">
            <CustomTextField
              value={tenantPnoneNumber}
              placeholder="Phone Number"
              onchange={(e) => setTenantPnoneNumber(e.target.value)}
            />
          </div>
        </div>

        {/* Emergency Contact Information*/}
        <Typography variant="h5">Emergency Contact Information</Typography>
        {/* Emergency Contact Name*/}
        <div
          className="item"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
        >
          <div className="label">
            <Typography variant="body1">Emergency Contact Name</Typography>
          </div>
          <div className="input-field">
            <CustomTextField
              value={tenantECName}
              placeholder="Emergency Contact Name"
              onchange={(e) => setTenantECName(e.target.value)}
            />
          </div>
        </div>
        {/* Emergency Contact Relationship*/}
        <div
          className="item"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
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
              onchange={(e) => setTenantECRelationship(e.target.value)}
            />
          </div>
        </div>
        {/* Emergency Contact Phone Number*/}
        <div
          className="item"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
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
              onchange={(e) => setTenantECPhoneNumber(e.target.value)}
            />
          </div>
        </div>
        {/*  Employment and Income: */}
        {/* Tenant Occupation*/}
        <Typography variant="h5">Employment and Income</Typography>
        <div
          className="item"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
        >
          <div className="label">
            <Typography variant="body1">Tenant Occupation</Typography>
          </div>
          <div className="input-field">
            <CustomTextField
              value={tenantOccupation}
              placeholder="Tenant Occupation"
              onchange={(e) => setTenantOccupation(e.target.value)}
            />
          </div>
        </div>
        {/* Tenant Place of Work*/}
        <div
          className="item"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
        >
          <div className="label">
            <Typography variant="body1">Tenant Place of Work</Typography>
          </div>
          <div className="input-field">
            <CustomTextField
              value={tenantPlaceOfWork}
              placeholder="Tenant Place of Work"
              onchange={(e) => setTenantPlaceOfWork(e.target.value)}
            />
          </div>
        </div>
        {/* Financial Information */}
        {/* Account Info */}
        <Typography variant="h5">Financial Information</Typography>

        <div
          className="item"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
        >
          <div className="label">
            <Typography variant="body1">Tenant Account Info</Typography>
          </div>
          <div className="input-field">
            <CustomTextField
              value={tenantAccountInfo}
              placeholder="Tenant Account Info"
              onchange={(e) => setTenantAccountInfo(e.target.value)}
            />
          </div>
        </div>
        {/* Security Depost*/}
        <div
          className="item"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
        >
          <div className="label">
            <Typography variant="body1">Security Depost</Typography>
          </div>
          <div className="input-field">
            <CustomTextField
              value={tenantSecurityDeposit}
              placeholder="Security Depost"
              onchange={(e) => setTenantSecurityDeposit(e.target.value)}
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
        {/* incorrect format alert */}
        {/* <Snackbar
          open={incorrectImageFormat}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert severity="error">
            Files can only be .jpeg, .jpg and .png formats
          </Alert>
        </Snackbar> */}
        <Button variant="contained" onClick={handleSubmitTenantInfo}>
          Submit
        </Button>
      </div>
    </div>
  );
};
