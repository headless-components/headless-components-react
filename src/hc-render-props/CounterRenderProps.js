import React from "react";
import PropTypes from "prop-types";

class CounterRenderProps extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    initialCount: PropTypes.number
  };

  static defaultProps = {
    initialCount: 0
  };

  state = {
    count: this.props.initialCount
  };

  increment(value, limit) {
    const { count } = this.state;
    if (limit) {
      return count < limit ? this.setState({ count: count + value }) : count;
    }

    this.setState({ count: count + value });
  }

  decrement(value, limit) {
    const { count } = this.state;
    if (limit) {
      return count > limit ? this.setState({ count: count - value }) : limit;
    }
    this.setState({ count: count - value });
  }

  render() {
    const { count } = this.state;
    return this.props.children({
      count,
      increment: (value, limit) => this.increment(value, limit),
      decrement: (value, limit) => this.decrement(value, limit)
    });
  }
}

export default CounterRenderProps;
