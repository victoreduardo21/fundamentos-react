/*
        <if test={exp}>
            <span>...</span>
            <span>...</span>
            <span>...</span>
        </if>



*/



export default function ParOuImpar(props) {
    if (props.test) {
        return props.children
    }
    else {
        return false
    }
}