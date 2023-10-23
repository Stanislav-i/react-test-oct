import React from 'react';

const BasicRow = ({id, name, birthday_date, address, email, phone_number}) => {
    return (
                <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{birthday_date}</td>
                <td>{address}</td>
                <td>{email}</td>
                <td>{phone_number}</td>
                <td>{}</td>
              </tr>)

};

export default BasicRow;