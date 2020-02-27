import { renderHook, act } from '@testing-library/react-hooks';

import { usePagination } from './usePagination';

describe('usePagination test', () => {
  test('should return the currentPage', () => {
    const { result } = renderHook(() => usePagination({ totalItems: 150, itemsPerPage: 10, window: 4, initialPage: 1}))
  
    const value = result.current.currentPage;
  
    expect(value).toBe(1);
  });

  test('should update active page', () => {
    const { result } = renderHook(() => usePagination({ totalItems: 150, itemsPerPage: 10, window: 4, initialPage: 1}))

    const { updatePage } = result.current;

    act(() => updatePage(3))

    expect(result.current.currentPage).toBe(3)
  });

  test('should render total pages', () => {
    const { result } = renderHook(() => usePagination({ totalItems: 150, itemsPerPage: 10, window: 4, initialPage: 1}))

    expect(result.current.totalPages).toBe(15)
  });

  test('should render range pages', () => {
    const { result } = renderHook(() => usePagination({ totalItems: 150, itemsPerPage: 10, window: 3, initialPage: 1}))

    expect(result.current.rangePages).toEqual([1, 2, 3])

    act(() => result.current.updatePage(6))
    expect(result.current.rangePages).toEqual([5, 6, 7])
  });
});







