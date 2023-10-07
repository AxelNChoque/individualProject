const normalizeDrivers = driversArray => {
    const normalizedDrivers = [];

    driversArray.forEach(driver => {
        let normalizedDriver = {
            id: driver.id,
            name: '',
            surname: '',
            image: '',
            nationality: driver.nationality,
            description: driver.description,
            teams: []
        };

        if (driver.surname) {
            normalizedDriver.name = driver.name;
            normalizedDriver.surname = driver.surname;
        } else {
            normalizedDriver.name = driver.name.forename;
            normalizedDriver.surname = driver.name.surname;
        }

        normalizedDriver.image = driver.image && driver.image.url ? driver.image.url : driver.image;

        if (driver.Teams) {

            driver.Teams.forEach(team => {
                if (team.name) {
                    normalizedDriver.teams.push(team.name);
                }
            });
        } else if (driver.teams) {
            normalizedDriver.teams = driver.teams.split(", ").map(team => team.trim());
        }

        normalizedDrivers.push(normalizedDriver);
    });

    return normalizedDrivers;
}

export default normalizeDrivers;