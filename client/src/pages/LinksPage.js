import React, {useCallback, useContext, useState} from 'react'
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/Auth.context";

export const LinksPage = () => {
    const [links, setLinks] = useState([])
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)
    const fetchLinks = useCallback( async () => {
        try {
            const fetched = await request('/api/link', 'GET', null , {
                Authorization: `Bearer ${token}`
            })
            setLinks(fetched)
        } catch (e) {}
    }, [token, request] )
    

    return (
        <h1>Links Page</h1>
    )
}
