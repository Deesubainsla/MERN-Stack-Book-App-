import react,{createContext, useContext, useState} from 'react'

const userContext = createContext();//like a storage for context state


//declaration of global state and provide them to other components as in App.jsx 
const UserContextProvider = ({children})=>{
    const localInfo = JSON.parse(localStorage.getItem('User'));
    const [user, setuser] = useState(localInfo? localInfo: undefined);
    const [search, setsearch] = useState('');
    const [cartcount, setcartcount] = useState(0);
    // const [user, setuser] = useState("Hello context is working properly:");
    return(
        <userContext.Provider value={{user, setuser, search, setsearch,cartcount,setcartcount}}>
            {children}
        </userContext.Provider>
    );
};

//can also do for making own hook for accessing userContext
// const Authuser =() => useContext(userContext);
// export {userContext, UserContextProvider, Authuser}

export {userContext, UserContextProvider}