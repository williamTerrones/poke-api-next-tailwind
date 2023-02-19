import { FC } from "react"

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {

}

const UIInput:FC<Props> = ({
    ...rest
}) => {

    return (
        <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        {...rest} />
    )


}

export default UIInput