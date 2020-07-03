import React from "react";
import "../styles/DataBody.css";

function DataBody({ users }) {
  function formatDate(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  }
  formatDate();
  return (
    <tbody>
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ login, name, picture, phone, email, dob }) => {
          return (
            <tr key={login.uuid}>
              {/* Here we have to render a td for each argument in users.map*/ }
              <td key={name.uuid}></td>
              <td key={picture.uuid}></td>
              <td key={phone.uuid}></td>
              <td key={email.uuid}></td>
              <td key={dob.uuid}></td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </tbody>
  );
}

export default DataBody;