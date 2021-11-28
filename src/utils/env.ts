export const isDev = false;

let dev = {
  server: "http://192.168.1.108:8082",
};

let release = {
  server: "http://plus-softjo.info:3000",
};

let env = isDev ? dev : release;
export default env;
