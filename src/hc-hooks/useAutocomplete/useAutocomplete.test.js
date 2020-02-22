import { renderHook, act } from '@testing-library/react-hooks';
import useAutocomplete from './useAutocomplete';

test('should change input value', () => {
  const { result } = renderHook(() => useAutocomplete());

  act(() => {
    result.current.onInput('house');
  })

  expect(result.current.value).toBe('house');
  expect(result.current.filtering).toBe(true);
})

test('should selected a value', () => {
  const { result } = renderHook(() => useAutocomplete());

  act(() => {
    result.current.onSelect('milk');
  })

  expect(result.current.value).toBe('milk');
  expect(result.current.filtering).toBe(false);
})

test('should return a result value if it finds the value into the data', () => {
  const { result } = renderHook(() => useAutocomplete(['house', 'rose', 'roseton']));

  act(() => {
    result.current.filterValue('rose');
  })

  expect(result.current.filter).toBe(['rose', 'roseton']);
})

test('if the value not matches with data, it should return a empty array ', () => {
  const { result } = renderHook(() => useAutocomplete(['house', 'rose', 'roseton']));

  act(() => {
    result.current.filterValue('paper');
  })

  expect(result.current.filter).toBe([]);
});

