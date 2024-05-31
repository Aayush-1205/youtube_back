import React, { useState, useEffect } from 'react';
// import GroupForm from '../Components/GroupForm/GroupForm';
import GroupForm from '../../Components/GroupForm/GroupForm';
import GroupList from '../../Components/GroupList/GroupList';
import InviteForm from '../../Components/InviteForm/InviteForm';
import SearchBar from '../../Components/SearchBar/SearchBar';
import axios from 'axios';
import './Groups.css'

const Groups = () => {
    const [groups, setGroups] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const fetchGroups = async () => {
        const response = await axios.get('http://localhost:5500/api/groups');
        setGroups(response.data);
    };

    useEffect(() => {
        fetchGroups();
    }, []);

    const createGroup = async (name, description) => {
        const response = await axios.post('http://localhost:5500/api/groups', { name, description });
        setGroups([...groups, response.data]);
    };

    const inviteMembers = async (groupId, members) => {
        const response = await axios.post(`http://localhost:5500/api/groups/${groupId}/invite`, {
            members: members.split(',')
        });
        const updatedGroups = groups.map(group =>
            group._id === groupId ? response.data : group
        );
        setGroups(updatedGroups);
    };

    const searchGroups = async (query) => {
        const response = await axios.get(`http://localhost:5500/api/groups/search?q=${query}`);
        setSearchResults(response.data);
    };
    return (
        <div className='container_group'>
            <h1>Group Feature</h1>
            <hr className='mb-10' />
            <div className='flex gap-10 relative'>
                <div className='vertical_line pr-10'>
                    <div>
                        <GroupForm onCreateGroup={createGroup} />
                        <InviteForm onInviteMembers={inviteMembers} groups={groups} />
                    </div>
                </div>
                <div className='flex flex-col gap-10 relative'>
                    <SearchBar className="sticky" onSearch={searchGroups} />
                    <GroupList groups={searchResults} />
                </div>
            </div>
        </div>
    )
}

export default Groups