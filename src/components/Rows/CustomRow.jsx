import React from 'react';
import { useSelector } from 'react-redux';
import { selectEditData } from 'redux/editDataReducer';

const CustomRow = ({ id, handleCancelClick }) => {
  const { name, birthday_date, address, email, phone_number } =
    useSelector(selectEditData);

  return (
    <tr>
      <td>{id}</td>
      <td>
        <input
          type="text"
          name="name"
          placeholder="Enter new name..."
          defaultValue={name}
        />
      </td>
      <td>
        <input
          type="text"
          name="birthday"
          placeholder="Enter new birthday..."
          defaultValue={birthday_date}
        />
      </td>
      <td>
        <input
          type="text"
          name="address"
          placeholder="Enter new address..."
          defaultValue={address}
        />
      </td>
      <td>
        <input
          type="text"
          name="phone"
          placeholder="Enter new phone number..."
          defaultValue={phone_number}
        />
      </td>
      <td>
        <input
          type="email"
          name="email"
          placeholder="Enter new email..."
          defaultValue={email}
        />
      </td>
      <td>
        <button
          type="submit"
          style={{
            padding: '1px 10px',
            backgroundColor: 'rgb(218, 118, 229)',
            borderRadius: '5px',
            cursor: 'pointer',
            marginBottom: '2px',
          }}
        >
          Edit
        </button>
        <button
          type="button"
          style={{
            padding: '1px 10px',
            backgroundColor: 'rgb(218, 118, 229)',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default CustomRow;
