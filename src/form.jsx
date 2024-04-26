import './Form.css'
export default function Form(){
    return(
        <>
        <form action="">
            <input type="email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[ru]{2,}$"/>
            <input type="passWord"pattern="[a-z0-9]{8,}" />
            <button>LOG IN</button>
        </form>
        </>
    )
}