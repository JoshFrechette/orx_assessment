import User from '../User';

const Users = (users: any) => {
    return (
        <div>
            {users.users.map((user: any) => (
                <User data={user} />
            ))}
        </div>
    )
};

export default Users;