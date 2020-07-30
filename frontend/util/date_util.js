
export const getMonthFromString = (mon) => {
    return new Date(Date.parse(mon +" 1, 2012")).getMonth()+1
 };

export const getAllYears = () => {
    let allYears = [];
    let today = new Date();
    let thisYear = today.getFullYear();
    for (let i=thisYear; i>1890; i--) {
        allYears.push(i);
    }
    return allYears;
}

export const getAllMonths = () => 
    ["January","February","March","April","May","June","July","August","September","October","November","December"];

export const getAllDays = () => {
    let result = [];
    for (let i=1; i< 32;i++) {
        result.push(i);
    }
    return result;
}

export const isValidDate = (year,month,day) => {
    const date = new Date(year, (+month-1), day);
    const isValid = (Boolean(+date) && date.getDate() == day);
    return isValid;
}

export const findAge = (bday) => {
    let thisDate = new Date();
    let yearsElapsed = (thisDate - bday)/31536000000;
    return Math.floor(yearsElapsed);
}

// let x = new Date(2007,1,1);
// let y = new Date(2008,1,1);
// let z = new Date(2009,1,1);