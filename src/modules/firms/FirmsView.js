import React from 'react';
import Mobile from './mobile/Mobile';
import Desktop from './desktop/Desktop';
import FirmsHook from './FirmsHook';


const FirmsView = (
    {
      match,
    },
) => {
  const {
    small,
    mobileView,
    fullScreen,
    selectedFirmMap,
    sideEffectsMap,
    sideEffectsFirmsMap,
    closeFirm,
    handlerSetFirm,
    switchFullScreen,
    setMobileView,
  } = FirmsHook({match});

  return (
    <React.Fragment>
      {small ? (
        <Mobile
          mobileView={mobileView}
          fullScreen={fullScreen}
          selectedFirmMap={selectedFirmMap}
          sideEffectsFirmsMap={sideEffectsFirmsMap}
          closeFirm={closeFirm}
          handlerSetFirm={handlerSetFirm}
          setMobileView={setMobileView}
        />
      ) : (
        <Desktop
          small={small}
          fullScreen={fullScreen}
          selectedFirmMap={selectedFirmMap}
          sideEffectsMap={sideEffectsMap}
          switchFullScreen={switchFullScreen}
          sideEffectsFirmsMap={sideEffectsFirmsMap}
          closeFirm={closeFirm}
          handlerSetFirm={handlerSetFirm}
        />
      )}
    </React.Fragment>

  );
};

export default FirmsView;
