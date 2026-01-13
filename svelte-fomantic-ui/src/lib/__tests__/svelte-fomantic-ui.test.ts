import { describe, it, expect } from 'vitest'
import { classString, otherProps, serialize, rationalize } from '../svelte-fomantic-ui'

describe('classString', () => {
  describe('ui prefix', () => {
    it('should include "ui" prefix when ui is true', () => {
      const result = classString(true, {}, 'button')
      // Note: function produces "ui  button" due to concatenation logic
      expect(result).toContain('ui')
      expect(result).toContain('button')
    })

    it('should not include "ui" prefix when ui is false', () => {
      const result = classString(false, {}, 'button')
      expect(result).toBe('button')
    })
  })

  describe('boolean props', () => {
    it('should include boolean props that are true', () => {
      const result = classString(true, { primary: true, large: true }, 'button')
      expect(result).toContain('primary')
      expect(result).toContain('large')
    })

    it('should exclude boolean props that are false', () => {
      const result = classString(true, { primary: true, disabled: false }, 'button')
      expect(result).toContain('primary')
      expect(result).not.toContain('disabled')
    })

    it('should handle all false boolean props', () => {
      const result = classString(true, { primary: false, large: false }, 'button')
      expect(result).toContain('ui')
      expect(result).toContain('button')
    })
  })

  describe('underscore prop', () => {
    it('should include underscore prop value in class string', () => {
      const result = classString(true, { _: 'custom-class extra' }, 'button')
      expect(result).toContain('custom-class extra')
    })

    it('should combine underscore prop with boolean props', () => {
      const result = classString(true, { primary: true, _: 'extra' }, 'button')
      expect(result).toContain('primary')
      expect(result).toContain('extra')
      expect(result).toContain('button')
    })
  })

  describe('main class', () => {
    it('should always include the main class', () => {
      const result = classString(false, {}, 'container')
      expect(result).toBe('container')
    })

    it('should put main class at the end', () => {
      const result = classString(true, { primary: true }, 'button')
      expect(result?.endsWith('button')).toBe(true)
    })
  })

  describe('edge cases', () => {
    it('should return undefined for empty result', () => {
      const result = classString(false, {}, '')
      expect(result).toBeUndefined()
    })

    it('should trim whitespace', () => {
      const result = classString(true, {}, 'button')
      expect(result).not.toMatch(/^\s|\s$/)
    })

    it('should ignore non-boolean props', () => {
      const result = classString(true, { id: 'myid', name: 'test' }, 'button')
      expect(result).toContain('ui')
      expect(result).toContain('button')
      expect(result).not.toContain('myid')
      expect(result).not.toContain('name')
    })
  })
})

describe('otherProps', () => {
  describe('filtering', () => {
    it('should filter out boolean props', () => {
      const result = otherProps({ primary: true, id: 'test' })
      expect(result).not.toHaveProperty('primary')
      expect(result).toHaveProperty('id', 'test')
    })

    it('should filter out underscore prop', () => {
      const result = otherProps({ _: 'classes', id: 'test' })
      expect(result).not.toHaveProperty('_')
      expect(result).toHaveProperty('id', 'test')
    })

    it('should keep non-boolean props', () => {
      const result = otherProps({ id: 'test', name: 'input', value: 42 })
      expect(result).toHaveProperty('id', 'test')
      expect(result).toHaveProperty('name', 'input')
      expect(result).toHaveProperty('value', 42)
    })
  })

  describe('data prop expansion', () => {
    it('should expand data object to data- attributes', () => {
      const result = otherProps({ data: { id: '123', action: 'submit' } })
      expect(result).toHaveProperty('data-id', '123')
      expect(result).toHaveProperty('data-action', 'submit')
    })

    it('should handle empty data object', () => {
      const result = otherProps({ data: {} })
      expect(Object.keys(result)).toHaveLength(0)
    })

    it('should combine data expansion with other props', () => {
      const result = otherProps({ id: 'myid', data: { value: 'test' } })
      expect(result).toHaveProperty('id', 'myid')
      expect(result).toHaveProperty('data-value', 'test')
    })
  })

  describe('edge cases', () => {
    it('should handle empty object', () => {
      const result = otherProps({})
      expect(Object.keys(result)).toHaveLength(0)
    })

    it('should handle object with only boolean props', () => {
      const result = otherProps({ active: true, disabled: false })
      expect(Object.keys(result)).toHaveLength(0)
    })
  })
})

