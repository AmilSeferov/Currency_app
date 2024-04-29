import { useState } from 'react'
import d1 from './assets/img/dice1.jpg'
import d2 from './assets/img/dice2.jpg'
import d3 from './assets/img/dice3.jpg'
import d4 from './assets/img/dice4.jpg'
import d5 from './assets/img/dice5.jpg'
import d6 from './assets/img/dice6.jpg'
export default function Dice() {
    const [state, setstate] = useState({
        left: 3,
        right: 4,
    });

    // useEffect(() => {
    //     window.addEventListener('keydown', () => {
    //         console.log()
    //     })
    //     setstate([(Matf.random * 6) + 1, (Math.random * 6) + 1])
    // }, [state.left, state.right])''


    return <>
        <div onClick={() => {
            let left = Math.floor((Math.random() * 6) + 1)
            let right = Math.floor((Math.random() * 6) + 1)
            setstate({ left, right })
            console.log(state)
        }}>
            <div className='left'>
                {
                    state.left === 1 && <img src={d1} alt="" />
                }
                {
                    state.left === 2 && <img src={d2} alt="" />
                }
                {
                    state.left === 3 && <img src={d3} alt="" />
                }
                {
                    state.left === 4 && <img src={d4} alt="" />
                }
                {
                    state.left === 5 && <img src={d5} alt="" />
                }
                {
                    state.left === 6 && <img src={d6} alt="" />
                }
            </div>
            <div className='right'>
                {
                    state.right === 1 && <img src={d1} alt="" />
                }
                {
                    state.right === 2 && <img src={d2} alt="" />
                }
                {
                    state.right === 3 && <img src={d3} alt="" />
                }
                {
                    state.right === 4 && <img src={d4} alt="" />
                }
                {
                    state.right === 5 && <img src={d5} alt="" />
                }
                {
                    state.right === 6 && <img src={d6} alt="" />
                }
            </div>
        </div>
    </>
}