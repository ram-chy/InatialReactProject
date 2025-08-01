import { useState } from 'react';
import { initialTravelPlan } from "../../places-normalized.js";
import Places from "./Places.jsx";

function TravelPlan() {
    const [plan, setPlan] = useState(initialTravelPlan);
    const root = plan[0];
    const planetsIds = root.childIds;
    return (
        <>
            <h1> Travel plan </h1>
            <ol className="list-decimal">
                {planetsIds.map((placeId) => (
                    <Places
                        key={placeId}
                        id={placeId}
                        placesById={plan}
                    />
                ))}
            </ol >
        </>
    );
}

export default TravelPlan;