// Parent Component
import React, { useState, useEffect } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [userData, setUserData] = useState('');

  useEffect(() => {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setUserData(data.data);
      });
  }, []);

  return (
    <div>
      <ChildComponent firstName={userData.charAt(0)} />
    </div>
  );
}

export default ParentComponent;
