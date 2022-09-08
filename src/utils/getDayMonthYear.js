

export function getDMY(date) {
   return new Date(date).toLocaleString('en-us',{month:'long'})
}