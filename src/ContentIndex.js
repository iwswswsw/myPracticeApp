import React from 'react';
import ContentA from './ContentA';
import ContentB from './ContentB';

const ContentIndex = (props) => {
  const { showContent } = props;
  switch (showContent) {
    case 'ContentA':
      return <ContentA />;
    case 'ContentB':
      return <ContentB />;
    default:
      throw new Error();
  }
}

export default ContentIndex;
