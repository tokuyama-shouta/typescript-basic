export default function arraySample() {
  //シンプルな配列の型定義
  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  console.log('Array array sample1:', colors)

  const even: Array<number> = [2, 4, 6]
  even.push(8)
  console.log('Array array sample1:', even)

  const ids: (string | number)[] = ['ABC', 123]
  ids.push('DEF')
  ids.push(456)
  console.log('Array array sample1:', ids)
}
