import React from "react";
import Countries from "./Countries";

const App = () => {
  return (
    <div style={styles.app}>
      <h1>Country Flags</h1>
      <Countries />
    </div>
  );
};

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "16px",
    backgroundColor: "#f5f5f5",
  },
};

export default App;
