
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


