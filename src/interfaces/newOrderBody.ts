export default interface INewOrderBody {
  body: {
    productsIds: number[]
  },
  token: {
    id: number,
    username: string,
    iat: number
  }
}