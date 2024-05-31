// src/components/GroupForm.js
import React, { useState } from 'react';

const GroupForm = ({ onCreateGroup }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        onCreateGroup(name, description);
        setName('');
        setDescription('');
    };

    return (
        <div className='container_form mx-auto w-full flex flex-col justify-center items-center'>
            <div className='input_form flex gap-3'>
                <div className='flex flex-col'>
                    <label className='font-medium' htmlFor="name">Name</label>
                    <input
                        type="text"
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Group Name"
                        className='px-3 py-2 rounded-md my-2 bg-[#121212]'
                    />
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium' htmlFor='desc'>Description</label>
                    <input
                        type="text"
                        id='desc'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Group Description"
                        className='px-3 py-2 rounded-md my-2 bg-[#121212]'
                    />
                </div>
            </div>
            <button className='px-5 py-2 bg-[#121212] text-white rounded-md font-semibold my-5' onClick={handleSubmit}>Create</button>
        </div>
    );
};

export default GroupForm;
