import React from 'react'
import WHL from '../../Components/WHL/WHL'
import { Videolist } from '../../utils/Data'

const History = () => {

    return (
        <WHL name={'Watch History'} subtitle={'Today'} history_vid={Videolist} />
    )
}

export default History