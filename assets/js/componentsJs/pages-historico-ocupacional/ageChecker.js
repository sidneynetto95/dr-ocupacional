function ageChecker() {
    const dateUserBirth = 1995 ;
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const age = year - dateUserBirth ;
    const nascimentoUserDate = document.querySelector('div#nascimentoUserDate');
    nascimentoUserDate.innerHTML = `${age}anos`
}

export default ageChecker();

