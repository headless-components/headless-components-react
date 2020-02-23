import { renderHook, act } from '@testing-library/react-hooks';
import useAutocomplete from './useAutocomplete';

test('should change input value', () => {
  const { result } = renderHook(() => useAutocomplete(['casa', 'house']));

  expect(result.current.value).toBe('');
  expect(result.current.filter).toEqual([]);

  act(() => {
     result.current.onInput('house');
   })

   expect(result.current.value).toBe('house');
})

test('should filter', () => {
  const { result } = renderHook(() => useAutocomplete(['casa', 'house', 'masa']));

  act(() => {
     result.current.onInput('sa');
   })

   expect(result.current.filter).toEqual(['casa', 'masa']);
})


test('should not filter if input is empty', () => {
  const { result } = renderHook(() => useAutocomplete(['casa', 'house', 'masa']));

  act(() => {
     result.current.onInput('sa');
   })

   expect(result.current.filter).toEqual(['casa', 'masa']);

   act(() => {
    result.current.onInput('');
  })

  expect(result.current.filter).toEqual([]);
})

test('should selected a value', () => {
  const { result } = renderHook(() => useAutocomplete((['casa', 'house', 'masa'])));

  act(() => {
    result.current.onSelect('masa');
  })

  expect(result.current.value).toBe('masa');
  expect(result.current.filter).toEqual([]);
})

