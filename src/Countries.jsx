import React, { useEffect, useState } from "react";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://xcountries-backend.azurewebsites.net/all");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCountries(data);
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div style={styles.container}>
      {countries.map((country, index) => (
        <div key={index} style={styles.card}>
          <img
            src={country.flag}
            alt={`Flag of ${country.name}`}
            style={styles.flag}
          />
          <p>{country.name}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    overflowY: "scroll",
    maxHeight: "80vh",
    padding: "16px",
    border: "1px solid #ccc",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "150px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "8px",
    background: "#f9f9f9",
  },
  flag: {
    width: "100px",
    height: "auto",
    marginBottom: "8px",
    borderRadius: "4px",
  },
};

export default Countries;
