"use strict";
//Объекты как параметры функции
//login, email, password, isOnline, lastVisited, role
const user1 = {
    login: 'Egor',
    email: 'e.akimov@gmail.com',
    password: '1GTbb',
    isOnline: true,
    lastVisited: new Date(5, 2, 2024),
};
const admin1 = {
    login: 'Egor',
    email: 'e.georgie@gmail.com',
    password: '1234',
    isOnline: true,
    lastVisited: new Date(5, 2, 2024),
    role: 'ad'
};
function login(user) {
    if (user.login.length > 0, user.password.length > 0) {
        console.log('Hello', user.login);
    }
}
login(user1);
login(admin1);
