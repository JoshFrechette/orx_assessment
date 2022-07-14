import { Grid } from "@mui/material";

const User = (data: any) => {
  return (
    <>
      <Grid style={{ border: 'solid 2px blue', padding: 5, margin: 5 }}>
        <h3>{data.data.name}</h3>
        <p>Email: {data.data.email}</p>
        <p>Phone: {data.data.phone}</p>
        <p>Website: {data.data.website}</p>
        <p>Address</p>
        <p>
          {data.data.address.suite} {data.data.address.street}
        </p>
        <p>{data.data.address.city}</p>
        <p>{data.data.address.zipcode}</p>
      </Grid>
    </>
  );
};

export default User;
