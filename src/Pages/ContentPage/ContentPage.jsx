import BasicRow from 'components/Rows/BasicRow';
import CustomRow from 'components/Rows/CustomRow';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestDataThunk, selectUserData } from 'redux/dataReducer';

export const ContentPage = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData) return;
    dispatch(requestDataThunk());
  }, [userData, dispatch]);
  console.log(userData?.results);
  const showTable =
    Array.isArray(userData?.results) && userData?.results.length > 0;
  console.log(showTable);

  return (
    <div>
      {showTable && (
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
                <>
                <BasicRow
                  id={id}
                  name={name}
                  birthday_date={birthday_date}
                  address={address}
                  email={email}
                  phone_number={phone_number}
                />
                <CustomRow  id={id}/>
                </>
              )
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ContentPage;
