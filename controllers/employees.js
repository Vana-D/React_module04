import Employee from '../models/Employees.js'

// const options = {
//     // Sort returned documents in ascending order by name (A->Z)
//     sort: { name: 1 },
// };

const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find({})
        if (!employees) {
            return res.status(404).json({ msg: `No employees found.`})
        }
        res.status(200).json({ employees, count: employees.length })
        // res.status(200).json({ employees })
        // res.send('Get All Employees');
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

const getEmployee = async (req, res) => {
    try {
        let {id: employeeId} = req.params;
        const employee = await Employee.findOne({ _id: employeeId})
        if (employeeId.length != 24 ) {
            return res.status(404).json({ msg: `${employeeId} does not have correct number of digits and/ or letters.`})
        }
        if (!employee) {
            return res.status(404).json({ msg: `No employee with ID ${employeeId} found.`})
        }
        res.status(200).json({ employee })
        // res.send('Get a single employee');
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

const createEmployee = async (req, res) => {
    try {
        const employee = await Employee.create(req.body)
        res.status(201).json({ employee })
        // res.status(200).json({msg: 'Employee added successfully.'})
        // res.send('Create a new employee')
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

const updateEmployee = async (req, res) => {
    try {
        let {id: employeeId} = req.params
        const employee = await Employee.findOneAndUpdate({ _id: employeeId }, req.body, {
            new: true,
            runValidators: true
        })
        if (!employee) {
            return res.status(404).json({ msg: `No employee with ID ${employeeId} found.`})
        }
        res.status(200).json({msg: 'Employee successfully updated.'})
        // res.send('Update an existing Employee');
    } catch(err) {
        res.status(500).json({ msg: err })
    }
}

const deleteEmployee  = async (req, res) => {
    try {
        let {id: employeeId} = req.params;
        const employee = await Employee.findOneAndDelete({ _id: employeeId})
        if (!employee) {
            return res.status(404).json({ msg: `No employee with ID ${employeeId} found.`})
        }
        res.status(200).json({ msg: 'Employee successfully deleted' })
        // res.send('Delete an employee');
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

export {
    getAllEmployees,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
}



//  INITIAL EXAMPLE ------------------------

// const getAllEmployees = (req, res) => {
//     res.send('Get All Employees');
// }

// const getEmployee = (req, res) => {
//     res.send('Get a single employee');
// }

// const createEmployee = (req, res) => {
//     res.send('Create a new employee');
// }

// const updateEmployee = (req, res) => {
//     res.send('Update an existing Employee');
// }

// const deleteEmployee = (req, res) => {
//     res.send('Delete an employee');
// }

// export {
//     getAllEmployees,
//     getEmployee,
//     createEmployee,
//     updateEmployee,
//     deleteEmployee
// }

// newEmployee.save((err) => {
//     if (err) throw err
//     console.log('Employee successfully saved.')
// })