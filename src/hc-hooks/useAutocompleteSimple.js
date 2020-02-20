import { useState } from "react"
import PropTypes from "prop-types"

const useAutocompleteSimple = data => {
  const [value, setValue] = useState("")

  const filterValue = () =>
    data.filter(item => value !== "" && item.indexOf(value) >= 0)

  const getSelectedValue = e => {
    setValue(e)
  }

  return {
    value,
    setValue,
    filter: filterValue(),
    getSelectedValue
  }
}

useAutocompleteSimple.propTypes = {
  data: PropTypes.array.isRequired
}

export default useAutocompleteSimple
