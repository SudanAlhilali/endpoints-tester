import { Box, Typography } from "@mui/material";

const ErrorScreen = () => {
  return (
    <Box>
      <Typography mt={2} mb={2}>
        Response
      </Typography>
      <Box style={{ display: "flex" }}>
        <Typography mt={2} mb={2}>
          URL not valid
        </Typography>
      </Box>
    </Box>
  );
};

export default ErrorScreen;
