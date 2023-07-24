import NavLink from './components/NavLink';

const AppHeader = () => {
  return (
    <div className="flex items-center gap-x-20 px-10 py-5">
      <h1 className="text-4xl font-bold flex gap-x-2">
        <span className="text-green-700">Coolest</span>
        <span className="text-gray-600">Website</span>
      </h1>

      <div className="flex items-center gap-x-4">
        <NavLink text="home" to="/" />

        <NavLink text="users" to="/users" />
      </div>
    </div>
  );
};

export default AppHeader;
