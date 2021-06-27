export default function objectSample() {
  const a = {
    name: 'Torahack',
    age: 28,
  }

  //オブジェクトリテラル記法
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }
  console.log('Object object sample 1:', country)

  country = {
    language: 'English',
    name: 'United States of America',
  }
  console.log('Object object sample 2:', country)

  const pkpk: {
    age: number
    lastName: string
    //readonly 変更できなくする
    readonly firstName: string
    // ? はあってもなくても良い
    gender?: string
  } = {
    age: 25,
    lastName: 'pkpk',
    firstName: 'pkpk',
  }
  pkpk.gender = 'male'
  pkpk.lastName = 'tobikagati'
  console.log('Object object sample 3:', pkpk)

  //インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }

  capitals.China = 'Beijing'
  capitals.Kanada = 'Ottawa'
  console.log('Object object sample 3:', capitals)
}
