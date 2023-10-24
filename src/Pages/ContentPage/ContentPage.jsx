import BasicRow from 'components/Rows/BasicRow';
import CustomRow from 'components/Rows/CustomRow';
// import { nanoid } from 'nanoid';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/authReducer';
import {
  nextPage,
  previousPage,
  requestDataThunk,
  selectDataOffset,
  selectUserData,
} from 'redux/dataReducer';
import { selectEditDataId, setEditData, setId } from 'redux/editDataReducer';

export const ContentPage = () => {
  const userData = useSelector(selectUserData);
  const editDataId = useSelector(selectEditDataId);
  const dispatch = useDispatch();
  const offset = useSelector(selectDataOffset);

  useEffect(() => {
    dispatch(requestDataThunk(offset));
  }, [dispatch, offset]);

  useEffect(() => {
    if (userData) return;
    dispatch(requestDataThunk(offset));
  }, [userData, dispatch, offset]);
  // console.log(userData?.results);

  const handleEditBtnClick = (
    e,
    id,
    name,
    birthday_date,
    address,
    email,
    phone_number
  ) => {
    e.preventDefault();
    dispatch(setId(id));
    dispatch(
      setEditData({
        id,
        name,
        birthday_date,
        address,
        email,
        phone_number,
      })
    );
  };

  const handleLeftArrowClick = () => {
    dispatch(previousPage());
  };

  const handleRightArrowClick = () => {
    dispatch(nextPage());
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const newName = form.elements.name.value;
    const newBirthday = form.elements.birthday.value;
    const newAddress = form.elements.address.value;
    const newEmail = form.elements.email.value;
    const newPhone = form.elements.phone.value;
    console.log({
      name: newName,
      birthday: newBirthday,
      address: newAddress,
      email: newEmail,
      phone: newPhone,
    });
    dispatch(setId(null));

    // dispatch(setEditData)
  };

  const handleCancelClick = e => {
    dispatch(setId(null));
  };

  const handleLogout = () => {
    dispatch(logOut());
  };

  // ======Додаткова функція на створення даних

  // const handleAddingaDataSubmit = (e)=> {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   const newName = form.elements.newDataName.value;
  //   const newBirthday = form.elements.newDataBirthday.value;
  //   const newAddress = form.elements.newDataAddress.value;
  //   const newEmail = form.elements.newDataEmail.value;
  //   const newPhone = form.elements.newDataPhone.value;
  //   console.log({
  //     name: newName,
  //     birthday: newBirthday,
  //     address: newAddress,
  //     email: newEmail,
  //     phone: newPhone,
  //   });
  // }

  const showTable =
    Array.isArray(userData?.results) && userData?.results.length > 0;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'Column',
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {showTable && (
        <form onSubmit={handleSubmit}>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Birthday</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.results.map(
                ({ id, name, birthday_date, address, email, phone_number }) => (
                  <Fragment key={id}>
                    {editDataId !== id ? (
                      <BasicRow
                        id={id}
                        name={name}
                        birthday_date={birthday_date}
                        address={address}
                        email={email}
                        phone_number={phone_number}
                        handleEditBtnClick={handleEditBtnClick}
                      />
                    ) : (
                      <CustomRow
                        id={id}
                        handleCancelClick={handleCancelClick}
                      />
                    )}
                  </Fragment>
                )
              )}
            </tbody>
          </table>
        </form>
      )}

      <div
        style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <button
          type="button"
          onClick={handleLeftArrowClick}
          style={{
            padding: '5px 10px',
            backgroundColor: 'rgb(218, 118, 229)',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          &#60;
        </button>
        <button
          type="button"
          onClick={handleRightArrowClick}
          style={{
            padding: '5px 10px',
            backgroundColor: 'rgb(218, 118, 229)',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          &#62;
        </button>
      </div>

      <button
        type="button"
        onClick={handleLogout}
        style={{
          padding: '5px 20px',
          backgroundColor: 'rgb(218, 118, 229)',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Logout
      </button>
      {/* ======Додатковий елемент для створення даних */}
      {/* <h2>Add data</h2>
      <form onSubmit={handleAddingaDataSubmit}>
        <input type="text" name='newDataName' required='required' placeholder='Enter a name...'/>
        <input type="text" name='newDataBirthday' placeholder='Enter birthday...'/>
        <input type="text" name='newDataAddress' placeholder='Enter address...'/>
        <input type="phone" name='newDataPhone' placeholder='Enter phone number...'/>
        <input type="email" name='newDataEmail' placeholder='Enter email...'/>
        <button type='submit'>Add data</button>
      </form> */}
    </div>
  );
};

export default ContentPage;
