import logo from "../../public/logo.png"
import Image from 'next/image'



function NavBar() {

    return (
        <>
            <div className="navbar bg-black h-16">

                <div className="navbar-start mx-6">
                    <Image src={logo} className="w-14" />
                    <div className=" hidden md:flex ml-3 text-white">
                        Farias Store✨
                    </div>
                </div>



                <div className="navbar-end">

                    <div className=" items-center gap-6 mx-6  ">
                        <div className="form-control h-8">
                            <input type="text" placeholder="Buscar" className="input bg-[#414141]  input-bordered w-36 md:w-auto" />
                        </div>
                    </div>

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 z-10 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Itens</span>
                                <span className="text-info">Total: R$999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">Carrinho</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div className="drawer drawer-end z-40">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                <label htmlFor="my-drawer" className="btn btn-ghost drawer-button"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
                            </div>
                            
                            <div className="drawer-side ">
                                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 min-h-full  bg-base-200 text-base-content">
                                    <li><a>Sidebar Item 1</a></li>
                                    <li><a>Sidebar Item 2</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default NavBar;