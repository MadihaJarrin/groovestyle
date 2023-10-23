import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })
    // console.log(users)

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    // const handleDelete = user => {
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Delete admin role!'
    //     }).then(result => {
    //         if (result.isConfirmed) {
    //             fetch(`http://localhost:5000/users/admin/${user._id}`, {
    //                 method: 'DELETE',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({ role: 'user' }),
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(user)
    //                     if (data.modifiedCount) {
    //                         refetch();
    //                         Swal.fire(
    //                             'Role Deleted!',
    //                             'Admin role has been deleted.',
    //                             'success'
    //                         )
    //                     }
    //                 });
    //         }
    //     });
    // }
    const handleDelete = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete admin role!'
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/removeAdminRole/${user._id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ role: 'user' }), // Change the role to 'user' or another non-admin role
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(user);
                        if (data.modifiedCount) {
                            refetch();
                            Swal.fire(
                                'Admin Role Removed!',
                                'Admin role has been removed from the user.',
                                'success'
                            );
                        }
                    });
            }
        });
    }


    return (
        <div>
            <Helmet>
                <title>Groovestyle | All Users</title>
            </Helmet>
            <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Remove Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <tr
                            key={user._id}
                        >
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role === 'admin' ? 'admin' :
                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button>
                            }</td>
                            <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>

                        </tr>)

                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;