import React, { useEffect, useState } from "react";

const Bonanaza = () => {
  const [bonanza, setbonanza] = useState(false);
  useEffect(() => {
    // setbonanza(true)
    setInterval(() => {
      setbonanza(!bonanza);
    }, 2000);
  }, []);

  return (
    <div>
      {bonanza ? (
        <div style={{ fontWeight: "500", color: "rgb(50,49,68)" }}>
          BEAUTY BONANZA Get Your Daily Dose Of Amazing Deals
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Bonanaza;
