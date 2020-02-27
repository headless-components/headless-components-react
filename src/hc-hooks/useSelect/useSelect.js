import { useState } from "react"
import PropTypes from "prop-types"

const useSelect = ({ onSelect, ...props }) => {
  const [selectedKey, setSelectedKey] = useState("")
  const [selectedValue, setSelectedValue] = useState("")
  const TRIGGER_KEYS = ["Enter", " "]

  const select = (key, value) => {
    setSelectedKey(key)
    setSelectedValue(value)
    return onSelect && onSelect({ key, value })
  }

  // adding props in element including "aria" for accessibility
  const getSelectedElement = (key, value, props = {}) => ({
    ...props,
    "aria-pressed": selectedKey === key,
    "aria-current": selectedKey === key,
    onKeyUp: e => {
      props.onKeyUp && props.onKeyUp(e)
      TRIGGER_KEYS.includes(e.key) && select(key, value)
    },
    onClick: e => {
      props.onClick && props.onClick(e)
      select(key, value)
    },
    tabIndex: "0"
  })

  return {
    select,
    selectedKey,
    selectedValue,
    getSelectedElement
  }
}

useSelect.propTypes = {
  defaultSelectedKey: PropTypes.string,
  onSelect: PropTypes.func,
  selectedKey: PropTypes.string
}

useSelect.defaultProps = {
  defaultSelectedKey: null,
  onSelect: null,
  selectedKey: null
}
export default useSelect
