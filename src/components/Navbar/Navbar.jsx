import React, { useState } from 'react'
import './Navbar.css'

export default function Navbar({ grouping, setGrouping, sorting, setSorting }) {
    const [click, setClick] = useState(false);
    const debug = () => {
        setClick(!click);
        console.log('hi');
    }
    return (
        <div className='navbar'>
            <button className='bt' onClick={() => debug()}>
                <span className="material-symbols-outlined">
                    tune
                </span>
                <span className='bt-text'>
                    Display
                </span>
                {
                    click ?
                        <span className='material-symbols-outlined'>
                            expand_less
                        </span> :
                        <span className='material-symbols-outlined'>
                            expand_more
                        </span>
                }
            </button>
            {
                click ?
                    <div className='box'>
                        <div className='row'>
                            <div className='h'>
                                Grouping
                            </div>
                            <select value={grouping} onChange={e => {
                                setGrouping(e.target.value)
                                localStorage.setItem('grouping', e.target.value);
                            }}
                                className='opts'
                            >
                                <option value="">Select Grouping</option>
                                <option value="user">Group by User</option>
                                <option value="priority">Group by Priority</option>
                                <option value="status">Group by Status</option>
                            </select>
                        </div>
                        <div className='row'>
                            <div className='h'>
                                Ordering
                            </div>
                            <select value={sorting} onChange={e => {
                                setSorting(e.target.value)
                                localStorage.setItem('sorting', e.target.value);
                            }
                            }
                                className='opts'
                            >
                                <option value="">Select Sorting</option>
                                <option value="priority">Sort by Priority</option>
                                <option value="title">Sort by Title</option>
                            </select>
                        </div>
                    </div> : ''
            }
        </div>
    )
}