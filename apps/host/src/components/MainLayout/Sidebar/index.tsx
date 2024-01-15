import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useTheme } from '@mui/material';

type Anchor = 'left' | 'nav';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
    nav: false
  });

  const router = useRouter();

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) =>  {
    const url = 'http://localhost:3000'
    const theme = useTheme()

    return (
      <Box
        width='250px'
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List sx={{
          ml: 2,
        }}>
          {['Host', 'Remote', 'Suppliers'].map((text) => (
            <ListItem key={text} disablePadding>
              <Link href={`${url}/${text}`}>
                <ListItemText primary={text} />
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    );
  }

  const anchor = 'nav';

  return (
    <div>
      <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={'left'}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
    </div>
  );
}