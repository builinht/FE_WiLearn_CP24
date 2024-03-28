import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box, Tab, Tabs, styled } from '@mui/material';
import Vote from './Vote';
import Chat from './chat/Chat';
import UserPaper from './UserPaper';
import { RoomContext } from '../context/roomContext';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  // eslint-disable-next-line no-unused-vars

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ height: '100%' }}
    >
      {value === index && (
        <Box sx={{ p: 3, height: '100%', backgroundColor: 'background.main' }}>{children}</Box>
      )}
    </Box>
  );
};

TabPanel.propTypes = {
  children: PropTypes.any,
  value: PropTypes.number,
  index: PropTypes.number
};

const TabComponent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };
  const { peers, screenSharingId, stream, userName, me, meId } = useContext(RoomContext);
  const { [screenSharingId]: sharing, ...peersToShow } = peers;

  const screenSharingVideo =
  screenSharingId === me?.id ? stream : peers[screenSharingId]?.stream;
  return (
    <Box
      // width={'350px'}
      // height="calc(100vh - 49px)"
      sx={{
        backgroundColor: 'background.main'
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Người tham gia" />
          <Tab label="Chat" />
          <Tab label="Trả bài" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MemberWrapperTab>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}
          >
            {/* {
              screenSharingVideo && 
              // vidGrid(screenSharingVideo, userName)
              (<UserPaper key={meId} stream={screenSharingVideo} name={userName} />)
            }
            {
              screenSharingId !== me?.id && 
              // vidGrid(stream, userName)
              (<UserPaper key={meId} stream={stream} name={userName} />)
            } */}
            <UserPaper key={meId} stream={stream} name={"You"} />
            {Object.values(peersToShow)
              .filter((peer) => !!peer.stream)
              .map((peer) => (
                <UserPaper key={peer.id} stream={peer.stream} name={peer.userName} />
              ))}
          </Box>
        </MemberWrapperTab>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Chat />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Vote />
      </TabPanel>
    </Box>
  );
};

const MemberWrapperTab = styled(Box)(() => {
  return {
    width: '100%',
    maxHeight: '80vh',
    maxWidth: '200px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };
});

TabComponent.propTypes = {};

export default TabComponent;
