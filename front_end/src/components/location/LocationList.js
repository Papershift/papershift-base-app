import React from 'react';
import { Table} from "semantic-ui-react";

const LocationList = (locations) => {
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Location ID</Table.HeaderCell>
                        <Table.HeaderCell>Location Name</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {locations.locations.map(location => (
                        <Table.Row key={location.id}>
                            <Table.Cell>{location.id}</Table.Cell>
                            <Table.Cell>{location.attributes.name}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>

            </Table>
        </div>
    );
};

export default LocationList;
