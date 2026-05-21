import TopBar from './TopBar';
import MidHeader from './MidHeader';
import NavMenu from './NavMenu';

const Header = () => {
  return (
    // FIX: Added relative and z-[999] to establish a dominant stacking context
    <header className="w-full flex flex-col relative z-[999]">
      <TopBar />
      <MidHeader />
      <NavMenu />
    </header>
  );
};

export default Header;