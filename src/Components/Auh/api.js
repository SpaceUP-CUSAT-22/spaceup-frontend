import {getAuth} from "./auth";

export const baseUrl = process.env.BASE_URL;

export async function get(url, kwargs = {}, headers = {})
{
    const response = await fetch(url + "?" + new URLSearchParams(kwargs),
        {
            headers: {
                ...headers
            }
        }
    );
    if (response.status > 300)
    
        throw (response);
    
    else
    {

        console.log(response);
        return response.json();
    }
}

export async function post(url, kwargs = {}, headers = {})
{
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: JSON.stringify(kwargs)
    }
    );
    if (response.status > 300)
    
        throw (response);
    
    else
    {

        console.log(response);
        return response.json();
    }
}

export async function filePost(url, formData, headers = {})
{
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            ...headers
        },
        body: formData
    }
    );
    if (response.status > 300)
    
        throw (response);
    
    else
    {
        console.log(response);
        return response.json();
    }
}


export async function filePatch(url, formData, headers = {})
{
    const response = await fetch(url, {
        method: "PATCH", // *GET, POST, PUT, DELETE, etc.
        headers: {
            ...headers
        },
        body: formData
    });

    if (response.status > 300)
        throw (response);
    else
        return response.json();
}


export async function patch(url, kwargs = {}, headers = {})
{
    const response = await fetch(url, {
        method: "PATCH", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: JSON.stringify(kwargs)
    }
    );
    if (response.status > 300)
    
        throw (response);
    
    else
    {

        console.log(response);
        return response.json();
    }
}