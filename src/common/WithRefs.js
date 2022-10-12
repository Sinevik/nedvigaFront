import {withState} from 'recompose';

class RefsHolder {
  saveRef(name) {
    return (value) => {
      (this)[name] = value;
    };
  }
}

export default () => withState('refs', 'setRefs', () => new RefsHolder());
