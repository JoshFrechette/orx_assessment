import User from '../User';

const Users = (users: any) => {
    return (
        <div>
            {users.users.map((user: any) => (
                <div key={user.id} >
                    <User data={user} />
                </div>
            ))}
        </div>
    )
};

export default Users;