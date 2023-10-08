const validate = (input) => {
    let error = {};
    //name
    if(input.name.length > 30){
        error.name = "Name must be 30 characters or fewer.";
    }
    if(input.name.length === 0){
        error.name = "Name field cannot be empty";
    }
    //surname
    if(input.surname.length > 30){
        error.surname = "Name must be 30 characters or fewer.";
    }
    if(input.surname.length === 0){
        error.surname = "Surname field cannot be empty";
    }
    //nat
    if(input.nationality.length > 30){
        error.nationality = "Nationality must be 30 characters or fewer.";
    }
    if(input.nationality.length === 0){
        error.nationality = "Nationality field cannot be empty";
    }

    //img
    if(input.image.length === 0){
        error.image = "Image field cannot be empty";
    }

    //dob
    if (!input.dob) {
        error.dob = "Date of Birth field cannot be empty";
    } else {
        const dob = new Date(input.dob);
        
        if (dob.getFullYear() < 1500 || dob.getFullYear() > 2008) {
            error.dob = "Year must be between 1500 and 2008";
        }

        if (dob.getMonth() < 0 || dob.getMonth() > 11) {
            error.dob = "Month must be between 1 and 12";
        }

        if (dob.getDate() < 1 || dob.getDate() > 31) {
            error.dob = "Day must be between 1 and 31";
        }
    }
    
    //desc
    if(input.description.length > 300){
        error.description = "Description must be 300 characters or fewer.";
    }
    if(input.description.length === 0){
        error.description = "Description field cannot be empty";
    }
    //teams
    if (input.teams.length === 0) {
        error.teams = "Teams field cannot be empty";
    }

    return error;
}

export default validate;