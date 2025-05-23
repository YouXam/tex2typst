import path from 'path';
import toml from 'toml';
import fs from 'node:fs';
import { describe, it, test, expect } from 'vitest';
import { tex2typst, symbolMap } from '../src';

interface CheatSheet {
    math_commands: { [key: string]: string };
    math_symbols: { [key: string]: string };
}

describe('cheat sheet', () => {
    const cheatSheetFile = path.join(__dirname, 'cheat-sheet.toml');
    const text_content = fs.readFileSync(cheatSheetFile, { encoding: 'utf-8' });
    const data = toml.parse(text_content) as CheatSheet;

    test('math_commands', () => {
        expect(data.math_commands).toBeDefined();


        for (const [key, value] of Object.entries(data.math_commands)) {
            const input = `\\${key}{x}{y}`;
            const expected1 = `${value} x y`;
            const expected2 = `${value}(x) y`;
            const expected3 = `${value}(x, y)`;
            const result = tex2typst(input, {preferShorthands: false});
            expect([expected1, expected2, expected3]).toContain(result);
        }
    });

    test('math_symbols', () => {
        expect(data.math_symbols).toBeDefined();

        for (const [key, value] of Object.entries(data.math_symbols)) {
            const input = `\\${key}`;
            const expected = value;
            const result = tex2typst(input, {preferShorthands: false});
            expect(result).toBe(expected);
            expect(symbolMap.get(key)).toBe(expected);
        }
    });
});
