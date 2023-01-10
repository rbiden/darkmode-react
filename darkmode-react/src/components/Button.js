export const Button = ( props ) => {
    const theme =  props.theme === 'dark' ? 'bg-light text-dark' : ((props.theme === 'light') ? 'bg-dark text-light' : '');
    return (
        <button
            onClick={ props.onClick }
            className={`py-2 px-6 rounded-xl font-semibold active:scale-95 hover:opacity-90 ${ theme } ${ props.custom }`}>
                { props.children }
        </button>
    )
}