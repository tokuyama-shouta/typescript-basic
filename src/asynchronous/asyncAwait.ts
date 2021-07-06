// export default async function  asyncAwaitSample() {
//   const url = "https://api.github.com/users/tokuyama.shouta"

//   type Profile = {
//     login: string
//     id: number
//   }

//   type FetchProfile = () => Promise<Profile | null>

//   const fetchProfile: FetchProfile = async () => {
//     const response = await fetch(url)
//       .then((res) => res)
//       .catch((error) => {
//         console.error(error)
//         return null
//       })

//     if(!response){
//       return null
//     }

//     const json = await response.json()
//       .then((json: Profile) => {
//         console.log("Asynchronous async/await sample1:", json)
//         return json
//       })
//       .catch((error) => {
//         console.error(error)
//         return null
//       })

//       if(!json){
//         return null
//       }

//       return json
//   }

//   const profile = await fetchProfile()
//   if(profile) {
//     console.log("Asynchronous async/await sample2:", profile)

//   }

// }
