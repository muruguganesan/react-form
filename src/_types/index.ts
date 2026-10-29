type ReusableLabelPropsType = {
    htmlFor?: string;
    content?: string;
    required?: boolean;
    fontWeight?: string;
}
type FormValuesType = {
    name: string;
    comments: string;
    car: string;
    gender: string;
    mobile: string[] | []
}

export type { ReusableLabelPropsType, FormValuesType };