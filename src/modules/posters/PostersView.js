import React from 'react';
import Mobile from './mobile/Mobile';
import Desktop from './desktop/Desktop';
import PostersHook from './PostersHook';


const PostersView = (
    {
      match,
    },
) => {
  const {
    fullScreen,
    selectedPosterMap,
    sideEffectsMap,
    sideEffectsPostersMap,
    mobileView,
    setMobileView,
    openFilterM,
    small,
    setFixed,
    postersBookmark,
    handlerBookmark,
    handlerSetPoster,
    switchFilterM,
    closePoster,
    switchFullScreen,
  } = PostersHook({match});

  console.log('fullScreen', fullScreen);

  return (
    <React.Fragment>
      {small ? (
        <Mobile
          type={match.params.type}
          setFixed={setFixed}
          mobileView={mobileView}
          fullScreen={fullScreen}
          openFilterM={openFilterM}
          selectedPosterMap={selectedPosterMap}
          sideEffectsPostersMap={sideEffectsPostersMap}
          postersBookmark={postersBookmark}
          handlerBookmark={handlerBookmark}
          switchFilterM={switchFilterM}
          closePoster={closePoster}
          handlerSetPoster={handlerSetPoster}
          setMobileView={setMobileView}
        />
      ) : (
        <Desktop
          type={match.params.type}
          small={small}
          fullScreen={fullScreen}
          selectedPosterMap={selectedPosterMap}
          sideEffectsMap={sideEffectsMap}
          postersBookmark={postersBookmark}
          handlerBookmark={handlerBookmark}
          switchFullScreen={switchFullScreen}
          sideEffectsPostersMap={sideEffectsPostersMap}
          closePoster={closePoster}
          handlerSetPoster={handlerSetPoster}
        />
      )}
    </React.Fragment>

  );
};

export default PostersView;
