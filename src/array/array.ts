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

  //配列の型推論
  const generateSomeArray = () => {
    const _someArray = [] //any[]
    _someArray.push(123) //number[]
    _someArray.push('ABC') //string[]
    return _someArray
  }
  const someArray = generateSomeArray()
  someArray.push(456)
  console.log('Array array sample4:', someArray)

  // イミュータブルな配列を作る
  const commands: readonly string[] = ['git add', 'git commit', 'git push']
  console.log('Array array sample5:', commands)
}
