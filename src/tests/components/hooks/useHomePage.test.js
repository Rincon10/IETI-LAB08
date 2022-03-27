import { renderHook } from '@testing-library/react-hooks';
import { describe, expect, test, jest } from '@jest/globals';
import useHomePage from 'components/hooks/useHomePage';

describe('Test to my custom-hook useHomePage', () => {
    test('Should return the init-state', () => {
        const { result } = renderHook(() => useHomePage());
        const { todo, doing, done } = result.current;

        expect(todo).toEqual([]);
        expect(doing).toEqual([]);
        expect(done).toEqual([]);
    });
});
