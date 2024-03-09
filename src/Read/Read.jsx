import { useEffect, useState } from "react";

const Read = () => {
  const [datas, setDatas] = useState([]);
  // Get or Read datas from the database
  const getAllDatas = () => {
    fetch("http://localhost:5000/datas/all", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data Read:", data);
        setDatas(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getAllDatas();
  }, []);

  return (
    <div>
      {datas.map((user, index) => (
        <div key={index} className="flex gap-10">
          <h1>
            Email: <span className="font-bold">{user.email}</span>
          </h1>
          <p>
            Password: <span className="font-bold">{user.password}</span>{" "}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Read;
