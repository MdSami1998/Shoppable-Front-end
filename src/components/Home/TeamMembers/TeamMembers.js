import React, { useEffect, useState } from 'react';
import TeamMember from './TeamMember/TeamMember';

const TeamMembers = () => {
    const [teamMembers, setTemMembers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/team-members')
            .then(res => res.json())
            .then(data => setTemMembers(data))
    }, [])
    return (
        <div>
           <h1 className='text-4xl md:text-5xl text-white mb-10 mt-16 md:mt-0 tracking-widest font-semibold'>Our Team Members</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-20 m-0 md:m-20'>
                {
                    teamMembers.map(teamMember => <TeamMember key={teamMember._id} teamMember={teamMember}></TeamMember>)
                }
            </div>
        </div>
    );
};

export default TeamMembers;