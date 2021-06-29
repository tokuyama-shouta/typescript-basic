export default function tupleSample() {
  //一般的なタプルの型定義
  const respones: [number, string] = [200, 'OK']
  console.log('Array tuple sample1:', respones)

  // 可変長引数を使ったタプル

  const girlfriend: [string, ...string[]] = ['Kana', 'Miku', 'Keiko']
  girlfriend.push('Misa')
  console.log('Array tuple sample2:', girlfriend)
}
