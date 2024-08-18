import { Link, useLocation } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher.tsx";
import { toast } from "react-hot-toast";

export default function Navigation() {
    const showToast = () => {
        toast("Successfully Toasted!");
    };

    const location = useLocation();
    const pathnames = location.pathname.split("/").filter(x => x);

    return (
        <div className="navbar bg-base-100 h-16 min-h-[4rem] flex justify-between items-center">
            <div className="breadcrumbs text-sm">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {pathnames.map((value, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                        return (
                            <li key={to}>
                                <Link to={to}>{value}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="flex-1 flex justify-center">
                <button onClick={showToast} className="btn btn-primary">Show toast</button>
            </div>
            <div className="flex-none">
                <ThemeSwitcher />
            </div>
        </div>
    );
}