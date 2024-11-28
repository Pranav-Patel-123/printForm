import React from "react";
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Form from "./Form";

function App() {
  return (
    <Router>
      <div style={styles.appContainer}>
      <Routes>
        <Route path="/" element={<Navigate to="/form" />} /> {/* Redirect to /form */}
        <Route path="/form" element={<FormWithQueryParam />} />
      </Routes>

      </div>
    </Router>
  );
}

const styles = {
  appContainer: {
    fontFamily: "'Roboto', sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: "#f0f2f5",
    minHeight: "100vh",
  },
};

const FormWithQueryParam = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const uniqueId = params.get("uniqueId");

  if (!uniqueId) {
    return <div>Error: uniqueId is missing!</div>;
  }

  return <Form uniqueId={uniqueId} />;
};

export default App;
 