import React, { useEffect, useState } from 'react';

import { DesktopNavigation } from './desktop/DesktopNavigation';
import { MobileNavigation } from './mobile/MobileNavigation';
import { useRouter } from 'next/router';

export const Navigation = () => {
  const [matches, setMatches] = useState(true);
  const router = useRouter();

  const isSpecificRoute = () => {
    //const path = "/every.near/widget/every.thing.view";
    const queryParam = /^.*\.near\/thing\/artist\/.*$/;

    const pathValue = Array.isArray(router.query.path) 
        ? router.query.path.join('') 
        : router.query.path;

    if (!pathValue) {
        return false;
    }

    return queryParam.test(pathValue);
}

  useEffect(() => {
    setMatches(window.matchMedia('(min-width: 1025px)').matches);
  }, []);

  useEffect(() => {
    window.matchMedia('(min-width: 1025px)').addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  if (isSpecificRoute()) {
    return null;
  }
  return (
    <>
      {matches && <DesktopNavigation />}
      {!matches && <MobileNavigation />}
    </>
  );
};
