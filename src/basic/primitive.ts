export default function primitiveSample() {
  const name = 'pkpk'
  console.log('primitiveSample1:', typeof name, name)

  const age = 25
  console.log('primitiveSample2:', typeof age, age)

  const isSingle = true
  console.log('primitiveSample3:', typeof isSingle, isSingle)

  const isOver20: boolean = age >= 20
  console.log('primitiveSample4:', typeof isOver20, isOver20)
}
