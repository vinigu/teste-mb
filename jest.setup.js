import '@testing-library/jest-dom/extend-expect';
import React from 'react';
React.useLayoutEffect = React.useEffect;

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,

      addListener: function () {},

      removeListener: function () {},
    };
  };
