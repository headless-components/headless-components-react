import { renderHook, act } from '@testing-library/react-hooks';

import useTabs from './useTabs';

import TabsData from '../../sampleData/TabsData';

describe('UseTabs test', () => {
  test('should render the active content', () => {
    const { result } = renderHook(() => useTabs(TabsData, 0))
    expect(result.current.Content.props.children).toBe(TabsData[0].content().props.children);
  });

  test('should update the active content', () => {
    const { result } = renderHook(() => useTabs(TabsData, 0))

    const { updateTabs } = result.current;
    
    act(() => updateTabs(2))

    expect(result.current.Content.props.children).toBe(TabsData[2].content().props.children);
  });

  test('should render the properly tab list', () => {
    const { result } = renderHook(() => useTabs(TabsData, 0))

    const { tabsList } = result.current;
    
    expect(tabsList[0].active).toBe(true);
    act(() => result.current.updateTabs(2))
    
    expect(result.current.tabsList[2].active).toBe(true);
    expect(result.current.tabsList[2].label).toBe(TabsData[2].label);
  })
})
