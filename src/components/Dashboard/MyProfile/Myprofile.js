import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useQuery } from 'react-query';
import Loader from '../../shared/Loader/Loader';
import { toast } from 'react-toastify';

const Myprofile = () => {
    const [user] = useAuthState(auth)
    // const { data: member, isLoading, refetch } = useQuery('member', () =>
    //     fetch(`http://localhost:5000/member?email=${user.email}`, {
    //         method: 'GET',
    //         headers: {
    //             'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     }).then(res =>
    //         res.json()
    //     )
    // )
    // if (isLoading) {
    //     return <Loader></Loader>
    // }


    // const handleProfileUpdate = (e) => {
    //     e.preventDefault();
    //     const email = member.email;

    //     const education = e.target.education.value;
    //     const city = e.target.city.value;
    //     const district = e.target.district.value;
    //     const phone = e.target.phone.value;

    //     const updatedProfile = { education, city, district, phone };

    //     fetch(`http://localhost:5000/member/${email}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updatedProfile)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             refetch();
    //             toast.success('Profile Updated')
    //         });
    //     e.target.reset();
    // }
    return (
        <div>
            <h1 className='text-4xl md:text-5xl text-orangerrr mb-10 mt-16 md:mt-0 tracking-widest font-semibold'>About Me</h1>
            <div className="overflow-x-auto">
                <table className="table w-full mt-10">
                    <tbody>
                        <tr>
                            <td className='text-xl font-semibold text-white text-justify'>Name:</td>
                            <td className='text-xl font-semibold'>{user?.displayName}</td>
                        </tr>
                        <tr>
                            <td className='text-xl font-semibold text-white text-justify'>Email:</td>
                            <td className='text-lg'>{}</td>
                        </tr>
                        <tr>
                            <td className='text-xl font-semibold text-white text-justify'>Education:</td>
                            <td className='text-lg'>{}</td>
                        </tr>
                        <tr>
                            <td className='text-xl font-semibold text-white text-justify'>Address:</td>
                            <td className='text-lg'><span className='text-white'>City:</span> {} <span style={{ marginLeft: '5rem' }} className='text-white'>District:</span> {}</td>
                        </tr>
                        <tr>
                            <td className='text-xl font-semibold text-white text-justify'>Phone:</td>
                            <td className='text-lg'>{}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h1 className='text-4xl md:text-5xl text-orangerrr mb-8 mt-16 tracking-widest font-semibold'>Update Your Details</h1>

            <form>
                <div className="card-body p-3 md:p-8 w-full md:w-3/6  rounded-lg">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Education</span>
                        </label>
                        <input type="text" placeholder='Education' className="input input-bordered" name='education' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">City</span>
                        </label>
                        <input type="text" placeholder='City' className="input input-bordered" name='city' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">District</span>
                        </label>
                        <input type="text" placeholder='District' className="input input-bordered" name='district' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Phone</span>
                        </label>
                        <input type="text" placeholder='Phone Number' className="input input-bordered" name='phone' required />
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