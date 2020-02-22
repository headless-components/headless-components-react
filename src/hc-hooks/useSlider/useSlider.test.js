import { renderHook, act } from '@testing-library/react-hooks';
import useToggle from './useToggle';
import { useState } from 'react';
import useSlider from './useSlider';

describe('useState test', () => {
  test('should use useSlider', () => {
    const { result } = renderHook(() => useSlider());
    const [value] = result.current.active;

    expect(value).toBe(0);
  });

  test('should use useSlider', () => {
    const { result } = renderHook(() => useSlider(1));
    const [value] = result.current.active;

    expect(value).toBe(1);
  });

  test('should update setToggle value using setter', () => {
    const { result } = renderHook(() => useState());

    const [_, setActive] = result.current;

    act(() => setActive(3))

    const [value] = result.current.active;

    expect(value).toBe(3);
  })
});
