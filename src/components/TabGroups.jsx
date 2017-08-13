import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import TabGroup from './TabGroup';

const Container = glamorous.div({
  flex: '1 1 auto',
  overflow: 'auto',
});

const TabGroups = ({ tabGroups, selectedTab, selectTab, goToTab, closeTab }) =>
  <Container>
    {tabGroups.map(tabGroup =>
      <TabGroup
        key={tabGroup.id}
        tabs={tabGroup.tabs}
        selectedTab={selectedTab}
        selectTab={selectTab}
        goToTab={tabId => goToTab(tabGroup.id, tabId)}
        closeTab={(tabId, event) => closeTab(tabGroup.id, tabId, event)}
      />,
    )}
  </Container>;

TabGroups.propTypes = {
  tabGroups: PropTypes.arrayOf(PropTypes.object).isRequired,
  goToTab: PropTypes.func.isRequired,
  closeTab: PropTypes.func.isRequired,
};

export default TabGroups;
