// How to use:
/*   <Keyframe
 *     name="appear"
 *     animationProps={{ from: { opacity: 0 }, to: { opacity: 1 } }}
 *   />
*/

type Props = {
  name: string;
  animationProps: Record<string, React.CSSProperties | string>;
};

const toCss = (cssObject: React.CSSProperties | string) =>
  typeof cssObject === "string"
    ? cssObject
    : Object.keys(cssObject).reduce((accumulator, key) => {
      const cssKey = key.replace(/[A-Z]/g, (v) => `-${v.toLowerCase()}`);
      const cssValue = (cssObject as any)[key].toString().replace("'", "");
      return `${accumulator}${cssKey}: ${cssValue};\n`;
    }, "");

const Keyframe = ({ name, animationProps }: Props) => {
  const cssRules = Object.entries(animationProps).map(
    ([key, value]) => `${key} { ${toCss(value)} }`
  );
  return (
    <style>
      {`@keyframes ${name} {
        ${cssRules.join("\n")}
      }`}
    </style>
  );
};

export default Keyframe;
