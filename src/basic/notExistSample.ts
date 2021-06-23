export default function notExistSample() {
  let name = null
  console.log('notExistSample:1', typeof name, name)

  name = 'pkpk'
  if (!name) {
    console.log('notExistsample2:', '吾輩は猫である。名前は' + name)
  } else {
    console.log('notExistsample3:', '吾輩は猫である。名前は' + name)
  }

  const age = undefined
  console.log('notExistSample:1', typeof age, age)

  if (!age) {
    console.log('notExistsample5:', '年齢は秘密です。')
  } else {
    console.log('notExistsample6:', '年齢は' + age + 'です。')
  }
}
