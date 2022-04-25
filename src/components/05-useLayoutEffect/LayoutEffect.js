import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'
import './Layout.css'

export const LayoutEffect = () => {

    const {counter, increment} = useCounter(1);

    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );

    const { quote } = !!data && data[0];

    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
      setBoxSize(pTag.current.getBoundingClientRect());
    
    }, [quote])

    return (
        <div>
            <h1>Layout effect</h1>
            <hr/>

            <blockquote className='blockquote' style={{ textAlign: 'right'}}>
                <p ref={ pTag } className='mb-0'> { quote } </p>
            </blockquote>
            
            <pre>
                { JSON.stringify( boxSize, null, 3 ) }
            </pre>

            <button className='btn btn-primary' onClick={increment}>Siguiente cuote</button>

        </div>
        

    )
}