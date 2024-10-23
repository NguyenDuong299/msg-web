const AdminSidebar = () => {
  return (
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </a>
        </li>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Interface</div>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-cog" />
            <span>Components</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed">
            <i className="fas fa-fw fa-wrench" />
            <span>Utilities</span>
          </a>
        </li>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Addons</div>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder" />
            <span>Pages</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area" />
            <span>Charts</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table" />
            <span>Tables</span>
          </a>
        </li>
        <hr className="sidebar-divider d-none d-md-block" />
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="25"
              viewBox="0 0 48 48"
            >
              <path
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M36 18L24 30L12 18"
              />
            </svg>
          </button>
        </div>
      </ul>
  );
};
export default AdminSidebar;
AdminSidebar.displayName = "AdminSidebar";
