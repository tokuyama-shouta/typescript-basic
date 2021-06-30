import arraySample from 'array/array'

export default function genericsAdvancedSample() {
  // map関数のシグネチャ
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]
  const mapStringsToNumbers: Map<string, number> = (array, fn) => {
    const result = []
    for (let i = 0; i < arraySample.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }
  const numbers = mapStringsToNumbers(['123', '456', '789'], (item) => Number(item))
  console.log('GenericsAdvancedSample1:', mapStringsToNumbers)

  const mapNumbersToStrings: Map<number, string> = (array, fn) => {
    const result = []
    for (let i = 0; i < arraySample.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }
  const strings = mapNumbersToStrings([123, 456, 789], (item) => String(item))
  console.log('GenericsAdvancedSample2:', mapNumbersToStrings)
}
