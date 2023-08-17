export default ({ redirect }) => {
    let isLogged = true;

    if(!isLogged){
        redirect('/');
    }
}