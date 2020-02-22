import { renderHook, act } from '@testing-library/react-hooks';

import useTable from './usePagination';
import Rows from "../../sampleData/Rows";
import Cols from "../../sampleData/Cols";

describe('useTable tests', () => {
  test('should return the table', () => {
    const { result } = renderHook(() => useTable(Rows, Cols))

    
  })
})



// table,
// sort: (key, direction) => setAccessor({ key, direction }),
// sortedby: sortAccessor