import React from 'react';
import { useDispatch } from 'react-redux';

import { activateUser, deactivateUser } from '../redux/actionCreator';

import makeHttpRequest from '../api/makeRequest';

interface TComponent {
  isVisible: boolean | undefined;
}

const Component: React.FC<any> = (props): React.ReactElement => {
  const [myState, setMyState] = React.useState(false);
  const dispatch = useDispatch();

  const { isVisible } = props;
  console.log('-----isVisible', isVisible);

  if (!Boolean(isVisible)) {
    return null;
  }

  React.useEffect(() => {
    setMyState((prevState) => !prevState);
    dispatch(activateUser());
    return dispatch(deactivateUser());
  }, [isVisible]);

  let userInfo = makeHttpRequest.get('/api/me');

  return (
    <div>
      {myState}: {userInfo.age}
    </div>
  );
};

export default Component;
