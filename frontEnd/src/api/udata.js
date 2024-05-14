export default function getDataUtilisateur() {
  const u_info = {
    u_token: localStorage.token, 
  };

  const headOpts = {
    opts: {
      headers: {
        Authorization: u_info.u_token,
      },
    },
  };

  let u_data = Object.assign({}, u_info);
  u_data = Object.assign(u_data, headOpts);

  return u_data;
}
