

export const validation = (values)=>{
    let errors={}
    if(!values.email){
        errors.email="Email address required"
    }

    if(!values.password){
        errors.password="Password required"
    }
    return errors;
}

