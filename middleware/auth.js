export default function ({ store, app, route, redirect }) {
    const user = store.state.user; 
    // if (route.path === '/login' || route.path === '/' || route.path === '') {
    //     if (user) {
    //         return redirect('/')
    //     }
    //     return;
    // }
    // && route.path !== '/signup' && route.path !== '/resetpassword' 
    if (route.path !== '/login' && route.path !== '/' && route.path !== '') {
        if (!user) {
            return redirect('/session')
        }
        return;
    }

}