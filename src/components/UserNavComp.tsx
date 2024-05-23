import {useEffect, useState} from "react";
import {auth, database} from "../firebase.ts";
import {onValue, ref} from "firebase/database";
import LoadingComponent from "./utils/Loading.tsx";
import {Link} from "react-router-dom";
import User from "../obj/User.tsx";


export const handleLogout = ()=>{
    auth.signOut();
    window.location.reload();
}


const UserNavComp = () => {

    const [user, setUser] = useState<User | null>(null)


    useEffect(() => {

        const dataRef = ref(database, "users/" + auth.currentUser!.uid);

        onValue(dataRef, (snapshot) => {

            const data = snapshot.val() as User;
            setUser(data);
        });
    }, []);




    return (
        <div className={"flex flex-row gap-1"}>
            <Link to={'/profile'}
                  className={'flex drop-shadow-lg bg-gradient-to-r from-green-700 to-green-900 px-3 py-2 rounded-xl hover:bg-black'}>
                {
                    user != null ?
                        <span className={'text-sm'}>
                  {user.name}
          </span>
                        : <LoadingComponent/>
                }
            </Link>
            <button
                onClick={handleLogout}
                className={'flex flex-row drop-shadow-lg bg-gradient-to-r from-red-700 to-black px-3 py-2 rounded-xl hover:bg-black'}>
                {
                    <span className={'text-sm'}>
                    Logout
                    </span>
                }
            </button>
        </div>
    );
}

export default UserNavComp
