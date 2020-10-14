import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-4 bg-primary text-white">
      <div style={styles.footer}>
        <p>Place sticky footer content here.</p>
        <p>Hello World!</p>
      </div>
    </footer>
  );
};

const styles = {
    footer: {
      textAlign: "center",
      paddingTop: "0.5rem",
      paddingBottom: "1rem",
      color: "white",
    },
  };

export default Footer;
