type InputType = {
    type: string,
    size?: "sm" | "md" | "lg" | "xl",
    customColor?: string,
    placeholder?: string,
    value?: string,
    onChange?: (event:any)=>void,
}
export default function Input(props: InputType) {

    const paddingBySize = {
        "sm": "0.5",
        "md": "1",
        "lg": "2",
        "xl": "3"
    }

    const dynamicPadding = `p-${paddingBySize[props.size ?? "md"]}`;
    const dynamicTextSize = `text-${props.size ?? "md"}`;

    return <input type={props.type}
                  className={`
                  focus:ring-1 outline-0 text-white font-bold shadow-md 
                  text-${props.size ?? "md"} rounded ${dynamicPadding} ${dynamicTextSize} 
                  ring-light-primary-700 dark:ring-dark-primary-700 
                  bg-light-primary-500 dark:bg-dark-primary-500
                  placeholder-white placeholder:opacity-70
                  `}
                  placeholder={props.placeholder}
                  onChange={props.onChange}
                  value={props.value}
    />
}
