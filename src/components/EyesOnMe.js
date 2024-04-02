// Code EyesOnMe Component Here

import React from "react";

function EyesOnMe () {
    return (
        <div>
            <button onFocus={event => console.log('Good!')} onBlur={event => console.log('Hey! Eyes on me!')}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe 