import React from 'react';
import { createBoard } from '@wixc3/react-board';
import AllGames from '../../../../pages/gaming/main/06-all-games';

export default createBoard({
    name: 'AllGames',
    Board: () => <AllGames />,
    isSnippet: true,
});
