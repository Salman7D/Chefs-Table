const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 p-14 mb-[64px]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <button>Home</button>
        <button>Recipes</button>
        <button>About</button>
        <button>Search</button>

      </ul>
    </div>
    <a className="btn btn-ghost text-[#150B2B] text-3xl font-bold">Recipe Calories</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

        <button className="mr-7 text-[#150B2BB2] text-base font-normal">Home</button>
        <button className="mr-7 text-[#150B2BB2] text-base font-normal">Recipes</button>
        <button className="mr-7 text-[#150B2BB2] text-base font-normal">About</button>
        <button className="text-[#150B2BB2] text-base font-normal">Search</button>

    </ul>
  </div>
  <div className="navbar-end">
    <div className="mr-2">
        <input className="rounded-3xl bg-[#15B22D0D] w-[260px] px-6 py-3 text-[#150B2BB2] text-base font-normal" type="text" placeholder="Search"/>
    </div>
    <button>
        <img src="/src/assets/Images/Frame 5.png" alt="" />
    </button>
    
  </div>
</div>
        </div>
    );
};

export default Header;