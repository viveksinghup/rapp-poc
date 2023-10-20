import React, { useEffect, useState } from 'react'

function MsgTicker({msg}) {
    const [showTicker, setShowTicker] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setShowTicker('show')
            setTimeout(() => {
                setShowTicker('')
            }, 2000)
        }, 3000)
    },[])

    return (
        <>
            <div className={['ticker', showTicker].join(' ')}>{msg}</div>
        </>
    )
}

export default MsgTicker;