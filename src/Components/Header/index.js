import { TextField, Grid } from "@mui/material";

const Header = ({
  userSearchByEmail,
  setUserSearchByEmail,
  userSearchByName,
  setUserSearchByName,
}) => {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <TextField value={userSearchByEmail} onChange={(e) => setUserSearchByEmail(e.target.value)} label="Search by user email" disabled={userSearchByName} />
        </Grid>
        <Grid item xs={6}>
          <TextField value={userSearchByName} onChange={(e) => setUserSearchByName(e.target.value)} label="Search by user name" disabled={userSearchByEmail} />
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
