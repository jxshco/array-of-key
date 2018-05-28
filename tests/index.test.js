import arrayOfKey from '../src'

test('returns correct array from numbers', () => {
  expect(arrayOfKey([{ id: 1 }, { id: 2 }, { id: 3 }], 'id')).toEqual([1, 2, 3])
})

test('returns correct array from strings', () => {
  expect(
    arrayOfKey(
      [
        { id: 1, name: 'Josh', age: 21 },
        { id: 2, name: 'Sarah', age: '25' },
        { id: 3, name: 'Max' }
      ],
      'name'
    )
  ).toEqual(['Josh', 'Sarah', 'Max'])
})

test("returns correct array from strings and numbers + if the key is missing doesn't throw/error", () => {
  expect(
    arrayOfKey(
      [
        { id: 1, name: 'Josh', age: 21 },
        { id: 2, name: 'Sarah', age: '25' },
        { id: 3, name: 'Max' }
      ],
      'age'
    )
  ).toEqual([21, '25'])
})
