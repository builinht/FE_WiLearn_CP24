import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function StartMeetingButton({meetingId}) {
  return (
    <NavLink
      to={`./${meetingId}`}
      style={{ textDecoration: "none", paddingRight: "10px" }}
    >
      <Button
        variant="contained"
        size="small"
        sx={{
          backgroundColor: "#258f3b",
          "&:hover": {
            backgroundColor: "#258f3b",
          },
        }}
      >
        Start
      </Button>
    </NavLink>
  );
}
