import { renderHook, act } from '@testing-library/react-hooks';

import useTable from './useTable';
import Rows from "../../sampleData/Rows";
import Cols from "../../sampleData/Cols";

describe('useTable tests', () => {
  test('should return the table', () => {
    const { result } = renderHook(() => useTable(Rows, Cols))
    expect(result.current.table).toBeDefined()
    expect(result.current.table.rows.length).toEqual(Rows.length)
    expect(result.current.table.headers.length).toEqual(Cols.length)
  });

  test('should return the proper data', () => {
    const { result } = renderHook(() => useTable(Rows, Cols))
    expect(result.current.table.rows[0][0]).toBe(Rows[0].name);
    expect(result.current.table.rows[0][1]).toBe('Carnero Gómez');
    expect(result.current.table.rows[0][2].props.children).toBe(70);
    expect(result.current.table.headers[0].labels).toBe('Nombre');
  })

  test('should sort properly', () => {
    const { result } = renderHook(() => useTable(Rows, Cols))
    act(() => result.current.sort(Cols[2].accessor, 'asc'))

    expect(result.current.sortedby.key).toBe(Cols[2].accessor)
    expect(result.current.sortedby.direction).toBe('asc')
    expect(result.current.table.rows[0][0]).toBe(Rows[3].name);
    expect(result.current.table.rows[0][2].props.children).toBe(Rows[3].age);


    act(() => result.current.sort(Cols[2].accessor, 'desc'))

    expect(result.current.sortedby.direction).toBe('desc')
    expect(result.current.table.rows[0][0]).toBe(Rows[1].name);
    expect(result.current.table.rows[0][2].props.children).toBe(Rows[1].age);
  })
})
