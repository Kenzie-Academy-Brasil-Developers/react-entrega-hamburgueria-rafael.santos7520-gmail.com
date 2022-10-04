
import { api } from './../../lib/axios';
export const BuscarProdutos = (onSucess,onError) =>{
    api
    .get()
    .then((resp) => onSucess(resp))
    .catch((err) => onError(err))
}