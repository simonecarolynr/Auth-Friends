
export const PrivateRoute = (props) => {

    if (localStorage.getItem('token') === null) {
        propshistory.push('/login')
    }

}