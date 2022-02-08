import axios from 'axios';
import { GET_CATEGORY_LIST } from '../actions/types';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.default.xsrfCookieName = 'csrftoken';

//Get categories list

export const getCategories = () => dispatch => {
    axios.get('api/categories')
        .then(result => {
            dispatch({
                type:GET_CATEGORY_LIST,
                payload: result.data
            });
        }).catch(error => console.log(error));
};