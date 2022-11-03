import del from "del";

export const clean = () => {
  return del(config.path.clean)
}