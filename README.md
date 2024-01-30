# React Module 4 Assignment 02
## M4: API Integration, Modularization, and Webpack

Now that you know what webpack is capable of, let's organize your files into one file per class: EmployeeList, EmployeeAdd (already done), and EmployeeFilter. Let the stateless components EmployeeTable and EmployeeRow remain with EmployeeList in the same file. The entry file, employees.jsx, will only import the other classes and mount the main component. This will create a two-level hierarchy of imports: employees.jsx will import EmployeeList.jsx, which in turn will import EmployeeAdd.jsx and EmployeeFilter.jsx. 

To start with, move the placeholder component EmployeeFilter to its own file (/src/EmployeeFilter.jsx):

### EmployeeFilter.jsx
```
export default class EmployeeFilter extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the Issue Filter.</div>
        )
    }
}
```

Similarly, extract the three classes (EmployeeRow, EmployeeTable, and EmployeeList) from employees.jsx. The new file created should be called EmployeeList.jsx. Since this file needs the other extracted classes, EmployeeAdd and EmployeeFilter, you also need import statements for them in addition to the classes that are moved into this file. Only the class EmployeeList is exported, so you need to add the keywords 'export default' only to that class declaration. The other two classes are for internal use only, so they are not exported.

### EmployeeList.jsx : 
  - Move Classes EmployeeList, EmployeeTable, and EmployeeRow 
  - Add Import and Export Statements

```
import EmployeeFilter from './EmployeeFilter.jsx'
import EmployeeAdd from './EmployeeAdd.jsx'

function EmployeeRow(props) (
    ...
)

function EmployeeTable(props) {
    ...
}

export default class EmployeeList extends React.Component {
    ...
}
```

Now that most of the contents of employees.jsx have been moved out to their individual files, you're left with just the rendering of the component:

### employees.jsx : 
  - Complete Contents After Moving All Classes Out
    
```
import EmployeeList from './EmployeeList.jsx'

ReactDOM.render(
    <React.StrictMode>
        <EmployeeList />
    </React.StrictMode>, 
    document.getElementById('content'))
```

Save your work and make sure that all files are compiled into employees.bundle.js and that the app still works as it should.
