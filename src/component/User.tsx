import {useEffect, useState} from "react";
import UserData from "../types/user";
import UserService from "../service/UserService";
import LoginService from "../service/LoginService";

const initialRolesState = {
    id: 0,
    name: ""
}

const initialUserState = {
    id: 0,
    username: "",
    password: "",
    enabled: false,
    roles: [initialRolesState],
}

const User = () => {

    const [currentUser, setCurrentUser] = useState<UserData>(initialUserState);

    const getUser = () => {
        LoginService.login()
            .then((response: any) => {
                console.log("Login : ",response.data);
            })
            .catch((error: any) => {
                console.log(error)
            })
        UserService.getUser()
            .then((response: any) => {
                console.log(response.data);
                setCurrentUser(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            }
        )
    }

    useEffect(() => {

        getUser();
    }, []);


    return ( <div>
        {
            currentUser.username ? (

                <>
                    <div className="align-items-center justify-content-center">
                        <div className="card mb-3" style={{ maxWidth: "450px"}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/img/user.png" className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h3 className="card-title">{currentUser?.username} - Enabled: {currentUser?.enabled}</h3>
                                        <hr/>
                                        {
                                            currentUser?.roles ? (
                                                currentUser?.roles?.map(rol => <p key={rol.id} >{rol.name}</p>)
                                            ) : (
                                                <p>There are no roles.</p>
                                            )

                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
            <div>Theres no user</div>
        )
        }
    </div>
    )
}

export default User;