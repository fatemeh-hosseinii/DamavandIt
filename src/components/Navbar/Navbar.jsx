import { useSelector, useDispatch } from "react-redux";
import logo from "../../../public/assets/media/LogoDamavand.png";
import { useEffect, useState } from "react";
import { fetchpost } from "../../Redux/NavbarSlice";
import { Link, NavLink } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { loading, error, Navbar } = useSelector((state) => state.Navbar);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchpost());
    }, [dispatch]); 
    const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
      <>
    <div className="w-full  flex  flex-row justify-between p-4 shadow-xl sticky top-0 z-50 bg-[white] ">
            <div className="lg:flex hidden flex-row w-[70%] gap-5">
                <img className="w-[14%] " src={logo} alt="Logo" />
                <ul className="flex flex-row justify-around items-center w-[60%]">
                    {Navbar.map((elem, index) => (
                        <li key={index} className="active">
                            <NavLink
                                to={elem.path || "/"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "nav-link text-[blue] text-[15px] font-bold"
                                        : "nav-link text-[#C1C1C1] text-[15px]"
                                }
                            >
                                {elem.name || "Home"}
                            </NavLink>
                        </li>
                    ))}
                </ul>

              
            </div>
            
                <div className="relative lg:hidden flex flex-row justify-between">
                    <img className="lg:w-[14%] w-[30%] sm:w-[22%] md:w-[22%]" src={logo} alt="Logo"/> 

                    <div
                        onClick={toggleMenu} // Toggle menu on click
                        className=" text-[#ffa200] mt-1 w-[10%] text-[16px] rounded-md"
                        aria-expanded={menuOpen}
                        aria-label="Toggle navigation"
                    >
                        {!menuOpen ? (
                        // آیکون همبرگر (سه خط افقی)
                        <svg className="sm:mt-2 sm:w-9 sm:h-9 md:w-14 md:h-14 md:mt-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        ) : (
                        // آیکون ضربدر (برای بستن منو)
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            fill="currentColor"
                            />
                        </svg>
                        )}
                    </div>
                </div>


            {/* Mobile sidebar menu */}

            <div
            className={`fixed inset-y-0 right-0 w-[50%] bg-[#ffeab4] shadow-lg z-50 transform ${
                menuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out`}
            >
                <ul className="p-6 flex flex-col gap-3">
                    {Navbar.map((elem) => (
                    <NavLink
                        key={elem.id}
                        to={elem.path || "/"}
                        className={({ isActive }) =>
                        `p-2 rounded-lg font-bold text-[15px] ${
                            isActive ? "text-[#FAA518] bg-white shadow-sm" : "text-[#3e3e3e]"
                        }`
                        }
                    >
                        {elem.name}
                    </NavLink>
                    ))}
                </ul>
            </div>


            {/* Layer for closing sidebar */}
            {menuOpen && (
                <div
                    onClick={toggleMenu}
                    className="fixed inset-0 bg-black opacity-5 z-40"
                ></div>
            )}
    

        <div className="w-[28%] p-1 lg:flex hidden flex-row justify-between">
            <div className="search-box bg-[#fafafa] mt-2 flex flex-row justify-between w-[60%] rounded-lg">
                <div className="p-2">
                    <input
                        type="text"
                        className="outline-none"
                        placeholder="جستوجو..."
                    />
                </div>

                <button className="px-3 py-1 rounded-l-lg bg-[#F5F6F7]">
                    <CiSearch className="text-[#C1C1C1] font-bold" size={22} />
                </button>
            </div>

            <div className="w-[30%] flex flex-row justify-between">
                <button className="bg-[white] px-3 rounded-lg py-2 mt-2 border-[1px] border-[blue]">
                    <CiShoppingCart className="text-[blue]" size={24} />
                </button>
                <button className="bg-[blue] px-3 rounded-lg py-2 mt-2">
                    <CiUser className="text-[white] font-bold" size={24} />
                </button>
            </div>
        </div>
    </div>
      </>

    );
};

export default Navbar;
