// export default function callbackSample() {
//   const url = "https://api.github.com/users/tokuyama.shouta"

//   //コールバックで呼び出す非同期処理
//   const fetchProfile = () => {
//     return fetch(url)
//     .then((res) => {
//       //レスポンスのBodyをJsonで読み取った結果を返す
//       res.json()
//       .then((json) => {
//         console.log("Asynchronous Callback Sample1:", json)
//         return json
//       })
//       .catch((error) => {
//         console.error(error)
//       })
//     })
//     .catch((error) => {
//       console.error(error)
//     })
//   }

//   const profile = fetchProfile()
//   console.log("Asynchronous Callback Sample2:", fetchProfile)
// }
