import {useEffect, useState} from "react";
import {Menu, X} from "lucide-react";
import {ref,onValue} from "firebase/database";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {database} from "../firebase.js";
import LoadingComponent from "./utils/Loading.tsx";

interface NavItem {
    path: string;
    name: string;
}

const Navbar = () => {


    const [navListData, setNavListData] = useState<NavItem[]>([]);

    useEffect(()=>{

        const dataRef = ref(database,"navList");

        onValue(dataRef,(snapshot) =>{

            const data = snapshot.val();
            setNavListData(data);
        });
    });

    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
    const toggleNavbar = () =>{
        setIsMobileDrawerOpen(!isMobileDrawerOpen);
    }


    return (
        <nav className={'fixed z-50 w-full py-2 backdrop-blur-lg border-b-neutral-700 shadow-green-400'}>
            <div className={'container px-4 mx-auto relative text-sm'}>
                <div className={'flex justify-between items-center'}>
                    <div className={'flex items-center flex-shrink-0'}>
                        <img className={'h-10 w-10 mr-2 rounded-3xl'}
                             src={'https://avatars.githubusercontent.com/u/100054724?v=4'} alt={"logo"}/>
                        <span className={'text-xl tracking-tight'}>
                            Shakil IT Solution
                        </span>
                    </div>
                    <ul className={'hidden lg:flex ml-14 space-x-12'}>
                        {
                            navListData.length != 0 ?
                            navListData.map((item, i) => <li key={i}>
                                    <a href={item.path}>{item.name}</a>
                                </li>
                            )
                                :
                                <LoadingComponent/>
                        }
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="#" className="py-2 px-3 border rounded-md">
                            Sign In
                        </a>
                        <a href={'#'} className={'bg-gradient-to-r from-green-500 to-green-900 py-2 px-3 rounded-md'}>Create Account</a>
                    </div>
                    <div className={'lg:hidden md-flex flex-col justify-end'}>
                        <button onClick={toggleNavbar}>
                            {
                                isMobileDrawerOpen ? <X /> : <Menu />
                            }
                        </button>
                    </div>
                </div>
                {
                    isMobileDrawerOpen && (
                        <div className={'fixed right-0 mt-2 z-20 bg-neutral-900 w-full pb-12 flex flex-col justify-center items-center lg:hidden'}>

                            <ul className={'text-center'}>
                                {
                                    navListData.length != 0 ?
                                    navListData.map((item, i) => <li key={i} className={'py-4'}>
                                            <a href={item.path.toString()}>{item.name.toString()}</a>
                                        </li>
                                    ) : <LoadingComponent />
                                }

                            </ul>
                            <div className={'flex space-x-6 pt-5'}>
                                <div className="lg:hidden justify-center space-x-12 items-center">
                                    <a href="#" className="py-2 px-3 border rounded-md">
                                        Sign In
                                    </a>
                                    <a href={'#'}
                                       className={'bg-gradient-to-r from-green-500 to-green-900 py-2 px-3 rounded-md'}>Create an
                                        Account</a>
                                </div>
                            </div>


                        </div>
                    )
                }

            </div>

        </nav>
    );

}

export default Navbar
