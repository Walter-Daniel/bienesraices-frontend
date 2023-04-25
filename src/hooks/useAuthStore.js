import { useDispatch, useSelector } from "react-redux"
import bienesRaicesApi from "../api/bienesRaicesApi";
import { openNotification } from "../helpers/openNotification";
import { confirmToken } from "../store/auth/authSlice";
import { useEffect } from "react";

export const useAuthStore = () => {

    const { status, user, message } = useSelector( state => state.auth);
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
        console.log(name, email, password)
        try {
            const resp = await bienesRaicesApi.post('/auth/register', {name, email, password});
            openNotification('Registro exitoso', 'Hemos enviado un Email de confirmación, por favor haz click en el enlace', 'success')
        } catch ({response}) {
            const { msg } = response.data
            openNotification('Error al ingresar el email', `${msg}` , 'error')
        }
    };

    const confirmEmail = async( token ) => {
        try {
            const resp = await bienesRaicesApi.post('/auth/confirm', {token});
            console.log(resp.data.msg, 'Respuesta desde la DB')
            dispatch( confirmToken( resp.data.msg ) );
        } catch (error) {
            console.log(error)
        }
    };


    return {
        //Propiedades
        status,
        user,
        message,

        //Métodos
        startLogin,
        startRegister,
        confirmEmail,
    }
}