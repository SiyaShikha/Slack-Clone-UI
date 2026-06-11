const TopNav = () => {
  return (
    <header className="h-12 grid grid-cols-3 items-center px-4">
      <div>Left side</div>

      <div className="flex justify-center gap-4 text-white">
        <input
          type="text"
          placeholder="Describe what are you looking for"
          className="w-600 rounded px-3 py-1 bg-(--light-purple)"
        />
      </div>

      <div className="flex justify-end">
        <button>User</button>
      </div>
    </header>
  );
};

export default TopNav;
