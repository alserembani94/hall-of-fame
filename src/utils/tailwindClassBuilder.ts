export const ctw = (
  classArray: React.HTMLAttributes<HTMLElement>["className"][]
) => {
  return classArray.join(" ");
};
