import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => (
  <>
    <div>HEADER</div>
    <main>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
    <div>FOOTER</div>
  </>
);

export default SharedLayout;
