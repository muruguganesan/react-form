import type { ReusableLabelPropsType } from "../_types";

const Required = () => <span className='inline-block text-[#fb2c36]'>*</span>;
const ReusableLabel = ({ htmlFor = "", content = "Enter Name", required = false, fontWeight = "semibold" }: ReusableLabelPropsType) => <label htmlFor={htmlFor} className={`font-${fontWeight}`}>{content} {required && <Required />}</label>;

export { Required, ReusableLabel };
