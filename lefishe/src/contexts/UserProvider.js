import {
    createContext,
    useState,
    useEffect,
    useCallback,
    useContext,
    useMemo
  } from 'react';
  import React from 'react';
  import axios from 'axios';
  export const UserContext = createContext();
  export const useUser = () => useContext(UserContext);
  
  export const UserProvider = ({
    children
  }) => {
    const [initialLoad, setInitialLoad] = useState(false);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState();
    const refreshUser = useCallback(async() => {
        try {
            setError();
            setLoading(true);
            sessionStorage.getItem('user') ? setUser(JSON.parse(sessionStorage.getItem('user'))) : setUser();
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false)
        }
    }, []);
  
  
    useEffect(() => {
        if (!initialLoad) {
              refreshUser();
              setInitialLoad(true);
          }
    }, [initialLoad, refreshUser]);

    const login = useCallback(async(email, password) => {
        try {
            setError();
            setLoading(true);
            const data = await axios.post('https://lefisheapi.herokuapp.com/api/user/login', {
                email,
                password
            });
            setUser(data.data);
            sessionStorage.setItem('user', JSON.stringify(data.data));
            return(data.data)
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false)
        }
    }, []);

    const logout = useCallback(async() => {
        try {
            setError();
            setLoading(true);
            setUser();
            sessionStorage.removeItem('user');
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false)
        }
    }, []);

  
    const value = useMemo(() => ({
        refreshUser,
        user,
        error,
        loading,
        users,login,logout
    }), [refreshUser,login,logout,users,error,loading,user]);
  
    return ( <UserContext.Provider value = {value} > {
            children
        } </UserContext.Provider>
    );
  };