import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../app/utils/firebaseConfig";
import {
  Alert,
  Button,
  Snackbar,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { AllPropertiesItem } from "../components/AllPropertiesItem";
import { AddedPorfolioItem } from "../components/AddedPorfolioItem";
import { AddItemToPortfolio } from "../components/AddItemToPortfolio";
import { SavedPortfolioItem } from "../components/SavedPortfolioItem";
import { v4 } from "uuid";
import {
  setOpenPortfolioDateAdded,
  setOpenPortfolioKey,
  setOpenPortfolioName,
  setOpenPortfolioProperties,
} from "../../app/features/OpenPortfolioItemSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BackArrow } from "../components/BackArrow";

export const AllProperties = () => {
  // theme
  const theme = useTheme();
  // redux dispatch
  const dispatch = useDispatch();
  // navigation
  const navigate = useNavigate();

  const [propertyList, setPropertyList] = useState([]);
  useEffect(() => {
    // get saved portfolio list from database
    const portfolioListRef = collection(db, `user_data/testUser/portfolio`);

    try {
      const q = query(portfolioListRef, orderBy("dateAdded", "desc"));
      const allDocs = onSnapshot(q, (snapshot) => {
        const items = [];
        snapshot.forEach((doc) => {
          items.push({ ...doc.data() });
          setsavedPortfolioList(items);
        });
      });
    } catch (err) {
      console.log(err);
    }

    // get saved properties from database
    const listRef = collection(db, `user_data/testUser/properties`);

    try {
      const q = query(listRef, orderBy("numberOfUnits", "desc"));
      const allDocs = onSnapshot(q, (snapshot) => {
        const items = [];
        snapshot.forEach((doc) => {
          items.push({ ...doc.data() });
          setPropertyList(items);
        });
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  // state to hold the users porfolioi from the database
  const [savedPortfolioList, setsavedPortfolioList] = useState([]);
  // state to generate a random key for the portfolio list
  const [savePortfolioKey, setSavePortfolioKey] = useState(v4);
  // state to hold properties added to the create porfolio box
  const [portfolio, setPortfolio] = useState([]);
  // state to hold portfolio name
  const [portfolioName, setPortfolioName] = useState("");
  // open add portfolio item box
  const [isAddPortfolioBoxOpen, setIsAddPortfolioBoxOpen] = useState(false);
  // incomplete portfolio fields alert
  const [incompletePorfolioFields, setIncompletePorfolioFields] =
    useState(false);
  // function to close incompletePorfolioFields snackbar
  const handleCloseIncompletePorfolioFields = () => {
    setIncompletePorfolioFields(false);
  };
  // function to open box
  const handleOpenBox = () => {
    setIsAddPortfolioBoxOpen(!isAddPortfolioBoxOpen);
  };
  // function to close box
  const handleCloseBox = () => {
    setIsAddPortfolioBoxOpen(false);
  };

  const handleDragStart = (e, item) => {
    // set the property information on grag
    e.dataTransfer.setData("application/json", JSON.stringify(item));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    // get the property information on drop
    const jsonData = e.dataTransfer.getData("application/json");
    const draggedItem = JSON.parse(jsonData);
    // Check if the item with the same id already exists in the portfolio
    const itemExists = portfolio.some((item) => item.key === draggedItem.key);
    // Add the property information to the portfolio state if it doesn't exist
    if (!itemExists) {
      setPortfolio([...portfolio, draggedItem]);
    }
  };

  // click to remove dragged item
  const handleDelete = (id) => {
    const sortedPortfolio = portfolio.filter((item) => item.key !== id);
    setPortfolio(sortedPortfolio);
  };

  // create portfolio function
  const handleCreatePortfolio = async () => {
    if (portfolioName === "" || portfolio.length === 0) {
      setIncompletePorfolioFields(true);
    } else {
      try {
        // saved portfolio document location
        const savePortfolioRef = doc(
          db,
          `user_data/testUser/portfolio`,
          `${portfolioName}`
        );

        // saved portfolio name and list
        await setDoc(savePortfolioRef, {
          name: portfolioName,
          properties: portfolio,
          dateAdded: serverTimestamp(),
          key: savePortfolioKey,
        });

        // clear portfolio drop box
        setPortfolio([]);
      } catch (error) {
        console.log(error);
      }
    }
  };
  // dispatch(setOpenPortfolioName("rem"));
  // function to open saved portfolio item
  const handleOpenPortfolioItem = async (name, key, date, properties) => {
    await dispatch(setOpenPortfolioName(name));
    await dispatch(setOpenPortfolioKey(key));
    await dispatch(setOpenPortfolioDateAdded(date));
    await dispatch(setOpenPortfolioProperties(properties));
    // navigate to the portfolio screen
    navigate(`/portfolio/:${key}`);
  };
  // function to delete saved portfolio item
  const handleDeletePortfolioItem = async (name, key) => {
    const sortedPortfolioItems = savedPortfolioList.filter(
      (item) => item.key !== key
    );
    setsavedPortfolioList(sortedPortfolioItems);

    // delete from database
    const docToBeDeletedRef = doc(
      db,
      `user_data/testUser/portfolio`,
      `${name}`
    );
    await deleteDoc(docToBeDeletedRef);
  };
  return (
    <div
      className="allProperties"
      style={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
    >
      <BackArrow screen="/" />
      <div className="allPropertiesList" onClick={handleCloseBox}>
        {propertyList.map((item) => {
          return (
            <AllPropertiesItem
              id={item.key}
              key={item.key}
              name={item.name}
              address={item.address}
              numberOfUnits={item.numberOfUnits}
              availableUnits={item.availableUnits}
              onDragStart={(e) => handleDragStart(e, item)}
            />
          );
        })}
      </div>
      <div className="allPropertiesPortfolio" style={{ gap: 5 }}>
        {/* Add Portfolio */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: "5dvh",
          }}
        >
          <AddItemToPortfolio
            onClick={handleOpenBox}
            isAddPortfolioBoxOpen={isAddPortfolioBoxOpen}
          />
        </div>
        {/* drop box */}
        {isAddPortfolioBoxOpen ? (
          <div
            className={`portfolio-box ${isAddPortfolioBoxOpen ? "show" : ""}`}
            style={{
              marginLeft: "2dvw",
              marginRight: "2dvw",
              minHeight: "5dvh",
              maxHeight: "auto",
              marginTop: "5dvh",
              border: "2px dotted",
              borderColor: theme.palette.primary.main,
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              alignItems: "center",
            }}
            onDrop={(e) => handleDrop(e)}
            onDragOver={(e) => e.preventDefault()}
          >
            {portfolio.length === 0 ? (
              <Typography sx={{ color: theme.palette.text.primary }}>
                Drag Property Here
              </Typography>
            ) : (
              <div>
                <TextField
                  error={incompletePorfolioFields}
                  label="Name"
                  placeholder="Name the portfolio"
                  variant="outlined"
                  sx={{
                    color: theme.palette.text.primary,
                    border: "1px solid white",
                    borderColor: theme.palette.text.primary,
                    width: "25dvw",
                    marginY: "2dvh",
                  }}
                  value={portfolioName}
                  onChange={(e) => setPortfolioName(e.target.value)}
                />
                {portfolio.map((item) => (
                  <AddedPorfolioItem
                    name={item.name}
                    address={item.address}
                    key={item.key}
                    onClick={() => handleDelete(item.key)}
                  />
                ))}
                {/* Add Protfolio button */}
                {portfolio.length === 0 ? null : (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "5dvh",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{ color: theme.palette.text.secondary }}
                      onClick={handleCreatePortfolio}
                    >
                      Add
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : null}

        {/* Displayed Portfolios */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "5dvh",
          }}
        >
          {savedPortfolioList.length === 0 ? (
            "No Portfolio Yet"
          ) : (
            <div>
              <Typography sx={{ marginBottom: "3dvh" }}>
                Your Portfolios
              </Typography>
              {savedPortfolioList.map((item) => (
                <SavedPortfolioItem
                  key={item.key}
                  name={item.name}
                  handleOpenPortfolioItem={() =>
                    handleOpenPortfolioItem(
                      item.name,
                      item.key,
                      item.dateAdded,
                      item.properties
                    )
                  }
                  handleDeletePortfolioItem={() =>
                    handleDeletePortfolioItem(item.name, item.key)
                  }
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Snackbar
        open={incompletePorfolioFields}
        autoHideDuration={6000}
        onClose={handleCloseIncompletePorfolioFields}
      >
        <Alert
          onClose={handleCloseIncompletePorfolioFields}
          severity="error"
          sx={{ width: "100%" }}
        >
          Add properties and set a name for the portfolio !
        </Alert>
      </Snackbar>
    </div>
  );
};
