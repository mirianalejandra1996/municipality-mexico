import { Helmet } from 'react-helmet-async';

import { AppView } from 'src/sections/stateCoordinationDelegates/view';
// ----------------------------------------------------------------------

  export default function StateCoordinationDelegates() {
    return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <AppView />
    </>
  );
}
