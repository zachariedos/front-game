type InputType = {
    size?: "sm" | "md" | "lg" | "xl",
    customColor?: string,
    title:string,
    onClick?: () => void,
    disabled?:boolean
}
export default function Button(props: InputType) {

    const paddingBySize = {
        "sm": "0.5",
        "md": "1",
        "lg": "2",
        "xl": "3"
    }

    const dynamicPadding = `p-${paddingBySize[props.size ?? "md"]}`;
    const dynamicTextSize = `text-${props.size ?? "md"}`;


    return <button disabled={props?.disabled} className={`
                  text-${props.size ?? "md"} rounded ${dynamicPadding} ${dynamicTextSize} 
                  text-white font-bold pointer-cursor w-full shadow-md
                  ring-light-primary-700 dark:ring-dark-primary-700 
                  bg-light-primary-500 dark:bg-dark-primary-500
                  hover:bg-light-primary-600 hover:dark:bg-dark-primary-600
                  disabled:bg-gray-400 disabled:dark:bg-gray-400
                  `}
                   onClick={props.onClick}
    >
        {props.title}
    </button>
}
