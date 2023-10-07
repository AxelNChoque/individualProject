import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import normalizeDrivers from "../../helpers/normalization";


const Detail = () => {
    let { id } = useParams();
    let [driver, setDriver] = useState();

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/drivers/${id}`);
                const { data } = response;
    
                if (data.name) {
                    setDriver(data);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            } catch (error) {
                console.error('Error al obtener datos del servidor:', error);
           }
        };
    
        fetchData();
    
        return () => {
            setDriver({});
        };
    }, [id]);

     console.log(driver);
    const newDriver = normalizeDrivers([driver]);
    console.log(newDriver);
    return(
        <div>
            {/* <h2>Name: {`${newDriver.name} ${newDriver.surname}`}</h2>
            <h2>Nationalirt: {newDriver.nationality}</h2>
            <h2>Teams: {newDriver.teams}</h2>
            <h2>Description: {newDriver.description}</h2>
            <img src={newDriver.image} alt={newDriver.name} />  */}
        </div>
    )
};

export default Detail;