import { useState } from 'react';
import API from '../services/api'

const useApi = (urlobject)=>{

    const [response , setResponse] = useState(null);
    const [Error , setError] = useState("");
    const [loader , setLoader] = useState(false);

    const call = async (payload , type='')=>{
            setResponse(null);
            setError("");
            setLoader(true);
        try {
          let res =   await API(urlobject , payload , type);
          setResponse(res.data);
        } catch (error) {
            setError(error.message);
        } finally{
            setLoader(false);
        }
    }

    return { call , response , Error , loader}
}

export default useApi;