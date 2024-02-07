"use strict";
// create a function that change level of incoming developer
function gradeDeveloper(user, newLevel) {
    user.level = newLevel;
}
const dev1 = {
    level: 'middle',
    skills: ['HTML', 'CSS', 'JS', 'Redux', 'React'],
    login: 'egor'
};
gradeDeveloper(dev1, 'senior');
