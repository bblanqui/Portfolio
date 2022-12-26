import React from 'react'

export const Cv = () => {
    return (
            <div >
              <object
               data={require('../public/CVBrallan.pdf')}
               type="application/pdf"
               width="100%"
               heigth='100%'
              >
             

              </object>
            </div>
           )
}