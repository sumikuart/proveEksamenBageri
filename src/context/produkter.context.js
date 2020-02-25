import React, { createContext, useState, useEffect } from 'react';


export const ProduktContext = createContext();



const ProduktContextProvider = (props) => {

    const [produkter, setProdukter] = useState([
        {id:'0', 'naven':'Alice',  kategori: 'Grafik'},
        {id:'1', 'naven':'Breakdown', kategori: 'Grafik'}

    ])


    return( 

        <ProduktContext.Provider value={{produkter}}>
            {props.children}
        </ProduktContext.Provider>
        
    )
    
}

export default ProduktContextProvider