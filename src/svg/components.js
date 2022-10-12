import React from 'react';

const Search = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z"
      stroke="#9595B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 20L16 16" stroke="#9595B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Close = ({hover}) => (
  <svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.8 1.2002L1.20001 10.8002" stroke={hover ? '#383842' : '#9595B1'} strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.20001 1.2002L10.8 10.8002" stroke={hover ? '#383842' : '#9595B1'} strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Filter = () => (
  <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.49999 1H14.5C14.644 1.05051 14.7745 1.13331 14.8816 1.24206C14.9887 1.35082 15.0695 1.48264 15.1177 1.62742C15.166 1.77221 15.1805 1.92612 15.1601 2.07737C15.1396 2.22861 15.0849 2.37318 15 2.5L9.99998 8V15L5.99999 12V8L0.999985 2.5C0.915076 2.37318 0.860321 2.22861 0.839913 2.07737C0.819506 1.92612 0.833987 1.77221 0.882249 1.62742C0.930511 1.48264 1.01127 1.35082 1.11835 1.24206C1.22542 1.13331 1.35597 1.05051 1.49999 1Z"
      stroke="#9595B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Bookmarks = ({active, hover}) => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 4H15C15.5304 4 16.0391 4.21071 16.4142 4.58579C16.7893 4.96086 17 5.46957 17 6V20L12 17L7 20V6C7 5.46957 7.21071 4.96086 7.58579 4.58579C7.96086 4.21071 8.46957 4 9 4Z"
      stroke={active ? '#43B949' : hover ? 'black' : '#9595B1'} strokeWidth="1.5" strokeLinecap="round"
      strokeLinejoin="round"/>
  </svg>
);

const PasswordView = (
    {
      hover,
    },
) => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
      stroke={hover ? '#000000' : '#9595B1'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z"
      stroke={hover ? '#000000' : '#9595B1'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Password = (
    {
      hover,
    },
) => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3L21 21" stroke={hover ? '#000000' : '#9595B1'} strokeWidth="1.5" strokeLinecap="round"
      strokeLinejoin="round"/>
    <path
      d="M10.584 10.587C10.2087 10.962 9.99775 11.4708 9.99756 12.0013C9.99737 12.5318 10.2079 13.0407 10.583 13.416C10.958 13.7913 11.4667 14.0022 11.9973 14.0024C12.5278 14.0026 13.0367 13.792 13.412 13.417"
      stroke={hover ? '#000000' : '#9595B1'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path
      d="M17.357 17.349C15.726 18.449 13.942 19 12 19C8 19 4.667 16.667 2 12C3.369 9.605 4.913 7.825 6.632 6.659M9.363 5.365C10.2204 5.11972 11.1082 4.99684 12 5C16 5 19.333 7.333 22 12C21.222 13.361 20.388 14.524 19.497 15.488L9.363 5.365Z"
      stroke={hover ? '#000000' : '#9595B1'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Delete = (
    {
      hover,
    },
) => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 7H20" stroke={hover ? '#000000' : '#9595B1'} strokeWidth="1.5" strokeLinecap="round"
      strokeLinejoin="round"/>
    <path d="M10 11V17" stroke={hover ? '#000000' : '#9595B1'} strokeWidth="1.5" strokeLinecap="round"
      strokeLinejoin="round"/>
    <path d="M14 11V17" stroke={hover ? '#000000' : '#9595B1'} strokeWidth="1.5" strokeLinecap="round"
      strokeLinejoin="round"/>
    <path
      d="M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7"
      stroke={hover ? '#000000' : '#9595B1'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path
      d="M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7"
      stroke={hover ? '#000000' : '#9595B1'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PullDown = (
    {
      hover,
    },
) => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9L12 15L18 9L6 9Z" stroke={hover ? '#000000' : '#9595B1'} strokeWidth="1.5" strokeLinecap="round"
      strokeLinejoin="round"/>
  </svg>
);

const Upload = (
    {
      hover,
    },
) => (
  <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M38 35.9999C39.8565 35.9999 41.637 35.2624 42.9497 33.9497C44.2625 32.6369 45 30.8564 45 28.9999C45 27.1434 44.2625 25.3629 42.9497 24.0502C41.637 22.7374 39.8565 21.9999 38 21.9999H36C36.2918 20.6998 36.2962 19.3607 36.0131 18.0591C35.7299 16.7575 35.1646 15.5188 34.3495 14.4138C33.5344 13.3087 32.4855 12.359 31.2626 11.6189C30.0397 10.8787 28.6667 10.3625 27.2222 10.0999C25.7777 9.83726 24.2898 9.83326 22.8435 10.0881C21.3973 10.343 20.021 10.8517 18.7932 11.5853C16.3135 13.0669 14.5893 15.3743 14 17.9999C11.8679 17.9145 9.77106 18.5407 8.06852 19.7713C6.36598 21.0019 5.16363 22.7603 4.66732 24.7456C4.17102 26.7308 4.41164 28.8193 5.34798 30.6535C6.28432 32.4877 7.85814 33.9535 9.79998 34.7999"
      stroke={hover ? '#000000' : '#9595B1'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 26V44" stroke={hover ? '#000000' : '#9595B1'} strokeWidth="3" strokeLinecap="round"
      strokeLinejoin="round"/>
    <path d="M18 38L24 44L30 38" stroke={hover ? '#000000' : '#9595B1'} strokeWidth="3" strokeLinecap="round"
      strokeLinejoin="round"/>
  </svg>

);


export const Icon = (
    {
      name,
      active,
      hover,
    },
) => {
  let result;
  switch (name) {
    case 'search':
      result = (
        <Search/>
      );
      break;
    case 'close':
      result = (
        <Close hover={hover}/>
      );
      break;
    case 'filter':
      result = (
        <Filter/>
      );
      break;
    case 'bookmarks':
      result = (
        <Bookmarks hover={hover} active={active}/>
      );
      break;
    case 'password-view':
      result = (
        <PasswordView hover={hover}/>
      );
      break;
    case 'password':
      result = (
        <Password hover={hover} active={active}/>
      );
      break;
    case 'delete':
      result = (
        <Delete hover={hover}/>
      );
      break;
    case 'pull-down':
      result = (
        <PullDown hover={hover}/>
      );
      break;
    case 'upload':
      result = (
        <Upload hover={hover}/>
      );
      break;
    default:
      result = null;
  }
  return result;
};
