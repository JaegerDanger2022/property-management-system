import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  property_address,
  property_availableUnits,
  property_date_added,
  property_images,
  property_key,
  property_name,
  property_numberOfUnits,
} from "../../app/features/propertyDetailsSlice";
import { Alert, Button, Snackbar, Typography, useTheme } from "@mui/material";
import { AddTenantToPropertyModal } from "../modals/AddTenantToPropertyModal";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../app/utils/firebaseConfig";
import { v4 } from "uuid";
import {
  isValidNumber,
  validatePhoneNumber,
} from "../../app/utils/validations/validations";

export const PropertyDetails = ({}) => {
  // TEMPORAL OWNER ID -- USE A REAL ONE FOR PRODUCTION
  const ownerid = "testUser";

  const theme = useTheme();
  // get the details of the property
  const name = useSelector(property_name);
  const address = useSelector(property_address);
  const numberOfUnits = useSelector(property_numberOfUnits);
  const availableUnits = useSelector(property_availableUnits);
  const key = useSelector(property_key);
  const date_added = useSelector(property_date_added);
  const images = useSelector(property_images);

  //   alert state
  const [allFieldsRequiredAlert, setAllFieldsRequiredAlert] = useState(false);
  //   function to close allFieldsRequiredAlert
  const handleCloseAllFieldsRequiredAlert = () => {
    setAllFieldsRequiredAlert(false);
  };
  // tenantPhoneNumberError alert
  const [tenantPhoneNumberError, setTenantPhoneNumberError] = useState(false);
  // tenantECPhoneNumberError alert
  const [tenantECPhoneNumberError, setTenantECPhoneNumberError] =
    useState(false);
  // tenantsUnitsToOccupyNumberError alert
  const [tenantsUnitsToOccupyNumberError, setTenantsUnitsToOccupyNumberError] =
    useState(false);
  // tenantsDependentsNumberError alert
  const [tenantsDependentsNumberError, setTenantsDependentsNumberError] =
    useState(false);
  //   Add tenant
  //   tenant unique id
  const [tenantid, setTenantid] = useState(v4);
  // Personal Information states
  const [tenantFullName, setTenantFullName] = useState("");
  const [tenantDOB, setTenantDOB] = useState("");
  //   Contact information (address, phone number, email)
  const [tenantAddress, setTenantAddress] = useState("");
  const [tenantPhoneNumber, setTenantPhoneNumber] = useState("");
  //   Emergency Contact Information (EC)
  const [tenantECName, setTenantECName] = useState("");
  const [tenantECRelationship, setTenantECRelationship] = useState("");
  const [tenantECPhoneNumber, setTenantECPhoneNumber] = useState("");
  // Employment and Income:
  const [tenantOccupation, setTenantOccupation] = useState("");
  const [tenantPlaceOfWork, setTenantPlaceOfWork] = useState("");
  // Financial Information
  const [tenantAccountInfo, setTenantAccountInfo] = useState("");
  //Security Deposit
  const [tenantSecurityDeposit, setTenantSecurityDeposit] = useState("");
  // Lease Agreement file
  const [tenantLeaseAgreement, setTenantLeaseAgreement] = useState([]);
  //   number of units to occupy
  const [tenantUnitsToOccuppy, setTenantUnitsToOccuppy] = useState("");
  //   number of dependants
  const [tenantDependents, setTenantDependents] = useState("");

  //   addTenant Modal handlers
  const [addTenantModalOpen, setAddTenantModalOpen] = useState(false);
  const handleTenantModalClose = () => {
    setAddTenantModalOpen(false);
  };

  // validations useeffect
  useEffect(() => {
    const validations = () => {
      // Ensure the value doesn't start with '0' unless it's just '0'
      if (
        tenantUnitsToOccuppy !== "0" &&
        tenantUnitsToOccuppy.startsWith("0")
      ) {
        // Remove leading '0's
        setTenantUnitsToOccuppy(tenantUnitsToOccuppy.replace(/^0+/, ""));
      }
      if (
        tenantSecurityDeposit !== "0" &&
        tenantSecurityDeposit.startsWith("0")
      ) {
        setTenantSecurityDeposit(tenantSecurityDeposit.replace(/^0+/, ""));
      }
      //   validate phone numbers
      if (!validatePhoneNumber(tenantPhoneNumber) && tenantPhoneNumber !== "") {
        setTenantPhoneNumberError(true);
      } else {
        setTenantPhoneNumberError(false);
      }
      if (
        !validatePhoneNumber(tenantECPhoneNumber) &&
        tenantECPhoneNumber !== ""
      ) {
        setTenantECPhoneNumberError(true);
      } else {
        setTenantECPhoneNumberError(false);
      }
      //   validate unit occupancy is a number
      if (!isValidNumber(tenantUnitsToOccuppy) && tenantUnitsToOccuppy !== "") {
        setTenantsUnitsToOccupyNumberError(true);
      } else {
        setTenantsUnitsToOccupyNumberError(false);
      }
      //   validate dependants is a number
      if (!isValidNumber(tenantDependents) && tenantDependents !== "") {
        setTenantsDependentsNumberError(true);
      } else {
        setTenantsDependentsNumberError(false);
      }
    };
    validations();
  }, [
    tenantUnitsToOccuppy,
    tenantSecurityDeposit,
    tenantPhoneNumber,
    tenantECPhoneNumber,
    tenantUnitsToOccuppy,
    tenantDependents,
  ]);

  //   function to sublit the tenant info
  const handleSubmitTenantInfo = async () => {
    console.log("sent");
    if (
      tenantFullName === "" ||
      tenantAddress === "" ||
      tenantDOB === "" ||
      tenantECName === "" ||
      tenantPhoneNumber === "" ||
      tenantECPhoneNumber === "" ||
      tenantECRelationship === "" ||
      tenantSecurityDeposit === "" ||
      tenantAccountInfo === "" ||
      tenantOccupation === "" ||
      tenantPlaceOfWork === "" ||
      tenantUnitsToOccuppy === "" ||
      tenantDependents === ""
    ) {
      // trigger alert
      setAllFieldsRequiredAlert(true);
      // reduce the
    } else if (!validatePhoneNumber(tenantPhoneNumberError)) {
      setTenantECPhoneNumberError(true);
    } else if (!validatePhoneNumber(tenantECPhoneNumberError)) {
      setTenantECPhoneNumberError;
    } else if (!isValidNumber(tenantsUnitsToOccupyNumberError)) {
      setTenantsUnitsToOccupyNumberError(true);
    } else if (!isValidNumber(tenantsDependentsNumberError)) {
      setTenantsDependentsNumberError(true);
    } else {
      // save the tenants details
      try {
        const tenantDocRef = doc(
          db,
          `user_data/${ownerid}/tenants`,
          `${tenantid}`
        );
        await setDoc(tenantDocRef, {
          tenantFullName: tenantFullName,
          tenantDOB: tenantDOB,
          tenantAddress: tenantAddress,
          tenantPhoneNumber: tenantPhoneNumber,
          tenantECName: tenantECName,
          tenantECRelationship: tenantECRelationship,
          tenantECPhoneNumber: tenantECPhoneNumber,
          tenantOccupation: tenantOccupation,
          tenantPlaceOfWork: tenantPlaceOfWork,
          tenantAccountInfo: tenantAccountInfo,
          tenantSecurityDeposit: tenantSecurityDeposit,
          tenantUnitsToOccuppy: tenantUnitsToOccuppy,
          tenantDependents: tenantDependents,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div
      className="propertyDetailsScreen"
      style={{
        backgroundColor: theme.palette.background.paper,
        height: "90vh",
      }}
    >
      <div className="propertyDetails">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2vw",
          }}
        >
          <Typography
            sx={{ color: theme.palette.text.primary, fontSize: "1.3rem" }}
          >
            <strong>Property name:</strong>
            {name}
          </Typography>
          <Typography
            sx={{ color: theme.palette.text.primary, fontSize: "1.3rem" }}
          >
            <strong>Property Address:</strong>
            {address}
          </Typography>
          <Typography
            sx={{ color: theme.palette.text.primary, fontSize: "1.3rem" }}
          >
            <strong>Number of Units:</strong>
            {numberOfUnits}
          </Typography>
          <Typography
            sx={{ color: theme.palette.text.primary, fontSize: "1.3rem" }}
          >
            <strong>Available Units:</strong>
            {availableUnits}
          </Typography>
        </div>
        {/* display the others */}
        {images.map((imageSrc) => (
          <img
            key={imageSrc}
            src={imageSrc}
            style={{ width: "30dvw", height: "30dvh", padding: "1dvw" }}
          />
        ))}
      </div>
      <div className="propertyDetailsAddTenant">
        <Typography sx={{ color: theme.palette.text.primary }} variant="h5">
          <strong> All Tenants</strong>
        </Typography>
        <Button variant="contained" onClick={() => setAddTenantModalOpen(true)}>
          Add Tenant
        </Button>
        <AddTenantToPropertyModal
          addTenantModalOpen={addTenantModalOpen}
          handleTenantModalClose={handleTenantModalClose}
          handleSubmitTenantInfo={handleSubmitTenantInfo}
          tenantFullName={tenantFullName}
          setTenantFullName={(e) => {
            setTenantFullName(e.target.value);
          }}
          tenantDOB={tenantDOB}
          setTenantDOB={(e) => setTenantDOB(e.target.value)}
          tenantAddress={tenantAddress}
          setTenantAddress={(e) => setTenantAddress(e.target.value)}
          tenantPhoneNumber={tenantPhoneNumber}
          setTenantPhoneNumber={(e) => setTenantPhoneNumber(e.target.value)}
          tenantECName={tenantECName}
          setTenantECName={(e) => setTenantECName(e.target.value)}
          tenantECRelationship={tenantECRelationship}
          setTenantECRelationship={(e) =>
            setTenantECRelationship(e.target.value)
          }
          tenantECPhoneNumber={tenantECPhoneNumber}
          setTenantECPhoneNumber={(e) => setTenantECPhoneNumber(e.target.value)}
          tenantOccupation={tenantOccupation}
          setTenantOccupation={(e) => setTenantOccupation(e.target.value)}
          tenantPlaceOfWork={tenantPlaceOfWork}
          setTenantPlaceOfWork={(e) => setTenantPlaceOfWork(e.target.value)}
          tenantAccountInfo={tenantAccountInfo}
          setTenantAccountInfo={(e) => setTenantAccountInfo(e.target.value)}
          tenantSecurityDeposit={tenantSecurityDeposit}
          setTenantSecurityDeposit={(e) =>
            setTenantSecurityDeposit(e.target.value)
          }
          tenantUnitsToOccuppy={tenantUnitsToOccuppy}
          setTenantUnitsToOccuppy={(e) =>
            setTenantUnitsToOccuppy(e.target.value)
          }
          tenantDependents={tenantDependents}
          setTenantDependents={(e) => setTenantDependents(e.target.value)}
          tenantPhoneNumberError={tenantPhoneNumberError}
          tenantECPhoneNumberError={tenantECPhoneNumberError}
          tenantsUnitsToOccupyNumberError={tenantsUnitsToOccupyNumberError}
          tenantsDependentsNumberError={tenantsDependentsNumberError}
        />
      </div>
      {/* all fields required alert */}
      <Snackbar
        open={allFieldsRequiredAlert}
        autoHideDuration={6000}
        onClose={handleCloseAllFieldsRequiredAlert}
      >
        <Alert severity="error">All fields are required</Alert>
      </Snackbar>
    </div>
  );
};
