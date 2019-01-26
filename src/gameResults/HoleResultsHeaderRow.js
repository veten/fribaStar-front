import React from 'react';

class HoleResultsHeaderRow extends React.Component {
    render() {
        return(
                <th className="text-center">
                    Väylä {this.props.index} <br />
                    Par {this.props.hole.par}
                </th>
        );
    }
}

export default HoleResultsHeaderRow
