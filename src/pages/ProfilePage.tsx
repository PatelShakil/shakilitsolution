import{useEffect, useState} from "react";
import {auth, database} from "../firebase.ts";
import {Link} from "react-router-dom";
import {onValue, ref} from "firebase/database";
import User from "../obj/User.tsx";
import ProfileImage from "../components/utils/ProfileImage.tsx";
import LoadingComponent from "../components/utils/Loading.tsx";
import Navbar from "../components/Navbar.tsx";
import {handleLogout} from "../components/UserNavComp.tsx";

const ProfilePage = () => {

    const [user, setUser] = useState<User | null>(null)
    const [isVerified, setIsVerified] = useState(false)
    useEffect(() => {
        if(auth.currentUser != null) {
            setIsVerified(auth.currentUser.emailVerified);
            const dataRef = ref(database, "users/" + auth.currentUser!.uid);
            onValue(dataRef, (snapshot) => {
                const data = snapshot.val() as User;
                setUser(data);
            });
        }
    }, []);


    return (
        <div>
            <Navbar/>
            {
                isVerified ?
                    user != null ?
                        <div className="container mx-auto py-8">
                            <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                                <div className="col-span-4 sm:col-span-3">
                                    <div className="shadow rounded-lg p-6">
                                        <div className="flex flex-col items-center">
                                            <ProfileImage username={user.name.toString()}/>
                                            <h1 className="text-xl font-bold">{user.name}</h1>
                                            <p className="text-gray-300">{user.email}</p>
                                            <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                                <Link to="/editprofile"
                                                      className="bg-gray-400 hover:bg-blue-600 text-white py-2 px-4 rounded">Edit
                                                    Profile</Link>
                                                <button
                                                    onClick={handleLogout}
                                                    className={'flex flex-row drop-shadow-lg bg-gradient-to-r from-red-700 to-black px-4 py-2 rounded-xl hover:bg-black'}>
                                                    {
                                                        <span className={'text-sm'}>
                    Logout
                    </span>
                                                    }
                                                </button>
                                            </div>
                                        </div>
                                        <hr className="my-6 border-t border-gray-300"/>
                                    </div>
                                </div>
                                <div className="col-span-4 sm:col-span-9">
                                </div>
                            </div>
                        </div>
                        : <div className={"flex flex-col h-screen items-center justify-center"}>
                            <LoadingComponent/>
                        </div>
                    : <div className={"flex flex-col h-screen items-center justify-center"}>
                        <h1>Please Verify your Email</h1>
                    </div>
            }
        </div>
    );
}

export default ProfilePage;
