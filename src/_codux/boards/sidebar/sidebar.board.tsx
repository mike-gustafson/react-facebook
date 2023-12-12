import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Sidebar from '../../../../pages/gaming/sidebar';

export default createBoard({
    name: 'Sidebar',
    Board: () => <Sidebar />,
    isSnippet: true,
});
