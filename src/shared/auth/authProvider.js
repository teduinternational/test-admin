import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';
import config from './../helpers/config';

export default (type, params) => {
    // called when the user attempts to log in
    if (type === AUTH_LOGIN) {
        if (type === AUTH_LOGIN) {
            const { username, password } = params;
            var data = "grant_type=password&username=" + username + "&password=" + password;
            const request = new Request(config.apiUrl + '/oauth/token', {
                method: 'POST',
                body: data,
                headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }),
            });
            return fetch(request)
                .then(response => {
                    if (response.status < 200 || response.status >= 300) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })
                .then(function (data) {
                    
                    localStorage.setItem('loginResult', JSON.stringify(data));
                });
        }
        return Promise.resolve();
    }
    // called when the user clicks on the logout button
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('token');
        return Promise.resolve();
    }
    // called when the API returns an error
    if (type === AUTH_ERROR) {
        const status = params.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    // called when the user navigates to a new location
    if (type === AUTH_CHECK) {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    }
    return Promise.reject('Unknown method');
};