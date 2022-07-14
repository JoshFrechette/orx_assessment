import { Input, Grid } from "@mui/material";

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
          <Input />
        </Grid>
        <Grid item xs={6}>
          <Input />
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
