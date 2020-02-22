import { renderHook, act } from '@testing-library/react-hooks';

import usePagination from './usePagination';

describe('usePagination test', () => {
  test('should return the currentPage', () => {
    const { result } = renderHook(() => usePagination({totalItems: 150, itemsPerPage: 10, window: 4, initialPage: 1}))
  
    const [value] = result.current.currentPage;
  
    expect(value).toBe(1);
  });

  test('should update the active page', () => {
    const { result } = renderHook(() => usePagination());
  
    const [_, updatePage] = result.current;
  
    act(() => updatePage(2))
  
    const [value] = result.current.currentPage;
  
    expect(value).toBe(2);
  });



  // test('should return the total pages', () => {
  //   const { result } = renderHook(() => usePagination({totalItems: 150, itemsPerPage: 10}));

  //   const [value] = result.current.totalPages;

  //   expect(value).toBe()
  // })

  // test('should return range page', () => {
  //   const { result } = renderHook(() => usePagination());
  
  //   const [_, updatePage] = result.current;
  
  //   act(() => updatePage(2))
  
  //   const [value] = result.current.currentPage;
  
  //   expect(value).toBe(2);
  // });
  
})

useEffect(() => {
  setTotalPages(Math.ceil(totalItems / itemsPerPage));
}, [totalItems, itemsPerPage]);

describe('useEffects tests', () => {
  test('should handle useEffect hook', () => {
    const sideEffect = {[1]: false, [2]: false}

    const { rendered, unmount } = renderHook(({ totalItems, itemsPerPage }) => {
      useEffect(() => {
        sideEffect[totalItems] = true;
        sideEffect[itemsPerPage] = true;
        return () => {
          sideEffect[totalItems] = false;
          sideEffect[itemsPerPage] = true;
        }
      }, ['totalItems', 'itemsPerPage'])
  },
  { initialProps: { totalItems: 150, itemsPerPage: 10 } }
  )

  expect(sideEffect[150, 10]).toBe(true)
  expect(sideEffect[0, 1]).toBe(false)

  rendered({pages: 15});
});


// let range = Array.from(Array(endPage + 1 - startPage).keys()).map(
//   i => startPage + i
// );









currentPage: active,
    updatePage: setActive,
    rangePages: range,
    totalPages: pages