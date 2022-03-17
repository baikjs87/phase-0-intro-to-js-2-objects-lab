const employee = {
    name: "Joe",
    streetAddress: "123"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const employeeGone = {...employee}
    delete employeeGone.name
    return {
        employeeGone, key
        
    }
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee
}