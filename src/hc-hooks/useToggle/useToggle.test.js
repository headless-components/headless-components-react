import { renderHook, act } from '@testing-library/react-hooks';
import useToggle from './useToggle';
import { useState } from 'react';

describe('useState tests', () => {
  test('should use toggle', () => {
    const { result } = renderHook(() => useToggle());
    
    const [value] = result.current.toggled; 
  
    expect(value).toBe(false)
  });
  
  test('should use toggle', () => {
    const { result } = renderHook(() => useToggle(true));
    
    const [value] = result.current.toggled; 
  
    expect(value).toBe(true)
  });
  
  test('should update setToggle value using setter', () => {
    const { result } = renderHook(() => useState(true))
  
    const [_, setValue] = result.current;
  
    act(() => setValue(false))
  
    const [value] = result.current.toggled;
  
    expect(value).toBe(false)
  });
});
