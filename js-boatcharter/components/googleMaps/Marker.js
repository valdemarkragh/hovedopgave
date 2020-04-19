import React, {Fragment} from 'react'

export const Marker = ({ name, color }) => {
    return (
        <Fragment>
            <div
            className="pin bounce"
            style={{ backgroundColor: color, cursor: 'pointer' }}
            title={name}
            />
      </Fragment>
    )
}