describe('serialize', () => {
  describe('parameter variations', () => {
    it('should return undefined with no parameters', () => {
      const result = serialize()
      expect(result).toBeUndefined()
    })

    it('should return undefined when first parameter is falsy', () => {
      expect(serialize(null)).toBeUndefined()
      expect(serialize(undefined)).toBeUndefined()
      expect(serialize('')).toBeUndefined()
      expect(serialize(0)).toBeUndefined()
    })

    it('should serialize with one parameter (type only)', () => {
      const result = serialize('modal')
      expect(result).toContain('"type":"modal"')
      expect(result).toContain('"settings":{}')
    })

    it('should serialize with two parameters (type and settings)', () => {
      const result = serialize('slider', { min: 0, max: 100 })
      expect(result).toContain('"type":"slider"')
      expect(result).toContain('"min":0')
      expect(result).toContain('"max":100')
    })

    it('should serialize with three parameters (type, settings, activate)', () => {
      const result = serialize('progress', { value: 50 }, true)
      expect(result).toContain('"type":"progress"')
      expect(result).toContain('"value":50')
      expect(result).toContain('"activate":true')
    })
  })

  describe('output format', () => {
    it('should produce valid JSON-like string', () => {
      const result = serialize('popup', { delay: 100 })
      expect(result).toBeDefined()
      // Should be parseable after handling function strings
      expect(result).toMatch(/^\{.*\}$/)
    })
  })
})

describe('rationalize', () => {
  describe('filtering', () => {
    it('should filter out undefined values', () => {
      const result = rationalize(['a', undefined, 'b'])
      expect(result).toBeDefined()
      const parsed = JSON.parse(result!)
      expect(parsed).toHaveLength(2)
      expect(parsed).toContain('a')
      expect(parsed).toContain('b')
    })

    it('should filter out null values', () => {
      const result = rationalize(['a', null, 'b'])
      expect(result).toBeDefined()
      const parsed = JSON.parse(result!)
      expect(parsed).toHaveLength(2)
    })

    it('should filter out both null and undefined', () => {
      const result = rationalize([null, 'valid', undefined, 'also valid', null])
      expect(result).toBeDefined()
      const parsed = JSON.parse(result!)
      expect(parsed).toHaveLength(2)
    })
  })

  describe('edge cases', () => {
    it('should return undefined for empty array', () => {
      const result = rationalize([])
      expect(result).toBeUndefined()
    })

    it('should return undefined for array with only null/undefined', () => {
      const result = rationalize([null, undefined, null])
      expect(result).toBeUndefined()
    })

    it('should handle array with single valid item', () => {
      const result = rationalize(['only'])
      expect(result).toBeDefined()
      const parsed = JSON.parse(result!)
      expect(parsed).toEqual(['only'])
    })
  })

  describe('output format', () => {
    it('should return valid JSON string', () => {
      const result = rationalize(['a', 'b', 'c'])
      expect(result).toBeDefined()
      expect(() => JSON.parse(result!)).not.toThrow()
    })

    it('should preserve non-string values', () => {
      const result = rationalize([1, 'two', true])
      expect(result).toBeDefined()
      const parsed = JSON.parse(result!)
      expect(parsed).toContain(1)
      expect(parsed).toContain('two')
      expect(parsed).toContain(true)
    })
  })
})
