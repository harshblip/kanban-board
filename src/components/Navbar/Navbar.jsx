import React from 'react'

export default function Navbar({ grouping, setGrouping, sorting, setSorting }) {
    return (
        <div>
            <select value={grouping} onChange={e => {
                setGrouping(e.target.value)
                localStorage.setItem('grouping', e.target.value);
            }
            }>
                <option value="">Select Grouping</option>
                <option value="user">Group by User</option>
                <option value="priority">Group by Priority</option>
                <option value="status">Group by Status</option>
            </select>
            <select value={sorting} onChange={e => {
                setSorting(e.target.value)
                localStorage.setItem('sorting', e.target.value);
            }
            }>
                <option value="">Select Sorting</option>
                <option value="priority">Sort by Priority</option>
                <option value="title">Sort by Title</option>
            </select>
        </div>
    )
}