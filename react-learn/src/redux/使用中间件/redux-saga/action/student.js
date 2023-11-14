export const studentAction = {
    addStudent:Symbol("add-student"),
    delStudent:Symbol("del-student"),
    updateStudent:Symbol("update-student")
}

export function addStudent(newStudent){
    return{
        type:studentAction.addStudent,
        payload:newStudent
    }
}

export function delStudent(id){
    return{
        type:studentAction.delStudent,
        payload:id
    }
}

export function update({id,newStudent}){
    return{
        type:studentAction.updateStudent,
        payload:{
            id,
            newStudent
        }
    }
}