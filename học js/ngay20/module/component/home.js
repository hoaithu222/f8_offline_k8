export const a = 10;
export const b = 20;

// const getHome = () => {
//   console.log("Home");
// };

// export default getHome; //export default --> chỉ hỗ trợ export với class và function truyền thống
// export { a, b }; //export name bên import phải đặt tên giống khi import có thể để bên trên vd: export const b = 20;
// module.exports = {
//   a,
//   b,
// };
export default function getHome() {
  console.log("Home");
}

// export default viết dưới
//  a=> b=> c=>d
