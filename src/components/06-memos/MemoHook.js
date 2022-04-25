import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'

import '../02-useEffect/simpleForm.css'


export const HookMemo = () => {

    const {counter, increment } = useCounter(50);
    const [show, setShow] = useState(true)

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]);

  return (
    <div>
        <h3>MemoHook</h3>
        <h3>Counter <small> { counter } </small></h3>
        <hr/>

        <p>{memoProcesoPesado}</p>
        <button className='btn btn-primary' onClick={increment}>+1</button>

        <button className='btn btn-outline-primary ml-3' onClick={() => setShow( !show )}>Show/Hide {JSON.stringify( show ) }</button>

    </div>
  )
}