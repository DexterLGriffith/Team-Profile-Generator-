const renderedTeam = team => {
    const renderedManager = manager => {
        return `${Manager.getName()},${Manager.getId()},${Manager.getEmail()},${Manager.getOfficeNumber()},${Manager.getRole()}`
    }

    // repeat for intern 
    const renderedIntern = intern => {
        return `${Intern.getName()},${Intern.getId()},${Intern.getEmail()},${Intern.getSchool()},${Intern.getRole()}`
    }

    // repeat for engineer
    const renderedEngineer = engineer => {
        return `${Intern.getName()},${Intern.getId()},${Intern.getEmail()},${Intern.getGithub()},${Intern.getRole()}`
    }
}