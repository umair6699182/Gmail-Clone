import axios from 'axios';

const URL = ''

const APP_GMAIL = async (urlobject , payload , type)=>{
    return await axios({
        method: urlobject.method,
        url: `${URL}/${urlobject.endpoint}/${type}`,
        data: payload
    });
}


export default APP_GMAIL;