// @ts-check

import { useHistory } from "react-router-dom";
import { post, baseUrl } from "./api";
import { getQueryVariable, setObj, refresh_user, client_id, redirect_uri, setAuth, setRefresh } from "./auth";

export default function SetTocken() {
    const history = useHistory();

    const code = getQueryVariable("code");
    const state = getQueryVariable("state");
    const error = getQueryVariable("error");
        
    if(error)
        history.replace("/");
        
        const kwargs = {
            client_id,
            redirect_uri,
            state,
            grant_type: "authorization_code",
            code: code,
            response_type: "token"
        };


        post(`${baseUrl}/auth/o/token/`, kwargs).then((response) => 
        {
            setAuth(response.access_token);
            setRefresh(response.refresh_token);

            if(!state)
                throw new Error("No state");
            
            const location = localStorage.getItem(state);

            post(`${baseUrl}/auth/users/me/`, {}, {"Authorization": `Bearer ${response.access_token}`}).then((response) => 
            {
                setObj("user", response.results[0]);
                if (location) 
                    history.push(location);
                else 
                    history.push("/");
                
            }).catch(() =>
            {
                // toast.error("Oops something went wrong", {
                //     position: "bottom-center"
                // }); TODO: Actually show something
                setTimeout(history.push, 1000, "/");
            });


        }).catch(reason => 
        {
            console.log(reason);
            refresh_user();
        });

        return (<></>);
}