import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useQuery } from 'react-query';
import Loader from '../../shared/Loader/Loader';
import { toast } from 'react-toastify';

const Myprofile = () => {
    const [user] = useAuthState(auth)
    const { data: member, isLoading, refetch } = useQuery('member', () =>
        fetch(`http://localhost:5000/member?email=${user.email}`, {
            method: 'GET',
            // headers: {
            //     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            // }
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loader></Loader>
    }


    const handleProfileUpdate = (e) => {
        e.preventDefault();
        const email = member.email;
        const displayName = e.target.name.value;
        const education = e.target.education.value;
        const city = e.target.city.value;
        const district = e.target.district.value;
        const phone = e.target.phone.value;

        const updatedProfile = { displayName, education, city, district, phone };

        fetch(`http://localhost:5000/member/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProfile)
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success('Profile Updated')
            });
        e.target.reset();
    }
    return (
        <div>
            <h1 className='text-4xl md:text-5xl text-orangerrr mb-10 mt-16 md:mt-0 tracking-widest font-semibold'>About Me</h1>
            <div className="overflow-x-auto">
                <table className="table w-full mt-10">
                    <tbody>
                        <tr>
                            <td className='font-semibold text-white text-lg text-justify'>Name:</td>
                            <td className='text-xl font-semibold text-white'>{user?.displayName || member?.displayName}</td>
                        </tr>
                        <tr>
                            <td className='font-semibold text-white text-lg text-justify'>Email:</td>
                            <td className='text-lg text-white'>{user?.email}</td>
                        </tr>
                        <tr>
                            <td className='font-semibold text-white text-lg text-justify'>Education:</td>
                            <td className='text-lg text-white'>{member?.education}</td>
                        </tr>
                        <tr>
                            <td className='font-semibold text-white text-lg text-justify'>Address:</td>
                            <td className='text-lg text-white'><span className='text-neutral font-semibold text-lg'>City:</span> {member?.city} <span style={{ marginLeft: '5rem' }} className='text-neutral font-semibold text-lg'>District:</span> {member?.district}</td>
                        </tr>
                        <tr>
                            <td className='font-semibold text-white text-lg text-justify'>Phone:</td>
                            <td className='text-lg text-white'>{member?.phone}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h1 className='text-2xl md:text-5xl text-orangerrr mb-8 mt-16 tracking-widest font-semibold'>Update Your Details</h1>

            <form onSubmit={handleProfileUpdate}>
                <div className="card-body p-3 md:p-8 w-full md:w-3/6  rounded-lg text-white">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white text-lg">Name</span>
                        </label>
                        <input type="text" placeholder='name' className="input input-bordered" name='name' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white text-lg">Education</span>
                        </label>
                        <input type="text" placeholder='education' className="input input-bordered" name='education' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white text-lg">City</span>
                        </label>
                        <input type="text" placeholder='city' className="input input-bordered" name='city' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white text-lg">District</span>
                        </label>
                        <input type="text" placeholder='district' className="input input-bordered" name='district' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white text-lg">Phone</span>
                        </label>
                        <input type="text" placeholder='phone number' className="input input-bordered" name='phone' required />
                    </div>

                    <div className="card-actions justify-center w-full mt-5">
                        <button type='submit' className='signInBtn'>Update
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Myprofile;