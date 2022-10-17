import React, { useState, useContext, createContext } from 'react'

export const LoginContext = createContext()

export const UseLoginContext = () => useContext(LoginContext)

export const LoginProvider = ({ children }) => {
    const [session, setSession] = useState(true)
    const [ user, setUser ] = useState(null)
    
    const isLogged = ( user ) => {
        setSession( true )
        setUser( user.uid )    
    }

    const isLogOut = () => {
        setSession(false)
        setUser(null)    
    }
        return (
            <LoginContext.Provider
              value={{ session, user, isLogged, isLogOut }}
            >
                <div>{ children }</div>
            </LoginContext.Provider>
        )
    }       
