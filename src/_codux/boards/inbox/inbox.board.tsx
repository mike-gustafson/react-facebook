import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Inbox from '../../../../pages/email/inbox';

export default createBoard({
    name: 'Inbox',
    Board: () => <Inbox />,
    isSnippet: true
});
