import {useDispatch, useSelector} from 'react-redux';
import {Actions} from '../../redux/Actions';
import {useEffect} from 'react';

export const CreatePosterHook = ({match, history}) => {
  // redux
  const {
    createPoster,
    setKind,
    setInit,
    setContacts,
  } = Actions('createPoster')(useDispatch());
  const page = useSelector((state) => state.createPoster.page);
  const state = useSelector((state) => state.createPoster);
  const error = useSelector((state) => state.createPoster.error);
  const sideEffects = useSelector((state) => state.createPoster.sideEffects);
  const kind = useSelector((state) => state.createPoster.kind);
  //

  const goToMyPosters = () => {
    history.push('/myPosters/posters');
  };

  const goToCreatePoster = () => {
    createPoster(goToMyPosters);
  };

  useEffect(() => {
    if (match.params.type !== 'edit') {
      setInit();
      if (localStorage.getItem('contacts')) {
        setContacts(JSON.parse(localStorage.getItem('contacts')));
      }
    }
  }, []);
  useEffect(() => {
    setKind(match.params.kind);
  }, []);
  return {
    page,
    state,
    goToCreatePoster,
    error,
    sideEffects,
    kind,
  };
};
