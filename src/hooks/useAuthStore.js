import { useDispatch, useSelector } from "react-redux"
import bienesRaicesApi from "../api/bienesRaicesApi";
import { openNotification } from "../helpers/openNotification";

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async( email, password ) => {
        try {
            const resp = await bienesRaicesApi.post('/auth', {email, password});
            console.log({resp})
        } catch (error) {
            console.log(error);
        }
    };

    const startRegister = async( name, email, password ) => {
        try {
            const resp = await bienesRaicesApi.post('/auth/register', {name, email, password});
            console.log(resp)
            openNotification('Registro exitoso', 'Hemos enviado un Email de confirmación, por favor haz click en el enlace', 'success')
        } catch ({response}) {
            const { msg } = response.data
            openNotification('Error al ingresar el email', `${msg}` , 'error')
        }
    };


    return {
        //Propiedades
        status,
        user,
        errorMessage,

        //Métodos
        startLogin,
        startRegister,
    }
}