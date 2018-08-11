import React from 'react'
import {arrayOf, string, number, oneOf ,func} from 'prop-types';
import Icon from '../../Atoms/Image/Icon';
import Label from '../../Atoms/Text/Label';
import cx from 'classnames';
import './Select.scss';

class Select extends React.Component {
  constructor(props) {
    super(props);

    const {options, selectedOptionIndex} = this.props;
    this.state = {
      selectedIndex: options.length > 0 ? selectedOptionIndex : -1
    }
  }

  onClickLeft = () => {
    const {options, onChange} = this.props;
    const {selectedIndex} = this.state;

    this.setState({
      selectedIndex: selectedIndex !== 0 ? selectedIndex - 1 : options.length - 1
    }, () => {
      onChange(this.state.selectedIndex);
    });
  }

  onClickRight = () => {
    const {options, onChange} = this.props;
    const {selectedIndex} = this.state;

    this.setState({
      selectedIndex: selectedIndex !== options.length - 1 ? selectedIndex + 1 : 0
    }, () => {
      onChange(this.state.selectedIndex);
    });
  }

  render() {
    const {options, optionType} = this.props;
    const {selectedIndex} = this.state;
    console.log('~render~selectedIndex', selectedIndex);

    if (selectedIndex === -1) {
      return null;
    }

    return (
      <div className="select">
        <div onClick={this.onClickLeft} className="select__left">
          <Icon name={'chevron-thin-left'} width={15} height={15} />
        </div>
        <div className={cx('select__center', {
          'select__center--week': optionType === 'week',
          'select__center--month': optionType === 'month',
          'select__center--year': optionType === 'year'
        })}>
          <Label color="blue" size="medium" text={options[selectedIndex]} />
        </div>
        <div onClick={this.onClickRight} className="select__right">
          <Icon name={'chevron-thin-right'} width={15} height={15} />
        </div>
      </div>
    )
  }
}

Select.propTypes = {
  options: arrayOf(string).isRequired,
  selectedOptionIndex: number.isRequired,
  optionType: oneOf(['week', 'month', 'year']),
  onChange: func
};

export default Select;
