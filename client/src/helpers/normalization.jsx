const normalizeDrivers = driversArray => {
    const returnedDrivers = [];

    driversArray.forEach(driver => {
        let normalizedDriver = {
            id: driver.id,
            name: '',
            surname: '',
            image: '',
            dob: driver.dob,
            nationality: driver.nationality,
            description: driver.description,
            teams: []
        };

        if (driver.surname !== undefined) {
            normalizedDriver.name = driver.name;
            normalizedDriver.surname = driver.surname;
        } else {
            normalizedDriver.name = driver.name?.forename;
            normalizedDriver.surname = driver.name?.surname;
        }

        normalizedDriver.image = driver.image && driver.image.url ? driver.image.url : driver.image;

        if (driver.Teams) {

            driver.Teams.forEach(team => {
                if (team.name) {
                    normalizedDriver.teams.push(team.name);
                }
            });
        } else if (driver.teams !== undefined && typeof driver.teams !== 'object') {
            normalizedDriver.teams = driver.teams.split(",").map(team => team.trim());
        } else {
            normalizedDriver.teams = driver.teams;
        }

        returnedDrivers.push(normalizedDriver);
    });

    return returnedDrivers;
}

export default normalizeDrivers;