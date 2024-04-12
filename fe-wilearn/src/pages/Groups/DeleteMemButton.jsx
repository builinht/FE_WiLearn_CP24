import React, { useState } from "react";
import { Button } from "@mui/material";
import { useDispatch, } from "react-redux";
import { kickMember } from "../../app/reducer/studyGroupReducer";

export default function DeleteMemButton({ groupId, banAccId }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      await dispatch(kickMember({ groupId, banAccId }));
    } catch (error) {
      console.error("Error kicking member:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      disabled={loading}
      onClick={handleClick}
      variant="contained"
      size="small"
      sx={{
        backgroundColor: "#DD0000",
        "&:hover": {
          backgroundColor: "#DD0000",
        },
      }}
    >
      {loading ? 'Loading...' : 'Kick'}
    </Button>
  );
}
