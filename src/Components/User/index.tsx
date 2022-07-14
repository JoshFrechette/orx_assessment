import { Grid } from "@mui/material";

const User = (data: any) => {
  return (
    <>
      <Grid>
        <h3>{data.data.name}</h3>
        <p>{data.data.email}</p>
        <p>{data.data.phone}</p>
        <p>
          {data.data.address.suite} {data.data.address.street}
        </p>
        <p>{data.data.address.city}</p>
        <p>{data.data.address.zipcode}</p>
        <p>{data.data.website}</p>
      </Grid>
    </>
  );
};

export default User;
