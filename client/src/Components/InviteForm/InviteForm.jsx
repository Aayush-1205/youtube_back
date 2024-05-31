// src/components/InviteForm.js
import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';

const InviteForm = ({ onInviteMembers, groups }) => {

    const [selectedGroup, setSelectedGroup] = useState(null);
    const [members, setMembers] = useState('');

    const handleInvite = () => {
        if (selectedGroup) {
            onInviteMembers(selectedGroup.value, members);
            setSelectedGroup(null);
            setMembers('');
        }
    };

    const groupOptions = groups.map(group => ({
        value: group._id,
        label: group.name
    }));

    return (
        <div className='mx-auto w-96 flex items-center justify-center flex-col'>
            <h2 className='font-medium my-3'>Invite Members</h2>
            <div className='flex items-center gap-3'>
                <Select
                    value={selectedGroup}
                    onChange={setSelectedGroup}
                    options={groupOptions}
                    placeholder="Select Group"
                    className=''
                    styles={{backgroundColor: "#121212"}}
                />
                <input
                    type="text"
                    value={members}
                    onChange={(e) => setMembers(e.target.value)}
                    placeholder="Member Emails (comma separated)"
                    className='px-3 py-2 rounded-md my-2 bg-[#121212]'
                />
            </div>
            <button className='px-5 py-2 bg-[#121212] text-white rounded-md font-semibold my-5' onClick={handleInvite}>Invite</button>
        </div>
    );
};

export default InviteForm;
