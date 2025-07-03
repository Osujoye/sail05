import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosFetch = () => {
  const [getAxiosUsers, setGetAxiosUsers] = useState([]);

  const getAllUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setGetAxiosUsers(res.data);
  };

  console.log(getAxiosUsers);

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <h1>API consumption with AXIOS</h1>
      <table className=" m-10">
        <thead>
          <tr>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>address</th>
            <th>phone</th>
            <th>website</th>
            <th>company</th>
          </tr>
        </thead>
        <tbody>
          {getAxiosUsers.map(
            (
              { name, username, email, address, phone, website, company },
              i
            ) => (
              <tr key={i}>
                <td> {name} </td>
                <td> {username} </td>
                <td> {email} </td>
                <td>
                  {" "}
                  {address.street}, {address.city}{" "}
                </td>
                <td> {phone} </td>
                <td>
                  {" "}
                  <a href={website}> {website} </a>{" "}
                </td>
                <td> {company.name} </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AxiosFetch;
