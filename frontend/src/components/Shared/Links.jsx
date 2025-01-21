import Link from "next/link";
function Links(props) {
  const target =
    props.target === null || props.target === undefined
      ? "_self"
      : `target=${props.target}`;
  const label =
    props.label === null || props.label === undefined || props.label === ""
      ? ""
      : props.label;
  const className =
    props.className === null || props.className === undefined
      ? ""
      : props.className;
  return props.href !== undefined && props.href !== null ? (
    <Link href={props.href} target={target} className={`${className} z-50`}>
      {label}
    </Link>
  ) : (
    <span className={`${className} z-50`}>{label}</span>
  );
}
export default Links;
