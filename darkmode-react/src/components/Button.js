export const Button = ( props ) => {
    const theme =  props.theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark';
    return (
        <button
            className={`py-2 px-6 rounded-xl font-semibold active:scale-95 hover:opacity-90 ${ props.custom } ${ theme }`}>
                { props.name }
        </button>
    )
}