// src/components/GroupList.js
import React from 'react';

const GroupList = ({ groups }) => {
    return (
        <div className='flex flex-col gap-5'>
            <h2 className='font-semibold'>Groups List:</h2>
            <ul>
                {groups.map(group => (
                    <li className='py-3 px-4 my-3 bg-[#474747] rounded-md flex flex-col gap-2' key={group._id}>
                        <div className='flex gap-1'>
                            <h3 className='font-medium'>{group.name} -</h3>
                            <p>{group.description}</p>
                        </div>
                        <div className='flex gap-3'>
                            <h4>Members:</h4>
                            <ul className='flex gap-1 capitalize'>
                                {group.members.map((member, index) => (
                                    <li key={index}>{member}</li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GroupList;
