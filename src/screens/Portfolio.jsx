import React from "react";
import { useSelector } from "react-redux";
import {
  portfolio_date_added,
  portfolio_key,
  portfolio_name,
  portfolio_properties,
} from "../../app/features/OpenPortfolioItemSlice";
import { useTheme } from "@emotion/react";
import { PortfolioPropertyCard } from "../components/PortfolioPropertyCard";
import { formatFirestoreTimestamp } from "../../app/utils/dateConversion";

export const Portfolio = () => {
  // theme
  const theme = useTheme();
  // get redux states
  const name = useSelector(portfolio_name);
  const key = useSelector(portfolio_key);
  const date_added = useSelector(portfolio_date_added);
  const properties = useSelector(portfolio_properties);

  return (
    <div
      style={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        height: "100dvh",
        padding: "5dvh",
      }}
    >
      <PortfolioPropertyCard
        name={name}
        date_added={formatFirestoreTimestamp(date_added)}
        properties={properties}
      />
    </div>
  );
};
