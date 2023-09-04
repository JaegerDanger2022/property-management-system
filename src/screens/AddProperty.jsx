import {
  Alert,
  Badge,
  Button,
  Card,
  CardActions,
  CardMedia,
  IconButton,
  ListSubheader,
  MenuItem,
  Select,
  Snackbar,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { CustomTextField } from "../components/CustomTextField";
import { ActionButton } from "../components/ActionButton";
import { AddAPhoto, Close } from "@mui/icons-material";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../app/utils/firebaseConfig";
import {
  arrayUnion,
  doc,
  getDoc,
  increment,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { SelectedImages } from "../components/SelectedImages";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import properties from "../DataSets/PropertyTypes";
import { useDispatch } from "react-redux";
import { setOpenPortfolioName } from "../../app/features/OpenPortfolioItemSlice";

export const AddProperty = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   { label: "Residential Properties", header: true },
  //   { label: "Single-Family Homes", header: false },
  //   { label: "Apartments/Condominiums", header: false },
  //   { label: "Townhouses", header: false },
  //   { label: "Duplexes/Triplexes", header: false },
  //   { label: "Co-ops (Cooperative Apartments)", header: false },
  //   { label: "Mobile Homes", header: false },
  //   { label: "Commercial Properties", header: true },
  //   { label: "Office Buildings", header: false },
  //   { label: "Retail Spaces", header: false },
  //   { label: "Industrial/Warehouse Building", header: false },
  //   { label: "Mixed-Use Building", header: false },
  //   { label: "Hotel/Motel", header: false },
  //   { label: "Restaurants", header: false },
  //   { label: "Industrial Properties", header: true },
  //   { label: "Manufacturing Facilities", header: false },
  //   { label: "Warehouses", header: false },
  //   { label: "Distribution Centers", header: false },
  //   { label: "Factories", header: false },
  //   { label: "Retail Properties", header: true },
  //   { label: "Shopping Centers/Malls", header: false },
  //   { label: "Standalone Retail Stores", header: false },
  //   { label: "Strip Malls", header: false },
  //   { label: "Hospitality Properties", header: true },
  //   { label: "Hotels", header: false },
  //   { label: "Resorts", header: false },
  //   { label: "Bed and Breakfasts", header: false },
  //   { label: "Special Purpose Properties", header: true },
  //   { label: "Hospitals/Healthcare Facilities", header: false },
  //   { label: "Educational Institutions/Schools", header: false },
  //   { label: "Religious Buildings", header: false },
  //   { label: "Sports Facilities", header: false },
  //   { label: "Vacant Land", header: true },
  //   { label: "Undeveloped Land", header: false },
  //   { label: "Agricultural Land", header: false },
  //   { label: "Residential Land", header: false },
  //   { label: "Recreational Properties", header: true },
  //   { label: "Vacation Homes", header: false },
  //   { label: "Cabins/Cottages", header: false },
  //   { label: "Lakefront Properties", header: false },
  //   { label: "Investment Properties", header: true },
  //   { label: "Rental Properties", header: false },
  //   { label: "Real Estate Investment Trusts (REITs)", header: false },
  //   { label: "Government Properties", header: true },
  //   { label: "Government Buildings", header: false },
  //   { label: "Military Bases", header: false },
  //   { label: "Historical Properties", header: true },
  //   { label: "Historic Homes", header: false },
  //   {
  //     label: "Buildings with Cultural or Historical Significance",
  //     header: false,
  //   },
  // ];

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [numberOfUnits, setNumberOfUnits] = useState(0);
  const [availableUnits, setAvailableUnits] = useState(0);
  const [propertyType, setPropertyType] = useState([]);

  //image display state
  const [imageDisplay, setImageDisplay] = useState([]);
  // selected images array to be sent to the db
  const [propertyImages, setPropertyImages] = useState([]);
  // random doc name
  const [randomDocName, setRandomDocName] = useState(v4);

  // image format alert state
  const [incorrectImageFormat, setIncorrectImageFormat] = useState(false);
  // alert close function
  const handleClose = () => {
    setIncorrectImageFormat(false);
  };

  // empty fields alert
  const [emptyFieldsAlert, setEmptyFieldsAlert] = useState(false);
  // exceeded maximum pictures alert
  const [maximumPicturesAlert, setMaximumPicturesAlert] = useState(false);
  // image format alert state
  const [uploadComplete, setUploadComplete] = useState(false);
  // alert close function
  const handleEmptyAlertClose = () => {
    setEmptyFieldsAlert(false);
  };
  // alert to close maximumPicturesAlert
  const handleMaximumPicturesAlert = () => {
    setMaximumPicturesAlert(false);
  };
  // alert close function
  const handleCloseUploadComplete = () => {
    setUploadComplete(false);
  };

  // const handleDeleteImage = (item) => {
  //   const updatedImageDisplay = imageDisplay.filter((image) => image !== item);
  //   setImageDisplay(updatedImageDisplay);
  // };

  // handle file upload
  const fileInputRef = useRef(null);
  // loading state
  const [isLoading, setIsLoading] = useState(false);

  const [numberOfUploads, setNumberOfUploads] = useState();
  useEffect(() => {
    const getNumberOfUploads = async () => {
      // update the numberOfUploads field
      const numberOfUploadsRef = doc(db, `user_data`, `testUser`);
      const numberOfUploadsSnap = await getDoc(numberOfUploadsRef);

      const numberOfUploadsDoc = await numberOfUploadsSnap.data()
        .numberOfUploads;
      setNumberOfUploads(numberOfUploadsDoc);
    };
    getNumberOfUploads();
  }, [numberOfUploads]);

  // handle submit
  const handleAction = async () => {
    console.log(numberOfUploads);
    // if (numberOfUploads < 1) {

    // } else {
    //   console.log("you have exceeded the limit");
    // }
    try {
      if (
        name === "" ||
        address === "" ||
        numberOfUnits === 0 ||
        availableUnits === 0 ||
        propertyType.length === 0 ||
        propertyImages.length === 0
      ) {
        setEmptyFieldsAlert(true);
      } else {
        const propertyRef = doc(
          db,
          `user_data/testUser/properties`,
          `${randomDocName}`
        );

        await setDoc(propertyRef, {
          name: name,
          address: address,
          numberOfUnits: numberOfUnits,
          availableUnits: availableUnits,
          propertyType: propertyType,
          propertyImages: propertyImages,
          key: randomDocName,
        });

        // update the numberOfUploads field
        const numberOfUploadsRef = doc(db, `user_data`, `testUser`);
        await updateDoc(numberOfUploadsRef, {
          numberOfUploads: increment(1),
        });
        // navigate
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = async (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = [];
    if (selectedFiles.length > 10) {
      setMaximumPicturesAlert(true);
    } else {
      for (let i = 0; i < selectedFiles.length; i++) {
        if (
          selectedFiles[i].type == "image/jpeg" ||
          selectedFiles[i].type == "image/jpg" ||
          selectedFiles[i].type == "image/png"
        ) {
          const selectedFile = selectedFiles[i];

          // upload the image to google storage
          const profileImageRef = ref(
            storage,
            `buildingimages/test/${selectedFile.name}`
          );

          uploadBytes(profileImageRef, selectedFile).then((snapshot) => {
            setUploadComplete(true);
            // Get the download URL of the uploaded image -- read/write count 2
            getDownloadURL(snapshot.ref).then((url) => {
              // save image to be displayed
              selectedFilesArray.push(url);
            });
          });
          setIsLoading(false);
        } else {
          setIncorrectImageFormat(true);
        }
      }
      setImageDisplay(selectedFilesArray);
      setPropertyImages(selectedFilesArray);
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h5">Property Types</Typography>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "5dvw",
          paddingLeft: "5vw",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5dvh",
          }}
        >
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
                value={name}
                placeholder="Name"
                onchange={(e) => setName(e.target.value)}
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
                value={address}
                placeholder="Address"
                onchange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          {/* Property Type */}
          <div
            className="item"
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
          >
            <div className="label">
              <Typography variant="body1">Property Type</Typography>
            </div>
            <div className="input-field">
              <Select
                sx={{ width: "20vw" }}
                value={propertyType}
                onChange={(event) => {
                  setPropertyType([event.target.value]);
                }}
                label="Property Type"
              >
                {properties.map((item) => {
                  if (item.header === true) {
                    return (
                      <ListSubheader
                        sx={{
                          fontWeight: "bold",
                          backgroundColor: "#686868",
                          color: "white",
                        }}
                      >
                        {item.label}
                      </ListSubheader>
                    );
                  } else {
                    return <MenuItem value={item.label}>{item.label}</MenuItem>;
                  }
                })}
              </Select>
            </div>
          </div>
          {/*Total  Number of units */}
          <div
            className="item"
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr" }}
          >
            <div className="label">
              <Typography variant="body1">Units</Typography>
            </div>
            <div className="input-field">
              <CustomTextField
                value={numberOfUnits}
                placeholder="Units"
                onchange={(e) => {
                  const numberOfUnits = Math.round(e.target.value);
                  // Convert the rounded value to an integer.
                  const numberOfUnitsInt = parseInt(numberOfUnits);
                  setNumberOfUnits(numberOfUnitsInt);
                  if (numberOfUnits === 0) {
                    setNumberOfUnits("");
                  }
                }}
                onFocus={() => setNumberOfUnits("")}
                type="number"
              />
            </div>
          </div>
          {/*Available of units */}
          <div
            className="item"
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr" }}
          >
            <div className="label">
              <Typography variant="body1">Available Units</Typography>
            </div>
            <div className="input-field">
              <CustomTextField
                value={availableUnits}
                placeholder="Units"
                onchange={(e) => {
                  const availableUnits = Math.round(e.target.value);
                  // Convert the rounded value to an integer.
                  const availableUnitsInt = parseInt(availableUnits);
                  setAvailableUnits(availableUnitsInt);
                  if (availableUnits === 0) {
                    setAvailableUnits("");
                  }
                }}
                onFocus={() => setAvailableUnits("")}
                type="number"
              />
            </div>
          </div>
          {/* Select Images */}
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
            onClick={() => fileInputRef.current.click()}
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
              <Typography>Select Images</Typography>
            </div>

            {/* ref input */}
            <div>
              <input
                type="file"
                multiple
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </div>
          </div>
          {/* incorrect format alert */}
          <Snackbar
            open={incorrectImageFormat}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert severity="error">
              Files can only be .jpeg, .jpg and .png formats
            </Alert>
          </Snackbar>
          {/* upload complete alert */}

          <Snackbar
            open={uploadComplete}
            autoHideDuration={6000}
            onClose={handleCloseUploadComplete}
          >
            <Alert severity="success">Uploaded</Alert>
          </Snackbar>

          {/* empty fields alert */}
          <Snackbar
            open={emptyFieldsAlert}
            autoHideDuration={6000}
            onClose={handleEmptyAlertClose}
          >
            <Alert severity="error">All fields are required</Alert>
          </Snackbar>
          {/* maximum pictures alert */}
          <Snackbar
            open={maximumPicturesAlert}
            autoHideDuration={6000}
            onClose={handleMaximumPicturesAlert}
          >
            <Alert severity="error">Only 10 images are allowed</Alert>
          </Snackbar>
        </div>
        <div
          className="results"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5vh",
          }}
        >
          <Typography>Name: {name}</Typography>
          <Typography>Address: {address}</Typography>
          <Typography>Property Type: {propertyType}</Typography>
          <Typography>Total number of Units: {numberOfUnits}</Typography>
          <Typography>Available Units: {availableUnits}</Typography>

          <Typography>Pictures:</Typography>

          {isLoading && <Typography variant="h1">LOADING</Typography>}
          <div style={{ display: "flex", gap: "1vw" }}>
            {imageDisplay.map((item) => (
              <SelectedImages item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "10vh",
        }}
      >
        <ActionButton label="Submit" handleAction={handleAction} />
        <Button onClick={() => dispatch(setOpenPortfolioName("name"))}>
          Test
        </Button>
      </div>
    </div>
  );
};
