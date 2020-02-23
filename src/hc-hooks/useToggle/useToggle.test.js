import { renderHook, act } from '@testing-library/react-hooks';
import useToggle from './useToggle';

describe('useState tests', () => {
  test('should use toggle', () => {
    const { result } = renderHook(() => useToggle());
    
    const value = result.current.toggled; 
  
    expect(value).toBe(false)
  });
  
  test('should use toggle', () => {
    const { result } = renderHook(() => useToggle(true));
    
    const value = result.current.toggled; 
  
    expect(value).toBe(true)
  });
  
  test('should update toggle value', () => {
    const { result } = renderHook(() => useToggle(true))
    const {setToggle} = result.current;

    act(() => setToggle(false))

    expect(result.current.toggled).toBe(false)
  });
});
