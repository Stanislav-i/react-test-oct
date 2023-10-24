import React from 'react';

const BasicRow = ({
  id,
  name,
  birthday_date,
  address,
  email,
  phone_number,
  handleEditBtnClick,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{birthday_date}</td>
      <td>{address}</td>
      <td>{email}</td>
      <td>{phone_number}</td>
      <td>
        <button
          type="button"
          onClick={event =>
            handleEditBtnClick(
              event,
              id,
              name,
              birthday_date,
              address,
              email,
              phone_number
            )
          }
          style={{
            padding: '5px 10px',
            backgroundColor: 'rgb(218, 118, 229)',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

export default BasicRow;
