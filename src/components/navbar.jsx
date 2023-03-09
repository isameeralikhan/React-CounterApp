// Stateless Functional Component
 
const NavBar = ({totalCounter}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">
                    Navbar 
                    <span className="badge rounded-pill m-2 text-bg-secondary">
                        {totalCounter}
                    </span>{' '}
                </span>
            </div>
        </nav>
    );
}
 
export default NavBar;