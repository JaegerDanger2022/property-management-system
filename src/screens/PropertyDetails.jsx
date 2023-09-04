import React from "react";
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

export const PropertyDetails = ({}) => {
  // get the details of the property
  const name = useSelector(property_name);
  const address = useSelector(property_address);
  const numberOfUnits = useSelector(property_numberOfUnits);
  const availableUnits = useSelector(property_availableUnits);
  const key = useSelector(property_key);
  const date_added = useSelector(property_date_added);
  const images = useSelector(property_images);

  return (
    <div>
      name:{name}
      address:{address}
      numberOfUnits:{numberOfUnits}
      availableUnits:{availableUnits}
    </div>
  );
};
