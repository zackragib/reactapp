import React, { useRef } from 'react'
import {useReactToPrint} from 'react-to-print';

function Print() {
    
    const componentRef = useRef();
    
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })
    return (
        <div>
            <div>
                <button onClick={handlePrint}>Click to print</button>
                <div ref={componentRef}>
                    Hi this is printoutdsafssssss
                </div>
            </div>
    </div>
    )
}

export default Print
