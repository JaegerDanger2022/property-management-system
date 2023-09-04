// dateUtils.js

export const formatFirestoreTimestamp = (timestamp) => {
  const date = new Date(
    timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
  );
  const formattedDate = date.toLocaleDateString();
  return formattedDate;
};
