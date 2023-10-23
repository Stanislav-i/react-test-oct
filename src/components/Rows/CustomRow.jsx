import React from 'react';

const CustomRow = ({id}) => {
  return (
    <tr>
        <td>{id}</td>
      <td>
        <input type="text" name="name" placeholder="Enter new name..." />
      </td>
      <td>
        <input type="text" name="birthday" placeholder="Enter new birthday..." />
      </td>
      <td>
        <input type="text" name="address" placeholder="Enter new address..." />
      </td>
      <td>
        <input type="text" name="phone" placeholder="Enter new phone number..." />
      </td>
      <td>
        <input type="email" name="email" placeholder="Enter new email..." />
      </td>
      <td>{}</td>
    </tr>
  );
};

export default CustomRow;
