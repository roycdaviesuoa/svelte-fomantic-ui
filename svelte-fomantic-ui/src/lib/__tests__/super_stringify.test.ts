import { describe, it, expect, beforeEach } from 'vitest'
import { super_stringify, lookupFunction, clearFunctionRegistry, getFunctionRegistrySize } from '../super_stringify'

describe('super_stringify', () => {
  describe('strings', () => {
    it('should stringify a simple string', () => {
      expect(super_stringify('hello')).toBe('"hello"')
    })

    it('should escape double quotes in strings', () => {
      expect(super_stringify('say "hello"')).toBe('"say \\"hello\\""')
    })

    it('should escape single quotes in strings', () => {
      expect(super_stringify("it's")).toBe('"it\\\'s"')
    })

    it('should handle empty string', () => {
      expect(super_stringify('')).toBe('""')
    })
  })

  describe('numbers', () => {
    it('should stringify integers', () => {
      expect(super_stringify(42)).toBe('42')
    })

    it('should stringify floats', () => {
      expect(super_stringify(3.14)).toBe('3.14')
    })

    it('should stringify zero', () => {
      expect(super_stringify(0)).toBe('0')
    })

    it('should stringify negative numbers', () => {
      expect(super_stringify(-10)).toBe('-10')
    })
  })

  describe('booleans', () => {
    it('should stringify true', () => {
      expect(super_stringify(true)).toBe('true')
    })

    it('should stringify false', () => {
      expect(super_stringify(false)).toBe('false')
    })
  })

  describe('arrays', () => {
    it('should stringify empty array', () => {
      expect(super_stringify([])).toBe('[]')
    })

    it('should stringify array of strings', () => {
      expect(super_stringify(['a', 'b', 'c'])).toBe('["a","b","c"]')
    })

    it('should stringify array of numbers', () => {
      expect(super_stringify([1, 2, 3])).toBe('[1,2,3]')
    })

    it('should stringify mixed array', () => {
      expect(super_stringify(['hello', 42, true])).toBe('["hello",42,true]')
    })

    it('should filter out undefined and null values', () => {
      expect(super_stringify([1, undefined, 2, null, 3])).toBe('[1,2,3]')
    })

    it('should handle nested arrays', () => {
      expect(super_stringify([[1, 2], [3, 4]])).toBe('[[1,2],[3,4]]')
    })
  })

  describe('objects', () => {
    it('should stringify empty object', () => {
      expect(super_stringify({})).toBe('{}')
    })

    it('should stringify simple object', () => {
      expect(super_stringify({ a: 1, b: 2 })).toBe('{"a":1,"b":2}')
    })

    it('should stringify object with string values', () => {
      expect(super_stringify({ name: 'test' })).toBe('{"name":"test"}')
    })

    it('should filter out undefined and null values', () => {
      expect(super_stringify({ a: 1, b: undefined, c: null, d: 2 })).toBe('{"a":1,"d":2}')
    })

    it('should stringify nested objects', () => {
      expect(super_stringify({ outer: { inner: 'value' } })).toBe('{"outer":{"inner":"value"}}')
    })

    it('should stringify object with array values', () => {
      expect(super_stringify({ items: [1, 2, 3] })).toBe('{"items":[1,2,3]}')
    })
  })

  describe('functions', () => {
    beforeEach(() => {
      clearFunctionRegistry()
    })

    it('should register function and return registry ID', () => {
      const fn = function() { return 1; }
      const result = super_stringify(fn)
      expect(result).toMatch(/^"__fn_\d+_\d+"$/)
    })

    it('should store function in registry for later lookup', () => {
      const fn = () => 42
      const result = super_stringify(fn)
      const fnId = result.replace(/"/g, '')
      const retrieved = lookupFunction(fnId)
      expect(retrieved).toBe(fn)
      expect((retrieved as () => number)()).toBe(42)
    })

    it('should increment registry size for each function', () => {
      expect(getFunctionRegistrySize()).toBe(0)
      super_stringify(() => 1)
      expect(getFunctionRegistrySize()).toBe(1)
      super_stringify(() => 2)
      expect(getFunctionRegistrySize()).toBe(2)
    })

    it('should handle functions in objects', () => {
      const fn = () => 'test'
      const result = super_stringify({ callback: fn })
      expect(result).toMatch(/"callback":"__fn_\d+_\d+"/)
      expect(getFunctionRegistrySize()).toBe(1)
    })
  })

  describe('validJSON mode', () => {
    beforeEach(() => {
      clearFunctionRegistry()
    })

    it('should produce same registry ID format in validJSON mode', () => {
      const fn = () => "hello"
      const result = super_stringify(fn, true)
      expect(result).toMatch(/^"__fn_\d+_\d+"$/)
    })

    it('should produce valid JSON-like output for objects', () => {
      const obj = { key: 'value', num: 42 }
      const result = super_stringify(obj, true)
      expect(result).toBe('{"key":"value","num":42}')
    })
  })

  describe('complex nested structures', () => {
    it('should handle deeply nested mixed structures', () => {
      const complex = {
        name: 'test',
        numbers: [1, 2, 3],
        nested: {
          deep: {
            value: 'found'
          }
        }
      }
      const result = super_stringify(complex)
      expect(result).toContain('"name":"test"')
      expect(result).toContain('"numbers":[1,2,3]')
      expect(result).toContain('"value":"found"')
    })
  })
})
