import MainNavigation from './MainNavigation';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className="my-12 mx-auto w-11/12 max-w-2xl">{props.children}</main>
    </div>
  );
}

export default Layout;
