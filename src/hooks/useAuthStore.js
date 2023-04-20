import { useDispatch, useSelector } from "react-redux"
import bienesRaicesApi from "../api/bienesRaicesApi";

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async( email, password ) => {
        console.log({email, password}, 'desde el startlogin')
        try {
            const resp = await bienesRaicesApi.post('/auth', {email, password});
            console.log({resp})
        } catch (error) {
            console.log(error);
        }
    }


    return {
        //Propiedades
        status,
        user,
        errorMessage,

        //Métodos
        startLogin,
    }
}