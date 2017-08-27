import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const propTypes = {
  tab: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    favIconUrl: PropTypes.string,
  }).isRequired,
  isActive: PropTypes.bool,
  isHighlighted: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onClick: PropTypes.func,
  onRemove: PropTypes.func,
};

const defaultProps = {
  isActive: false,
  isHighlighted: false,
  onMouseEnter: () => {},
  onClick: () => {},
  onRemove: () => {},
};

const Container = glamorous.div(
  ({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    height: '2.5rem',
    padding: '0 0.375rem',
    color: theme.text,
    borderRadius: '0.1875rem',
    cursor: 'pointer',
    userSelect: 'none',
  }),
  ({ isActive, theme }) =>
    isActive && {
      color: theme.accent,
    },
  ({ isHighlighted, theme }) =>
    isHighlighted && {
      color: theme.highlightedText,
      backgroundColor: theme.accent,
    },
);

const FavIcon = glamorous.span({
  flex: '0 0 auto',
  boxSizing: 'content-box',
  width: '1rem',
  height: '1rem',
  padding: '0.1875rem',
  margin: '0.1875rem',
  backgroundColor: '#FFFFFF',
  borderRadius: '0.1875rem',
});

const Title = glamorous.span({
  flex: '1 1 auto',
  margin: '0 0.375rem',
  fontSize: '0.875rem',
  lineHeight: '2.5rem',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
});

const CloseIcon = glamorous('svg', { withProps: { viewBox: '0 0 16 16' } })(
  {
    flex: '0 0 auto',
    display: 'none',
    boxSizing: 'content-box',
    width: '1rem',
    height: '1rem',
    margin: '0.1875rem',
    padding: '0.1875rem',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    borderRadius: '0.1875rem',

    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  },
  ({ isHighlighted }) =>
    isHighlighted && {
      display: 'block',
    },
);

const favIconPlaceholder = (
  <svg viewBox="0 0 16 16" fill="none" stroke="#5A5A5A" strokeWidth="1">
    <polygon points="3.5,1.5 8.5,1.5 12.5,5.5 12.5,14.5 3.5,14.5" />
    <polyline points="8.5,1.5 8.5,5.5 12.5,5.5" />
  </svg>
);

function Tab({ tab, isHighlighted, onRemove, ...props }) {
  return (
    <Container isHighlighted={isHighlighted} {...props}>
      <FavIcon>
        {/^https?:\/\//.test(tab.favIconUrl)
          ? <img
            src={tab.favIconUrl}
            alt="FavIcon"
            width="100%"
            height="100%"
          />
          : favIconPlaceholder}
      </FavIcon>
      <Title>
        {tab.title}
      </Title>
      <CloseIcon isHighlighted={isHighlighted} onClick={onRemove}>
        <line x1="3" y1="3" x2="13" y2="13" />
        <line x1="13" y1="3" x2="3" y2="13" />
      </CloseIcon>
    </Container>
  );
}

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default Tab;
