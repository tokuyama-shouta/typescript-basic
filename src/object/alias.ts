export default function typeAliasSample() {
  //型エイリアス
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  }
  console.log('Object alias sample 1:', japan)

  const america: Country = {
    capital: 'Washington, D.C.',
    language: 'English',
    name: 'United States of America',
  }
  console.log('Object alias sample 2:', america)

  //合併型(Union)と交差型(intersection)
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }
  type Wizerd = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }
  //合併型 knightまたはWizerdの型を持ちますよ
  type Adventurer = Knight | Wizerd

  //交差型 knightかつWizerdの型を持つ
  type Paladin = Knight & Wizerd

  //knight寄の冒険者
  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: '木の剣',
    swordSkill: '三連ぎり',
  }
  //Wizerd寄の冒険者
  const adventurer2: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: '木の杖',
    magicSkill: 'ファイヤーボール',
  }

  console.log('Object alias sample 3:', adventurer1)
  console.log('Object alias sample 4:', adventurer2)

  const paladin: Paladin = {
    hp: 300,
    sp: 300,
    mp: 300,
    weapon: '銀の剣',
    swordSkill: '三連ぎり',
    magicSkill: 'ファイヤーボール',
  }
  console.log('Object alias sample 5:', paladin)
}
