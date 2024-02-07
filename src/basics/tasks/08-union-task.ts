type Level = 'junior' | 'middle' | 'senior';
 
interface Developer {
  login: string,
  skills: string[],
  level: Level, 
}
 
// create a function that change level of incoming developer
function gradeDeveloper(user: {level: Level}, newLevel: Level) {
    user.level = newLevel;
}

const dev1: Developer = {
    level: 'middle',
    skills: ['HTML', 'CSS', 'JS', 'Redux', 'React'],
    login: 'egor'
}

gradeDeveloper(dev1, 'senior');