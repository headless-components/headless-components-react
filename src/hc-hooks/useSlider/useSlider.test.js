import { renderHook, act } from '@testing-library/react-hooks';
import useSlider from './useSlider';

describe('useState test', () => {
  test('should use useSlider', () => {
    const { result } = renderHook(() => useSlider(0));
    const value = result.current.active;

    expect(value).toBe(0);
  });

  test('should use useSlider', () => {
    const { result } = renderHook(() => useSlider(1));
    const value = result.current.active;

    expect(value).toBe(1);
  });

  test('should update the value', () => {
    const { result } = renderHook(() => useSlider(2))
    const { setActive } = result.current;
    
    act(() => setActive(2))
    
    expect(result.current.active).toBe(2)
  })
});

