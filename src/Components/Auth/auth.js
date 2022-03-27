// @ts-check
import { post, baseUrl } from "./api";

export const client_id = "6tWdAZrlxUA26FJSMjE7oKBpTNGaqJRl2bsmNMRb";
export const reactUrl = process.env.REACT_URL;

export const redirect_uri = reactUrl + "/set_token/";

export function getQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split("=");
        if (pair[0] === variable)

            return decodeURIComponent(pair[1]);

    }
    return false;
}

export function getAuth() {
    return localStorage.getItem("accessToken");
}

export function setAuth(token) {
    localStorage.setItem("accessToken", token);
}

export function getRefresh() {
    return localStorage.getItem("refreshToken");
}

export function setRefresh(token) {
    localStorage.setItem("refreshToken", token);

}

export async function refreshToken() {
    const state = getQueryVariable("state");
    const refresh_token = getRefresh();
    const kwargs = {
        client_id,
        redirect_uri,
        state,
        grant_type: "refresh_token",
        refresh_token: refresh_token,
        response_type: "token"
    };
    await post(`${baseUrl}/auth/o/token/`, kwargs).then((response) => {
        setRefresh(response.refresh_token);
        setAuth(response.access_token);
        timer = Date.now();
    });
}

export function refresh_user(tries = 0) {
    const access_token = getAuth();

    post(`${baseUrl}/auth/users/me/`, {}, { "Authorization": `Bearer ${access_token}` }).then((response) => {
        setObj("user", response.results[0]);
    }).catch((error) => {
        console.log(error);
        if (tries < 1)

            refreshToken().then(() => {
                refresh_user(1);
            });

    });


}

export function setObj(str, data) {
    localStorage.setItem(str, JSON.stringify(data));

}

export function getObj(str) {
    const item = localStorage.getItem(str);
    return JSON.parse(item || "{}");
}

export const performAuth = () => {
    const state = "st" + makeid(5);
    const kwargs = {
        client_id,
        redirect_uri,
        state,
        response_type: "code",
    };

    let pathname = window.location.pathname;

    localStorage.setItem(state, pathname + window.location.search);
    window.location.href = `${baseUrl}/auth/o/authorize/?` + new URLSearchParams(kwargs);
};

export const removeAuth = () => {
    setRefresh("");
    setAuth("");
    setObj("user", null);
};

export const refreshAuth = () => {
    const state = getQueryVariable("state");
    const refresh_token = getRefresh();
    const kwargs = {
        client_id,
        redirect_uri,
        state,
        grant_type: "refresh_token",
        refresh_token: refresh_token,
        response_type: "token"
    };

    post(`${baseUrl}/auth/o/token/`, kwargs).then((response) => {
        setRefresh(response.refresh_token);
        setAuth(response.access_token);
        timer = Date.now();
    });
};

let timer = Date.now();

function makeid(length) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++)

        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));

    return result;
}
