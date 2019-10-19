// More information about NA, 12 steps, etimport React from 'react';
import React from 'react';

const nasource1 = 'https://www.na.org/'
const nasource2 = 'https://na.org/admin/include/spaw2/uploads/pdf/litfiles/us_english/misc/What%20Is%20the%20NA%20Program.pdf'
const nasource3 = 'https://m.na.org/?ID=ips-an-an-IP1'


const linkarr = [{nasource1}, {nasource2}, {nasource3}]

const lovedOneLinkarr = ['', '', '', '']

const MoreInfo = () => (
    <ul>
        <h2> Learn more about Narcotics Anonymous here:</h2>
        <p>{ linkarr }</p>
        <h3> If someone you love is a recovering addict, get the support you need here: </h3>
        <p>{ lovedOneLinkarr }</p>
    </ul>
    );

export default MoreInfo;