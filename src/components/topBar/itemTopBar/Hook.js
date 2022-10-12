import {useEffect, useState} from 'react';
import {useMedia} from 'react-media';

const Hook = (
    {
      edit,
      page,
      number,
      reduxFields,
    },
) => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 1024px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  const [itemState, setItemState] = useState(null);
  const [error, setError] = useState('black');
  useEffect(() => {
    if (number === page) {
      setItemState(true);
    } else if (itemState) {
      if (!reduxFields.some((item) => !item)) {
        setError('green');
      } else {
        setError('red');
      }
    }
  }, [page]);
  return {
    itemState,
    error,
    small,
  };
};


export default Hook;
