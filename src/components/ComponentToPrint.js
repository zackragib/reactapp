import React from 'react'

export const ComponentToPrint = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <div>
                this is my printout
                
            </div>
           </div>
    );
  });
