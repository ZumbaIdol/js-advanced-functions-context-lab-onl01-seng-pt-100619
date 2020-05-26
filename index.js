/* Your Code Here */
let createEmployeeRecord = function(ele) {
    return {
        firstName: ele[0],
        familyName: ele[1],
        title: ele[2],
        payPerHour: ele[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(employeeEleInfo) {
    return employeeEleInfo.map(function(ele) {
        return createEmployeeRecord(ele)
    })
}

let createTimeInEvent = function(employee, dateTime) {
    let [date, hour] = dateTime.split(' ')
    employee.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}

let createTimeOutEvent = function(employee, dateTime) {
    let [date, hour] = dateTime.split(' ')
    employee.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}