
export const PrivateRoute = (props) => {

    if (localStorage.getItem('token') === null) {
        props.history.push('/login')
    }

}