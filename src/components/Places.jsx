
function Places({ id, placesById }) {
    const place = placesById[id];

    const childIds = place.childIds;
    return (
        <>
            <li className="list-decimal">
                {place.title}
                {childIds.length > 0 && (
                    <ol className="list-decimal ml-4">
                        {childIds.map((id) => (
                            <Places
                                key={id}
                                placesById={placesById}
                                id={id}

                            />
                        ))}
                    </ol>
                )}

            </li>

        </>
    );
}

export default Places;